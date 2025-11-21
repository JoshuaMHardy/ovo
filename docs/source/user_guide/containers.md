# OVO Containers

OVO supports multiple execution environments through the use of containers. 
Containers provide a consistent and reproducible environment for running workflows, 
ensuring that all dependencies and software versions are correctly managed.

## Configuring OVO to use containers

By default, OVO uses Conda to manage execution environments. You can customize the scheduler profile 
to run using Singularity, Apptainer, Docker, or other container platform by modifying the OVO configuration file,
typically located at `~/ovo/config.yml`:

```yaml
schedulers:
  local:
    name: Local with Conda   # <-- Choose a descriptive name
    type: NextflowScheduler
    submission_args:
      profile: conda,cpu_env # <--- Change 'conda' to 'singularity', 'apptainer', or 'docker' as needed
```

## Container types

OVO containers are defined in the [ovo-containers GitHub repository](https://github.com/MSDLLCpapers/ovo-containers).

Conda environments are defined directly in the [envs](https://github.com/MSDLLCpapers/ovo/tree/develop/ovo/envs) directory of the OVO repository 
or plugin repositories like [OVO promb](https://github.com/MSDLLCpapers/ovo-promb/tree/main/ovo_promb/envs) and are automatically created by Nextflow during workflow execution.

For Singularity and Apptainer, OVO will automatically download the required containers 
during workflow execution from [http://ovo.dichlab.org/public/singularity](http://ovo.dichlab.org/public/singularity).
If you wish to build the container yourself, you will need to first build the Docker images using instructions below,
save them into a Docker archive (`docker save -o image.tar image`),
and then convert them to Singularity/Apptainer format (`singularity build image.sif docker-archive://image.tar`).

For Docker, please build all required images using the provided docker-compose file in the ovo-containers repository:

```bash
# Clone the ovo-containers repository
# git clone TODO_LINK
# Navigate to cloned repo
cd ovo-containers
# Build all Docker images
docker compose build
```
