nextflow.enable.dsl = 2

process Boltz {
    def containerName = "boltz"
    conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
    container "${ workflow.containerEngine in ['singularity', 'apptainer']
        ? params.ovo_container_dir + '/ovo-' + containerName
        : params.docker_repository + 'ovo-' + containerName }"

    label 'boltz'
    cpus 4
    memory "16 GB"
    accelerator 1, type: "nvidia-tesla-a10g"
    publishDir { params.publish_dir }
    input:
        tuple val(batch_name), path(input_yaml), path(input_dir)
        path boltz_models_path
        val boltz_version
        val run_parameters
    output:
        tuple val(batch_name), path("${batch_name}/boltz/"), emit: output_dir
    script:
    def mols_tar_file = "${boltz_models_path}/mols.tar"
    def mols_dir = "${boltz_models_path}/mols"
    """
    set -euxo pipefail

    ACCELERATOR=${workflow.profile.tokenize(",").contains("cpu_env") ? 'cpu' : 'gpu'}

    # Check that reference folder has been initialized
    if [[ ! -f "${mols_tar_file}" && ! -d "${mols_dir}" ]]; then
        echo "Boltz reference files have not been initialized in ${boltz_models_path}" >&2
        exit 2
    fi
    # Extract mols.tar if mols directory does not exist
    if [[ ! -d "${mols_dir}" ]]; then
        # Use random output path suffix to avoid conflicts in parallel processes
        TMP_DEST="${boltz_models_path}/\$RANDOM"
        mkdir "\$TMP_DEST"
        tar -xf "${mols_tar_file}" -C "\$TMP_DEST"
        if [[ ! -d "${mols_dir}" ]]; then
            # atomically rename the directory
            mv "\$TMP_DEST/mols" "${mols_dir}"
        else
            echo "Mols dir already exists, assuming it was created by another process"
        fi
    fi

    ls -lR
    export NUMBA_CACHE_DIR=/tmp

    boltz predict "${input_yaml}" \
        --cache ${boltz_models_path} \
        --accelerator \$ACCELERATOR \
        --model ${boltz_version} \

    mkdir -p "${batch_name}/boltz/"
    mv boltz_results_*/predictions/* "${batch_name}/boltz/"
    """

    stub:
    """
    # Get list of yaml filenames
    if [[ -f "$input_yaml" && "$input_yaml" == *.yaml ]]; then
        files="$input_yaml"
    elif [[ -d "$input_yaml" ]]; then
        # Input is a directory – process all .yaml files directly inside
        files=\$(echo $input_yaml/*.yaml)
        if [[ -z "\$files" ]]; then
            echo "No paths found"
            exit 2
        fi
    else
        echo "Error: Input must be a .yaml file or directory"
    fi

    # create mock results for each yaml file
    mkdir -p "${batch_name}/boltz/"
    for file in \$files; do
        name=\$(basename "\${file%.yaml}")
        mkdir "${batch_name}/boltz/\${name}/"
        echo '{"affinity_pred_value": 1.421875}' > "${batch_name}/boltz/\${name}/affinity_\${name}.json"
        echo '{"confidence_score": 0.7697305679321289}' > "${batch_name}/boltz/\${name}/confidence_\${name}_model_0.json"
        touch "${batch_name}/boltz/\${name}/\${name}_model_0.cif"
    done
    """
}

workflow {
    [
        'input_yaml',
    ].each { param ->
        params[param] = null
        if (!params[param]) {
            throw new IllegalArgumentException("Argument --${param} is required!")
        }
    }
    Boltz(
        [params.output_dir, params.input_yaml, params.input_dir],
        params.boltz_models_path,
        params.boltz_version,
        params.run_parameters
    )
}
