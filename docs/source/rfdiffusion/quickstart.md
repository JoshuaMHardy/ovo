# RFdiffusion Quickstart

## 1. Prerequisites

Before you proceed, make sure to install OVO and set up the OVO home directory
by following [OVO Installation](../user_guide/installation.md).

You will need at least 15-30 GB of free disk space:

- RFdiffusion model weights: 2 GB
- AlphaFold2 model weights: 5 GB (can be reduced by keeping only model 1 weights)
- Execution environments 
  - Conda environments: ~8 GB
  - or containers when using Singularity/Apptainer/Docker: ~21 GB

## 2. Set up RFdiffusion

Next, set up RFdiffusion end-to-end pipeline by running:

```bash
ovo init rfdiffusion
```

When working with multiple schedulers as described in [Schedulers](../user_guide/schedulers.md),
make sure to specify the target scheduler using `--scheduler <key>` option, 
or set the `default_scheduler` in the OVO config file.

The init step will download all reference files: model weights for RFdiffusion, AlphaFold2, 
and run multiple example jobs to verify the installation. 

When using conda scheduler profile, Nextflow will automatically create all required environments behind the scenes.
When using Singularity or Apptainer, the required containers will be downloaded during this step.
When using Docker, containers need to be built manually as described in [Containers](../user_guide/containers.md).

You can verify the installation further by running an additional test job using OVO CLI:

```bash
# Download example input PDB
wget -O 5ELI.pdb https://files.rcsb.org/download/5ELI.pdb

# Run workflow and save to ./example directory
ovo scheduler run rfdiffusion-end-to-end \
  ./example \
  --design_type scaffold \
  --rfdiffusion_input_pdb 5ELI.pdb \
  --rfdiffusion_num_designs 1 \
  --rfdiffusion_contig A111-114/10/A117-119 \
  --refolding_tests af2_model_1_ptm_ft_3rec

# Show documentation of all parameters
ovo scheduler run rfdiffusion-end-to-end --help
```

Now you can use the workflow in the OVO web app. Start the app using:

```sh
ovo app
```

You can access the interface at [http://localhost:8501](http://localhost:8501).

Next: [RFdiffusion Scaffold Design](scaffold_design.md) or [RFdiffusion Binder Design](binder_design.md)
