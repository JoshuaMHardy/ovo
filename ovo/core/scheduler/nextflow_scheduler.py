import json
import signal
import subprocess
from pathlib import Path
from typing import Any
from uuid import uuid1
import importlib
import pandas as pd
import psutil
import os
import re
from datetime import datetime
from ovo.core.scheduler.base_scheduler import JobNotFound, Scheduler, SchedulerTypes
from ovo.core.scheduler.simple_queue_mixin import SimpleQueueMixin
from ovo.cli.common import init_nextflow, run_nextflow, OVOCliError
from ovo.core.utils.param_validation import validate_params, flatten_schema
import shutil


@SchedulerTypes.register()
class NextflowScheduler(Scheduler, SimpleQueueMixin):
    def submit(self, pipeline_name: str, params: dict = None, submission_args: dict = None) -> str:
        """
        Submits a Nextflow workflow asynchronously and returns the PID.

        :param pipeline_name: Workflow name and revision (ovo.rfdiffusion-end-to-end or github url with @version)
        :param params: Dictionary of parameters to pass to the workflow.
        :param submission_args: Submission arguments for the scheduler, overrides values in self.submission_args
        :return: Scheduler job ID
        """
        if not self.allow_submit:
            raise RuntimeError("Job submission is disabled")
        submission_args = {**self.submission_args, **(submission_args or {})}
        sync = submission_args.pop("sync", False)
        if self.has_queue():
            # When using queue workers, do not use -bg mode
            submission_args.pop("queue", None)
            sync = True

        command = self._create_run_command(
            pipeline_name=pipeline_name,
            params=params,
            sync=sync,
            submission_args=submission_args,
        )

        # Make sure nextflow is initialized to avoid unexpected failures later
        init_nextflow()

        job_id = str(uuid1())  # uuid1 is increasing by time
        execdir = self._get_exec_dir(job_id)
        os.makedirs(self.workdir, exist_ok=True)
        os.makedirs(execdir, exist_ok=False)  # fail in rare case that uuid1 is not unique

        print(f"Submitting workflow: {' '.join(command)}")
        print(f"Execution directory: {execdir}")

        if self.has_queue():
            # Submit the command to the queue. Worker will run queue_run_task() in the worker loop.
            self.queue_put((command, job_id))
            return job_id
        else:
            # Run the command directly in a subprocess
            return self._run_subprocess(command, job_id, sync=sync)

    def _run_subprocess(self, command: list[str], job_id: str, sync: bool = False):
        # Run the Nextflow command in a child process
        out = None if sync else subprocess.DEVNULL
        env = {
            # inherit all environment variables
            **os.environ,
            # NOTE this forces conda to *prepend* the activated environment to PATH instead of replacing.
            # This avoids an issue which happens when a virtualenv with OVO is activated on top of a conda env,
            # where the virtualenv's bin directory is prepended to PATH, and conda env activation
            # only replaces the original env with the new env but doesn't change the order, so virtualenv takes precedence.
            "CONDA_SHLVL": "0",
        }
        execdir = self._get_exec_dir(job_id)
        process = subprocess.Popen(command, cwd=execdir, stdout=out, stderr=out, env=env)

        # Write down the process ID into .nextflow.pid file
        # Note that when running with sync=False, this file will be replaced by Nextflow with new background PID
        with open(os.path.join(execdir, ".nextflow.pid"), "w") as f:
            f.write(str(process.pid))

        if sync:
            process.wait()
            return process, job_id

        return job_id

    def queue_run_task(self, task: Any):
        """Execute a single task from the queue synchronously - executed in the worker loop"""
        if not isinstance(task, tuple) or len(task) != 2:
            raise ValueError(f"Task must be a tuple of two arguments, got: {task}")
        command, job_id = task
        # Run synchronously, print to stdout and stderr, ignore exit codes
        return self._run_subprocess(command, job_id, sync=True)

    def run(
        self,
        pipeline_name: str,
        output_dir: str = None,
        params: dict = None,
        submission_args: dict = None,
        link=False,
    ) -> str:
        """Run workflow, wait for it to finish and return (process, job_id) tuple.

        Raise RuntimeError if the workflow fails (return code != 0).

        Shorthand for submit(submission_args=dict(sync=True))

        :param pipeline_name: Workflow name and revision (ovo.rfdiffusion-end-to-end or github url with @version)
        :param output_dir: output directory to save results to (optional, will be symlinked from workdir/execdir/job_id/output)
        :param params: Dictionary of parameters to pass to the workflow.
        :param submission_args: Submission arguments for the scheduler, overrides values in self.submission_args
        :param link: If True, symlink the output directory to output_dir instead of copying (only if output_dir is set)
        :return job_id: Scheduler job ID
        """
        if output_dir is not None:
            assert isinstance(output_dir, str) or isinstance(output_dir, Path), (
                f"output_dir should be a string or Path, got {type(output_dir).__name__}"
            )
            if os.path.exists(output_dir):
                raise FileExistsError(
                    f"Output directory already exists, please remove it or choose another directory: {output_dir}"
                )
        process, job_id = self.submit(
            pipeline_name, params=params, submission_args={**(submission_args or {}), "sync": True}
        )
        if process.returncode != 0:
            raise RuntimeError(
                f"{pipeline_name} failed with return code {process.returncode}. "
                f"See {self._get_exec_dir(job_id)}/.nextflow.log"
            )
        if output_dir is not None:
            os.makedirs(os.path.dirname(output_dir.rstrip("/")), exist_ok=True)
            if link:
                os.symlink(self.get_output_dir(job_id), output_dir)
            else:
                shutil.copytree(self.get_output_dir(job_id), output_dir)
        return job_id

    def _create_run_command(
        self, pipeline_name: str, params: dict = None, sync: bool = False, submission_args: dict = None
    ) -> list[str]:
        """
        Prepare a Nextflow run command for job submission.

        :param pipeline_name: Workflow name and revision (ovo.rfdiffusion-end-to-end or github url with @version)
        :param params: Dictionary of parameters to pass to the workflow.
        :param sync: If true, run the workflow synchronously.
        :param submission_args: Submission arguments for the scheduler, overrides values in self.submission_args
        :return: Command as a list of strings
        """
        assert isinstance(params, dict), f"params should be a dictionary, got: {type(params).__name__}"

        submission_args = submission_args.copy()
        max_memory = submission_args.pop("max_memory", None)
        resolve_relative_paths = submission_args.pop("resolve_relative_paths", True)

        pipeline_dir = self._get_pipeline_dir(pipeline_name)

        command = ["nextflow", "run"]
        command += ["-with-trace", "trace.txt"]
        command += ["-with-report", "report.html"]
        command += ["-work-dir", os.path.join(self.workdir, "work")]
        command += [pipeline_dir]
        command += ["--publish_dir", "output"]
        command += ["--reference_files_dir", self.reference_files_dir]
        command += ["--shared_modules", self._get_shared_modules_string()]
        command += ["-config", self._get_default_config_path()]

        if os.path.exists(os.path.join(pipeline_dir, "nextflow.config")):
            # Explicitly add pipeline's nextflow.config to override our default config
            command += ["-config", os.path.join(pipeline_dir, "nextflow.config")]

        for arg, value in submission_args.items():
            if isinstance(value, bool):
                value = str(value).lower()
            command += [f"-{arg}", str(value)]

        if max_memory:
            command += ["--max_memory", max_memory]

        if not sync:
            command.extend(["-ansi-log", "false"])
            command.extend(["-bg"])

        # Add workflow parameters
        if params:
            # Validate parameters against workflow schema if available
            schema = self.get_param_schema(pipeline_name)
            if schema:
                validate_params(params, schema)

            for key, value in params.items():
                if isinstance(value, str) and not value.strip():
                    # empty strings are interpreted as "true" by nextflow, better to skip that arg altogether
                    continue
                if value is None:
                    continue
                if isinstance(value, bool):
                    value = str(value).lower()
                if isinstance(value, str) and os.path.exists(value) and not os.path.isabs(value):
                    if resolve_relative_paths:
                        # Convert relative path to absolute path
                        abspath = os.path.abspath(value)
                        if value.endswith("/") and not abspath.endswith("/"):
                            # Make sure trailing slash is preserved
                            abspath += "/"
                        print(f"\nResolved relative path for parameter --{key}: {value} -> {abspath}\n")
                        value = abspath
                    else:
                        # We don't want to fail here but we can at least show a warning
                        print(f"Passing relative paths is not supported:\n{value}")
                command.append(f"--{key}")
                if isinstance(value, Path):
                    command.append(str(value.resolve()))
                else:
                    command.append(str(value))

        return command

    def _get_module_path(self, module_name) -> str:
        """Get absolute path to modulename directory"""
        module = importlib.import_module(module_name)
        module_path = os.path.abspath(os.path.dirname(module.__file__))
        return module_path

    def _get_default_config_path(self):
        """Get path to nextflow_default.config file"""
        module_path = self._get_module_path("ovo")
        return os.path.join(module_path, "pipelines/nextflow_default.config")

    def _get_pipeline_dir(self, pipeline_name: str) -> str:
        """Get path to workflow directory (with main.nf, nextflow.config, etc)"""
        if re.fullmatch(r"https?://.*", pipeline_name):
            if "@" not in pipeline_name:
                raise ValueError(f"Workflow URL must contain @revision suffix, got: {pipeline_name}")
            url, revision = pipeline_name.split("@", 1)
            info_data = None
            current_revision = None
            try:
                # Try getting workflow info to speed up the case when it already exists
                info_data = run_nextflow(["info", url, "-o", "json"])
                info = json.loads(info_data)
                current_revision = info["revisions"]["current"]
            except OVOCliError:
                pass
            if not info_data or not current_revision or revision != current_revision:
                # Pull workflow only if not already available or not checked out to the right revision
                run_nextflow(["pull", url, "-r", revision])
                info_data = run_nextflow(["info", url, "-o", "json"])
            info = json.loads(info_data)
            pipeline_dir = info["localPath"]
        elif "/" in pipeline_name or pipeline_name == ".":
            if not os.path.exists(pipeline_name):
                raise FileNotFoundError(f"Workflow path not found: {pipeline_name}")
            pipeline_dir = os.path.abspath(pipeline_name)
        elif pipeline_name.endswith(".nf"):
            if not os.path.exists(pipeline_name):
                raise FileNotFoundError(f"Workflow path not found: {pipeline_name}")
            pipeline_dir = os.path.abspath(os.path.dirname(pipeline_name))
        else:
            if "." in pipeline_name:  # custom workflow path (python_module_name.my_workflow)
                module_name, pipeline_subpath = pipeline_name.split(".")
            else:
                module_name = "ovo"
                pipeline_subpath = pipeline_name
            module_path = self._get_module_path(module_name)
            pipeline_dir = os.path.join(module_path, "pipelines", pipeline_subpath)
            if not os.path.isdir(pipeline_dir):
                raise FileNotFoundError(
                    f"Pipeline {pipeline_name} not available (directory not found: {pipeline_dir}). "
                    "Available pipelines: " + ", ".join(self.get_pipeline_names())
                )
            main_workflow_file_path = os.path.join(pipeline_dir, "main.nf")
            if not os.path.exists(main_workflow_file_path):
                raise FileNotFoundError(
                    f"Workflow {pipeline_name} not available (workflow main.nf file not found: {main_workflow_file_path}). "
                )
        return pipeline_dir

    def get_trace_table(self, job_id: str) -> pd.DataFrame | None:
        execdir = self._get_exec_dir(job_id)
        trace_file = os.path.join(execdir, "trace.txt")
        if not os.path.exists(trace_file):
            return None
        return pd.read_csv(trace_file, sep="\t", index_col=0)

    def get_status_label(self, job_id: str) -> str:
        """Get human-readable job status label. Should NOT be used to determine job status."""
        result = self.get_result(job_id)
        if result is None:
            try:
                self._get_pid(job_id)
            except JobNotFound:
                return "Queued"
            return "Running"
        return "Done" if result else "Failed"

    def get_result(self, job_id: str) -> bool | None:
        """Get job result: True if successful, False if failed, None if still running."""
        execdir = self._get_exec_dir(job_id)
        if not os.path.exists(execdir):
            raise JobNotFound(f"Job {job_id} execution directory not found: {execdir}")
        history_file = os.path.join(execdir, ".nextflow", "history")
        if os.path.exists(history_file):
            with open(history_file, "r") as f:
                lines = f.readlines()
                if not lines:
                    return None
                if len(lines) > 1:
                    print(f"Found {len(lines)} retries for job {job_id} in: {history_file}")
                    print("Using last history entry.")
                if lines:
                    fields = lines[-1].strip().split("\t")
                    status = fields[3]
                    assert status in ["-", "OK", "ERR"], f"Unexpected job status '{status}' in: {history_file}"
                    if status == "OK":
                        return True
                    elif status == "ERR":
                        return False
        try:
            pid = self._get_pid(job_id)
        except JobNotFound:
            if self.has_queue():
                # When using queue workers, we cannot reliably determine if the job is still running,
                # we need to rely on the worker to update the history file or the pid file
                return None
            raise
        if not psutil.pid_exists(pid):
            print(f"Job {job_id} process PID {pid} doesn't exist anymore, assuming job failed")
            return False
        # if process with given PID still exists, assume still running
        return None

    def get_log(self, job_id: str) -> str | None:
        """Get job execution log"""
        execdir = self._get_exec_dir(job_id)
        log_file = os.path.join(execdir, ".nextflow.log")
        if not os.path.exists(log_file):
            return None
        with open(log_file, "r") as f:
            return f.read()

    def cancel(self, job_id):
        """Cancel job execution"""
        pid = self._get_pid(job_id)
        signum = signal.SIGTERM
        os.kill(pid, signum)
        print("Killing", pid, "with signal", signum)

    def get_output_dir(self, job_id: str):
        """Get job output path"""
        execdir = self._get_exec_dir(job_id)
        return os.path.join(execdir, "output")

    def _get_exec_dir(self, job_id: str):
        if not isinstance(job_id, str):
            raise ValueError(
                f"Job ID of {type(self).__name__} should be a string, got {job_id} ({type(job_id).__name__}). Make sure to use job_id instead of the DB id."
            )
        execdir = os.path.join(self.workdir, "execdir", job_id)
        return execdir

    def _get_pid(self, job_id) -> int:
        execdir = self._get_exec_dir(job_id)
        if not os.path.exists(execdir):
            raise JobNotFound(f"Job {job_id} execution directory not found: {execdir}")
        pid_file = os.path.join(execdir, ".nextflow.pid")
        if not os.path.exists(pid_file):
            raise JobNotFound(f"Job {job_id} PID file not found: {pid_file}")
        with open(pid_file, "r") as f:
            pid = int(f.read())
        return pid

    def get_job_start_time(self, job_id: str) -> datetime | None:
        """Get job start time"""
        log = self.get_log(job_id)
        if not log:
            return None

        for line in log.splitlines():
            # Regex to match timestamps
            match_start = re.search(
                r"(\w{3}-\d{1,2} \d{2}:\d{2}:\d{2}\.\d{3}) \[main\] DEBUG nextflow.Session - Session start", line
            )
            if match_start:
                start_time = match_start.group(1)
                local_date = datetime.strptime(f"{datetime.now().year} {start_time}", "%Y %b-%d %H:%M:%S.%f")
                return datetime.utcnow() - datetime.now() + local_date
        return None

    def get_job_stop_time(self, job_id: str) -> datetime | None:
        """Get job end time"""
        log = self.get_log(job_id)
        if not log:
            return None

        for line in log.splitlines():
            # Regex to match timestamps
            match_stop = re.search(
                r"(\w{3}-\d{1,2} \d{2}:\d{2}:\d{2}\.\d{3}) \[main\] DEBUG nextflow.Session - Session completed", line
            )
            if match_stop:
                stop_time = match_stop.group(1)
                local_date = datetime.strptime(f"{datetime.now().year} {stop_time}", "%Y %b-%d %H:%M:%S.%f")
                return datetime.utcnow() - datetime.now() + local_date
        return None

    def _get_shared_module_paths(self):
        from ovo.core.plugins import plugin_modules

        module_names = ["ovo"] + sorted(set([m.split(".")[0] for m in plugin_modules]))
        return [(module_name, self._get_module_path(module_name)) for module_name in module_names]

    def _get_shared_modules_string(self) -> str:
        return ",".join(f"{module_name}:{module_path}" for module_name, module_path in self._get_shared_module_paths())

    def get_pipeline_names(self) -> list[str]:
        pipeline_names = []
        for module_name, module_path in self._get_shared_module_paths():
            pipelines_dir = os.path.join(module_path, "pipelines")
            if not os.path.isdir(pipelines_dir):
                continue
            for dirname in sorted(os.listdir(pipelines_dir)):
                if os.path.exists(os.path.join(pipelines_dir, dirname, "main.nf")):
                    pipeline_names.append(dirname if module_name == "ovo" else f"{module_name}.{dirname}")
        return pipeline_names

    def get_param_schema(self, pipeline_name: str) -> dict | None:
        """Get workflow schema JSON dict (JSON Schema standard) or None if not available."""
        pipeline_dir = self._get_pipeline_dir(pipeline_name)
        schema_path = os.path.join(pipeline_dir, "nextflow_schema.json")
        if not os.path.exists(schema_path):
            return None
        with open(schema_path, "r") as f:
            schema = json.load(f)
        # NOTE: always consider additionalProperties to be false
        schema["additionalProperties"] = False
        if "properties" not in schema:
            assert "allOf" in schema, f"Invalid schema, missing properties and allOf in {schema_path}"
            schema = flatten_schema(schema)
        return schema

    def get_failed_message(self, job_id):
        return (
            f"Job {job_id} has failed. To retry, please navigate to execution directory: {self._get_exec_dir(job_id)}, "
            f"get the Nextflow run command using 'nextflow log' and re-run the workflow "
            f"run command with -resume flag: 'nextflow run ... -resume'"
        )
