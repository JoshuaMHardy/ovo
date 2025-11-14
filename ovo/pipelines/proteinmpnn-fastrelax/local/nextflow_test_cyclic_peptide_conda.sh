#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

INPUT_DIR=$(pwd)/test-input/cyclic
OUTPUT_DIR=$(pwd)/test-results

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf "batch1"

nextflow run ../../main.nf \
  --max_memory 8GB \
  --pdb_dir $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --relax_cycles 1 \
  --cyclic \
  --run_parameters " -debug " \
  $@

ls -l batch1/proteinmpnn_fastrelax/
