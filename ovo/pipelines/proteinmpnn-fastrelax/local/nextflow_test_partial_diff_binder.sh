#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

MODULE_DIR=$(realpath "../")
INPUT_DIR=$(pwd)/test-input/partial_diff
OUTPUT_DIR=$(pwd)/test-results

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf "batch1"

nextflow run ../../main.nf \
  -process.containerOptions="-v $MODULE_DIR:$MODULE_DIR" \
  --max_memory 8GB \
  --pdb_dir $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --relax_cycles 1 \
  --run_parameters " -debug " \
  "$@"

pwd
ls -l batch1/proteinmpnn_fastrelax/
