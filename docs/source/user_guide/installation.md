# OVO Installation

### 1. Prerequisites

Make sure you have the following software installed:

- **Python** (Python 3.13 recommended, at least 3.10)
- **Java** (OpenJDK 21-24 recommended, at least 17)
- Environment manager of your choice: **Conda**, **Singularity**, **Apptainer**, **Docker** or others supported by [Nextflow](https://nextflow.io/docs/latest/container.html)

Running OVO workflows through Nextflow requires a **Unix-like operating system**: Linux, macOS, or Windows Subsystem for Linux.

<details>
    <summary>Check Python version</summary>

To see which version of Python you have, run the following command:

```bash
python --version
```
or
```bash
python3 --version
```

If your version is <strong>less than 3.9</strong>, please install Python 3.9 or higher.  
See the <a href="https://www.python.org/downloads/" target="_blank">official Python download page</a> for installation instructions.
</details>

<details>
    <summary>Check Java version</summary>

To see which version of Java you have, run the following command:

```bash
java -version
```

If your version is <strong>less than 17</strong>, please install latest Java:

- **Cross-platform**
  - with Conda/Mamba: `conda install -c conda-forge openjdk==21`
- **macOS**
  - with Homebrew: `brew install openjdk@21`
- **Ubuntu/Debian**
  - with apt: `sudo apt update; sudo apt install openjdk-21-jdk openjdk-21-jre`
- **Windows (WSL / Unix Subsystem)**
  - with apt: `sudo apt update; sudo apt install openjdk-21-jdk openjdk-21-jre`
- **Fedora/RHEL/CentOS**
  - with dnf: `sudo dnf update; sudo dnf install java-21-openjdk`
- **HPC modules**
  - see available versions: `module avail java` and use `module add java`

Verify: `java -version`

</details>

### 2. Installation

First, install OVO using:

```sh
pip install ovo
```

<details>
    <summary>Install with Conda</summary>

```sh
# Create a new conda environment
conda create -n ovo python=3.13
conda activate ovo
# Install OVO with pip
pip install ovo
```
</details>

When OVO is successfully installed, please proceed with configuration steps below.

### 3. Initialize "OVO home" directory

Set up OVO by initializing the home directory:

```sh
ovo init home
```

This will guide you through creating the ovo "home directory" where all data and configuration will be stored.

OVO supports multiple independent home directories on a single system. When OVO starts, 
it looks for the active home directory in `OVO_HOME` environment variable. 
If the variable is not set, it defaults to `~/ovo`.

The ovo home directory contains the following important files and folders:

- *`config.yml`* OVO configuration file
- *`ovo.db`* SQLite database (stored as a single file)
- *`workdir`* Working directory for Nextflow workflows
- *`storage`* PDB design files and other permanent results
- *`reference_files`* Downloaded model weights and other reference files

### 4. Initialize containers (optional)

OVO uses [Nextflow](https://www.nextflow.io/) to define and execute pipelines where each type of task runs in
a dedicated environment that isolates the software dependencies. 

By default, OVO uses Conda to manage execution environments. You can customize the scheduler profile 
to run using Singularity, Apptainer, Docker, or other container platform. 
See [Containers](../user_guide/containers.md) for details.

### 5. Initialize the scheduler

OVO enables configuring multiple schedulers. In the web app, the "local scheduler" is used to run jobs 
on the same machine, for example generating RFdiffusion design preview.

Initialize the local scheduler using:

```bash
ovo init preview
```

This will download the RFdiffusion model weights and run an example job to verify the installation.

When using Conda scheduler profile, Nextflow will automatically initialize the RFdiffusion environment behind the scenes.
When using Singularity or Apptainer, the required containers will be downloaded during this step.
When using Docker, containers need to be built manually as described in [Containers](../user_guide/containers.md).

#### Initializing additional schedulers (optional)

Most de novo design workflows in OVO require more computational resources than what is available on a local machine.
You can set up additional schedulers to run workflows on High Performance Computing (HPC) clusters or cloud platforms.
Please refer to [Schedulers](../user_guide/schedulers.md) for instructions.

### 6. Run the OVO web app

Start the OVO app:

```sh
ovo app
```

You should now be able to visit [http://localhost:8501](http://localhost:8501) to access the OVO web interface.

At this point, OVO will not enable submitting any workflows. To do that, we need to download 
reference files such as model weights, and initialize the execution environments. 
Please continue with [RFdiffusion Quickstart](../rfdiffusion/quickstart.md)
to set up the RFdiffusion end-to-end de novo design workflow.

