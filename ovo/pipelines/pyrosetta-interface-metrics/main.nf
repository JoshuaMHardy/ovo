nextflow.enable.dsl = 2


process PyRosettaInterfaceMetrics {
  def containerName = "proteinmpnn-fastrelax"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"
  label "pyrosetta_interface_metrics"
  cpus 8
  memory "32 GB"
  publishDir { params.publish_dir }
  input:
    tuple val (batch_name), path (pdb_dir)
    val relax
  output:
    path "${batch_name}/pyrosetta_interface_metrics.jsonl", emit: metrics_csv
    path "${batch_name}/relaxed_pdb", emit: relaxed_pdb
  script:
  """
  set -euxo pipefail

  mkdir -p ${batch_name}

  mkdir "${batch_name}/relaxed_pdb"
  python3 ${moduleDir}/bin/pyrosetta_interface_metrics.py \
    ${pdb_dir} \
	${batch_name}/pyrosetta_interface_metrics.jsonl \
	${relax ? "--relax --out-pdb ${batch_name}/relaxed_pdb" : ""}
  """
}


workflow {
  PyRosettaInterfaceMetrics(
    ['batch1', params.pdb_dir],
    params.relax
  )
}
