nextflow.enable.dsl = 2

process ESMFold {
  def containerName = "huggingface-transformers"
  conda { params.getSharedEnv("ovo.${containerName}", workflow.profile) }
  container "${ workflow.containerEngine in ['singularity', 'apptainer']
    ? params.ovo_container_dir + '/ovo-' + containerName
    : params.docker_repository + 'ovo-' + containerName }"
  label "esmfold"
  cpus 4
  memory "16 GB"
  accelerator 1, type: "nvidia-tesla-t4"
  publishDir { params.publish_dir }
  input:
    tuple val(meta), path (input_path), val (num_recycles)
    path esmfold_model_path
    val fp16
  output:
    tuple val (meta), path ("${meta.batch_name}/${meta.test}"), emit: pdb_dir
    path "${meta.batch_name}/${meta.test}.jsonl", emit: metrics_jsonl
  script:
  """
  set -euxo pipefail

  mkdir ${meta.batch_name}

  python3 ${moduleDir}/bin/esm_fold.py \
    --input_path=${input_path} \
    --output_dir=${meta.batch_name} \
    --name="${meta.test}" \
    --num_recycles=${num_recycles} \
    --esmfold_model_path=${esmfold_model_path} \
    ${fp16 ? '--fp16' : ''}
  """
}

workflow {
  ESMFold(
    [[batch_name: params.output_dir, test: "esmfold"], params.input_path, params.num_recycles],
    params.esmfold_model_path,
    params.fp16
  )
}
