nextflow.enable.dsl = 2

process proteinQCDSSP {
  def containerName = "dssp"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"

  label 'dssp'
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

  python3 ${moduleDir}/bin/dssp.py \
    ${pdb_dir} \
	"${batch_dir}"/dssp.csv \
	--chains "${chains}"
  """
}

workflow {
  proteinQCDSSP([params.output_dir, params.pdb_dir], params.chains)
}
