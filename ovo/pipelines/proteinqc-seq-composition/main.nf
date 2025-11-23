nextflow.enable.dsl = 2

process proteinQCSeqComposition {
  def containerName = "python-structure"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"
  label 'seq_composition'
  publishDir { params.publish_dir }
  input:
    tuple val(batch_dir), path(pdb_dir)
    val chains
  output:
    path "${batch_dir}/*", emit: output_csv
  script:
  """
  set -euxo pipefail

  mkdir "${batch_dir}"

  python3 ${moduleDir}/bin/seq_composition.py \
    ${pdb_dir} \
	"${batch_dir}"/seq_composition.csv \
	--chains "${chains}"
  """
}

workflow {
  proteinQCSeqComposition([params.output_dir, params.pdb_dir], params.chains)
}
