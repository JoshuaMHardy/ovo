#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

MODULE_DIR=$(realpath "../")

MODELS_DIR=${OVO_HOME:-~/ovo}/reference_files
WORK_DIR=${OVO_HOME:-~/ovo}/workdir/work
DEFAULT_CONFIG=$(pwd)/../../nextflow_default.config
OVO_MODULE_PATH=$(realpath "$PWD/../../../")
INPUT_DIR=$(pwd)/test-input
OUTPUT_DIR=$(pwd)/test-results

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf rfdiffusion

nextflow run ../../main.nf \
  -profile ${PROFILE:-conda,cpu_env} \
  -work-dir "$WORK_DIR" \
  -config "$DEFAULT_CONFIG" \
  --shared_modules "ovo:$OVO_MODULE_PATH" \
  --num_designs 1 \
  --contig A30-40/10/A50-60 \
  --input_pdb "${INPUT_DIR}/5ELI.pdb" \
  --publish_dir $OUTPUT_DIR \
  --reference_files_dir "$MODELS_DIR" \
  --run_parameters "diffuser.T=1" \
  "$@"

ls -l rfdiffusion/*/
