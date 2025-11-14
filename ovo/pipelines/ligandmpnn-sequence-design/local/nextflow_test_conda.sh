#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

MODULE_DIR=$(realpath "../")
INPUT_DIR=$(pwd)/test-input
OUTPUT_DIR=$(pwd)/test-results

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf "batch1"

run_parameters="--omit_AA \"CX\" --temperature 0.0001"

nextflow run ../../main.nf \
  --pdb_path $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --num_seq_per_target 2 \
  --run_parameters "$run_parameters" \
  "$@"

ls -lR ${OUTPUT_DIR}/batch1/
