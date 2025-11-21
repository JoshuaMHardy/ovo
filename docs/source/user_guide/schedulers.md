# OVO Schedulers

OVO uses [Nextflow](https://www.nextflow.io/) to define and execute pipelines where each type of task runs in
a dedicated environment that isolates the software dependencies. 

By default, Nextflow executes all tasks on the local machine, but it also supports a variety of execution platforms.

## How the OVO Nextflow Scheduler works

Pipeline execution starts with submitting a workflow with user-specified parameters, 
either through the OVO CLI or web UI. In case of Nextflow scheduler, a `nextflow run` subprocess 
is executed in the background, automatically orchestrating grid job submission and monitoring, 
enabling parallel execution of tasks and automatic retries. The process is executed from its
"execution directory" which is created under the OVO workdir (by default, `~/ovo/workdir/execdir/JOB_ID`).
This directory contains the main Nextflow log file (`.nextflow.log`), and the process ID (`.nextflow.pid`) 
that is used to track and manage the running workflow. Upon workflow completion, it will also store
an `output/` directory with all final output files (linked from individual task working directories).

The nextflow process runs in the background for the whole duration of the workflow execution,
submitting and managing status of individual tasks (e.g. a RFdiffusion task that generates a batch of 100 backbones).
Each task will be executed in its own dedicated environment (e.g. Conda, Singularity, Docker, etc.) 
and run from its own working directory created under the OVO workdir (by default, `~/ovo/workdir/work/PREFIX/TASK_ID`).
The task working directory contains the task script (`.command.sh`), the run wrapper script (`.command.run`),
task-specific logs (`.command.log`), all input files (as symlinks) and output files.
When executing using a grid engine (e.g., SLURM, PBS Pro), each task will correspond to one grid job 
and will have its own job ID. OVO itself does not directly track the status of the individual jobs.

When the workflow is submitted via web UI, job status is periodically checked and updated in the 
OVO Database under a `DesignJob` or `DescriptorJob` object. 
Upon workflow completion, the results need to be "processed"
by OVO logic specific to the given pipeline – copying relevant files from the workflow output directory
(by default `~/ovo/workdir/execdir/JOB_ID/output/`, containing symlinks to individual task working directories) 
to OVO Storage (by default, `~/ovo/storage/`),
assigning unique `Design` IDs and creating Design and `DescriptorValue` entries in the database.

## Configuring OVO for SLURM scheduler

To use SLURM executor, modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
schedulers:
  slurm_singularity:
    name: SLURM Singularity GPU
    type: NextflowScheduler
    submission_args:
      profile: singularity
      config: ./nextflow_slurm_singularity.config
    workdir: /scratch/ovo/workdir

```

And create the referenced `nextflow_slurm_singularity.config` nextflow config file:

```text
// params {
//   // override default params here if needed 
//   foo = bar
// }

process {
  executor = "slurm"
  queue = "cpu-med"  // Adjust to your default partition
  beforeScript = "module load singularity"

  // add automatic retries to handle random job failures
  errorStrategy = { task.attempt <= process.maxRetries ? 'retry' : 'terminate' }
  maxRetries = 2
  
  withLabel: "colabdesign|ligandmpnn|rfdiffusion" {
    queue = "gpu-small"  // Match your actual GPU partition
    cpus = 4
    memory = '15.GB'
    clusterOptions = "--gres=gpu:1"  // Only specify GPU, let cpus/memory be handled by Nextflow
  }

  withLabel: "boltz" {
    queue = "gpu-med"
    cpus = 4
    memory = '15.GB'
    clusterOptions = "--gres=gpu:1"
  }

  withLabel: "bindcraft" {
    queue = "gpu-med"
    cpus = 8
    memory = '30.GB'
    clusterOptions = "--gres=gpu:1"
  }
}
```

Please refer to the [Nextflow documentation](https://nextflow.io/docs/latest/executor.html#slurm) for more details on SLURM configuration options.

## Configuring OVO for PBS Pro scheduler

To use PBS executor, modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
schedulers:
  pbs_singularity:
    name: PBS Singularity GPU
    type: NextflowScheduler
    submission_args:
      profile: singularity
      config: ./nextflow_pbs_singularity.config
    workdir: /scratch/ovo/workdir

```

And create the referenced `nextflow_pbs_singularity.config` nextflow config file:

```text
// params {
//   // override default params here if needed
//   foo = bar
// }

process {
  // executor type
  executor = "pbspro"
  
  // default queue
  queue = "general_cloud" // Adjust to your default queue
  
  // add automatic retries to handle random job failures
  errorStrategy = { task.attempt <= process.maxRetries ? 'retry' : 'terminate' }
  maxRetries = 2
  
  // commands to run at the start of each job
  beforeScript = "module add singularity"

  withLabel: "colabdesign|rfdiffusion" {
    queue = "gpu_moldyn" // Match your actual GPU queue
    cpus = 4
    memory = '15.GB'
  }
  
  withLabel: "boltz" {
    queue = "gpu_a10g" // Match your actual GPU queue
    cpus = 4
    memory = '15.GB'
  }

  withLabel: "bindcraft" {
    queue = "gpu_a10g" // Match your actual GPU queue
    cpus = 8
    memory = '30.GB'
  }
  
}
```

An example PBS Pro configuration directory can be found in the example repository: [hpc_pbs_config_example](https://github.com/MSDLLCpapers/ovo-examples/tree/main/hpc_pbs_config_example).

Please refer to the [Nextflow documentation](https://nextflow.io/docs/latest/executor.html#pbs-pro) for more details on PBS Pro configuration options.

## AWS HealthOmics

To use [AWS HealthOmics](https://docs.aws.amazon.com/omics/), modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
schedulers:
  healthomics:
    name: HealthOmics # <-- Choose a descriptive name
    type: HealthOmicsScheduler
    submission_args:
      workflow_name_prefix: dev_ # <-- Prefix as configured during deployment
      role_arn: arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR-EXECUTION-ROLE
    workdir: s3://workdir-bucket-name/prefix # <-- S3 location for HealthOmics job output
```

Pipelines will need to be deployed to AWS HealthOmics.
An example AWS HealthOmics repository with GitHub actions for deployment 
can be found in [aws_healthomics_example](https://github.com/MSDLLCpapers/ovo-examples/tree/main/aws_healthomics_example).

## Other Nextflow executors

See [Nextflow Executor documentation](https://nextflow.io/docs/latest/executor.html) for other available Nextflow execution options.
