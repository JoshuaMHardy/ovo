# OVO Schedulers

OVO uses [Nextflow](https://www.nextflow.io/) to define and execute pipelines where each type of task runs in
a dedicated environment that isolates the software dependencies. 

By default, Nextflow executes all tasks on the local machine, but it also supports a variety of execution platforms.

## Configuring OVO for SLURM scheduler

To use SLURM executor, modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
TODO example scheduler for SLURM
```

And create the referenced nextflow config file:

```text
TODO example nextflow config for SLURM
```

Please refer to the [Nextflow documentation](https://nextflow.io/docs/latest/executor.html#slurm) for more details on SLURM configuration options.

## Configuring OVO for PBS Pro scheduler

To use PBS executor, modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
TODO example scheduler for PBS
```

And create the referenced nextflow config file:

```text
TODO example nextflow config for PBS
```

An example PBS Pro configuration directory can be found in **TODO link**

Please refer to the [Nextflow documentation](https://nextflow.io/docs/latest/executor.html#pbs-pro) for more details on PBS Pro configuration options.

## AWS HealthOmics

To use [AWS HealthOmics](https://docs.aws.amazon.com/omics/), modify the OVO configuration file, typically located at `~/ovo/config.yml`:

```yaml
TODO example scheduler
```

Pipelines will need to be deployed to AWS HealthOmics.
An example AWS HealthOmics repository with GitHub actions for deployment can be found in **TODO link**

## Other executors

See [Nextflow Executor documentation](https://nextflow.io/docs/latest/executor.html) for other available execution options.
