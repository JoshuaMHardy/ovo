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

nextflow run ../../main.nf \
  --pdb_dir $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --output_dir batch1 \
  --chains A

cat batch1/seq_composition.csv
