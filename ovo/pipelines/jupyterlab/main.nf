nextflow.enable.dsl = 2

process JupyterLab {
    conda { params.env ? params.getSharedEnv("ovo.${params.env}", workflow.profile) : null }
    container (params.env ? "${ (workflow.containerEngine == 'singularity' && !task.ext.singularity_pull_docker_container)
        ? params.ovo_container_dir + '/ovo-' + params.env
        : params.docker_repository + 'ovo-' + params.env }" : null)

    label "jupyter"
    cpus { params.cpus }
    memory { params.memory }

    input:
      path dirs
      val ip
      val port
      val run_parameters
    script:
    """
    # Make sure python is available
    which python3
    PYTHON_BIN=\$(which python3)

    # Check if jupyter-lab is available in this environment, otherwise try to install it via pip
    if [ ! -f "\${PYTHON_BIN/python3/jupyter-lab}" ]; then
        # Make sure pip is available together with python
        if [ ! -f "\${PYTHON_BIN/python3/pip}" ]; then
            echo "This environment does not have pip installed next to python"
            echo \$PYTHON_BIN
            exit 2
        fi

        echo "Jupyter Lab not available in this environment, attempting to install via pip"
        pip install jupyterlab jupyterlab-lsp python-lsp-server
    fi

    echo "JUPYTER_HOSTNAME: \$(hostname)"

    # Create symlink to root directory to enable LSP access to all files (as long as they are mounted in the container)
    ln -s / .lsp_symlink

    cat > README.md << EOF
# Hello from ${params.env || 'ovo'} environment!

This Jupyter Lab instance is running inside a Nextflow pipeline process.

Current work dir: \$(pwd)

EOF

    # Run Jupyter Lab
    jupyter-lab \
      --ip ${ip} \
      --port ${port} \
      --allow-root \
      --ContentsManager.allow_hidden=True \
      --no-browser \
      ${run_parameters} ${workflow.containerEngine ? "--port-retries 0" : ""}
    """
}

// static data files are in nextflow.config
workflow {

    [
        'dirs',
    ].each { param ->
        params[param] = null
        if (!params[param]) {
            throw new IllegalArgumentException("Argument --${param} is required!")
        }
    }

    def dirs = params.dirs
        .split(',')
        .collect { it.trim() }
        .findAll { it } // removes empty strings
        .collect { file(it) }

    JupyterLab(
        Channel.from(dirs).collect(),
        params.ip,
        params.port,
        params.run_parameters
    )
}

