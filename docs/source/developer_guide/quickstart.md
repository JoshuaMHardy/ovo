# Developer Quickstart

## 1. Clone the OVO repository

Clone the OVO repository from GitHub:

```
# Clone the repository
git clone https://github.com/MSDLLCpapers/ovo
# Navigate into the cloned directory
cd ovo
```

## 2. Install OVO for development

### Using uv

First, if not already installed, install the `uv` package manager 
and `rust-just` command runner into your default Python environment:

```bash
pip install uv rust-just
```

Initialize the `.venv` directory with `uv`:

```bash
uv sync
```

### Using conda

```bash
# Create and activate conda environment
conda create -n ovo-dev python=3.13
conda activate ovo-dev

# Install OVO with pip in editable mode
pip install -e .

# Save instructions to .env file to avoid using uv
echo 'RUN=" "' >> .env
```

## 3. Development commands

Run Streamlit app with live reload:
```
just run
```

Run unit tests:
```
just test
```

Run Ruff linter (optional):
```
just lint
```

Run Ruff formatter:
```
just format
```

## 4. Contribute your first issue and pull request

Before you start working on a feature or bug fix, please [create an issue](https://github.com/MSDLLCpapers/ovo/issues)
describing your proposed changes. This helps us track work and coordinate contributions.

To contribute a separate plugin, please refer to the [plugin development guide](plugin_development.md).
