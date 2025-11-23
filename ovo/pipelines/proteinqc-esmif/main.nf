nextflow.enable.dsl = 2

process proteinQCESMIF {
  def containerName = "esm"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"
  label 'esmif'
  cpus 4
  // 2 GB, 4 GB, 8 GB, 16 GB
  memory { Math.pow(2, task.attempt) * 1.GB }
  errorStrategy { task.exitStatus in 137..140 ? "retry" : "terminate" }
  maxRetries 3
  accelerator 1, type: "nvidia-tesla-t4"
  publishDir { params.publish_dir }
  input:
    tuple val(batch_dir), path(pdb_dir)
    val chains
    path esm_models_path
  output:
    path "${batch_dir}/*", emit: output_csv
  script:
  """
  set -euxo pipefail

  mkdir "${batch_dir}"

  python3 ${moduleDir}/bin/esmif.py \
    ${pdb_dir} \
	"${batch_dir}"/esm_if.csv \
	--chains "${chains}" \
  --esm_models_dir ${esm_models_path}
  """
}

workflow {
  proteinQCESMIF([params.output_dir, params.pdb_dir], params.chains, params.esm_models_path)
}
