import os
import time
import traceback
from abc import ABC
from multiprocessing.managers import BaseManager
from queue import Queue
from typing import Any


class SimpleQueueMixin(ABC):
    """Class that adds a simple queue-based worker scheduler to a submission system."""

    def has_queue(self):
        return "queue" in self.submission_args

    def _queue_get_address(self):
        host_port = self.submission_args.get("queue", None)
        if not host_port:
            raise ValueError(
                f"No host:port specified for this scheduler, 'queue' field missing in submission_args of scheduler {self.name}"
            )
        if ":" not in host_port:
            raise ValueError(f"Invalid host:port {host_port} specified for scheduler {self.name}")
        host, port_str = host_port.split(":", 1)
        try:
            port = int(port_str)
        except ValueError:
            raise ValueError(f"Invalid port {port_str} specified for scheduler {self.name}")
        return host, port

    def queue_put(self, task: Any):
        queue = self.connect_to_queue()
        queue.put(task)

    def connect_to_queue(self, host: str = None, port: int = None):
        BaseManager.register("get_queue")
        default_host, default_port = self._queue_get_address()
        host = host or default_host
        port = port or default_port
        manager = BaseManager(address=(host, port), authkey=self._queue_get_auth_key())
        try:
            manager.connect()
            return manager.get_queue()
        except ConnectionRefusedError:
            raise ConnectionError(
                f"Could not connect to queue server at {':'.join(map(str, self._queue_get_address()))}. Is the ovo scheduler worker running?"
            )

    def create_queue_server(self, host: str = None, port: int = None):
        """Returns queue and function that runs infinitely in the server process, serving the queue to workers."""
        queue = Queue()
        BaseManager.register("get_queue", callable=lambda: queue)
        default_host, default_port = self._queue_get_address()
        host = host or default_host
        port = port or default_port
        manager = BaseManager(address=(host, port), authkey=self._queue_get_auth_key())
        server = manager.get_server()
        print(f"Queue server starting on {host}:{port}")
        return queue, server.serve_forever

    def queue_worker(self, queue, queue_id):
        """Function that runs infinitely in the worker process, processing jobs from the queue."""
        print(f"Worker {queue_id} connected to queue")
        while True:
            task = queue.get()
            if task is None:
                # Shutdown signal
                print(f"Worker {queue_id} shutting down")
                return
            print(f"Worker {queue_id} executing task: {task}")
            try:
                start_time = time.time()
                self.queue_run_task(task)
                seconds = time.time() - start_time
                print(f"Worker {queue_id} finished command in {int(seconds) // 60} minutes {seconds % 60:.0f} seconds")
            except Exception as e:
                traceback.print_exc()
                print(f"Worker {queue_id} encountered error: {e}")

    def queue_run_task(self, task: Any):
        """Execute a single task from the queue synchronously - executed in the worker loop"""
        raise NotImplementedError()

    def _queue_get_auth_key(self):
        return os.environ.get("OVO_WORKER_AUTHKEY", "no_key").encode("utf-8")
