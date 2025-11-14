#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

MODULE_DIR=$(realpath "../")
INPUT_DIR=$(pwd)/test-input
OUTPUT_DIR=$(pwd)/test-results

# change to work dir
rm -rf "$OUTPUT_DIR"
mkdir "$OUTPUT_DIR"
cd "$OUTPUT_DIR"

nextflow run ../../main.nf \
  -profile ${PROFILE:-docker,cpu_env} \
  -work-dir "$WORK_DIR" \
  -config "$DEFAULT_CONFIG" \
  --shared_modules "ovo:$OVO_MODULE_PATH" \
  -process.containerOptions="-v $MODULE_DIR:$MODULE_DIR" \
  --pdb_dir $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --output_dir batch1 \
  --chains A \
  --max-memory 8GB \
  --peppatch_config_path "$INPUT_DIR/feature_set.json" \
  --hydrophobicity_scale_path "$INPUT_DIR/scale_Ja.csv"

cat batch1/peppatch.csv
