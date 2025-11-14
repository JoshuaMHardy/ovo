#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

INPUT_DIR=$(pwd)/test-scaffold-input
OUTPUT_DIR=$(pwd)/test-scaffold-results

MODELS_DIR=${OVO_HOME:-~/ovo}/reference_files
WORK_DIR=${OVO_HOME:-~/ovo}/workdir/work
DEFAULT_CONFIG=$(pwd)/../../nextflow_default.config
OVO_MODULE_PATH=$(realpath "$PWD/../../../")

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf *batch*
rm -f input.txt
touch input.txt

# PDB id, file list
for file in $INPUT_DIR/*.pdb; do
  # extract id from filename
  id=$(basename "$file" .pdb)
  echo "$file" >> input.txt
done
nextflow run ../../main.nf \
  --input_pdb input.txt \
  --tools seq_composition \
  --publish_dir $OUTPUT_DIR \
  --reference_files_dir "$MODELS_DIR" \
  --chains A \

cat *batch*/*.csv
rm -r *batch*
