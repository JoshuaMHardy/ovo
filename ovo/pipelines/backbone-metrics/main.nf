nextflow.enable.dsl = 2

process BackboneMetrics {
  def containerName = "python-structure"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"
  label "backbone_metrics"
  publishDir { params.publish_dir }
  input:
    tuple val(batch_dir), path(pdb_dir)
    val hotspot
    val cyclic
    val filters
  output:
    tuple val (batch_dir), path ("${batch_dir}/backbones_filtered/"), emit: filtered_pdb_dir
    path "${batch_dir}/backbone_metrics.csv", emit: output_csv
  script:
  """
  set -euxo pipefail

  mkdir "${batch_dir}"

  python3 ${moduleDir}/bin/backbone_metrics.py \
    ${pdb_dir} \
    "${batch_dir}/backbone_metrics.csv" \
    ${hotspot ? "--hotspot ${hotspot}" : ""} \
    ${cyclic ? "--cyclic" : ""} \
    --filtered-output "${batch_dir}/backbones_filtered" \
    --filters "${filters}"
  """
}

workflow {
    def hotspot = params.hotspot ?: ''
    BackboneMetrics(
      [params.output_dir, params.pdb_dir],
      hotspot,
      params.cyclic,
      params.filters
    )
}
