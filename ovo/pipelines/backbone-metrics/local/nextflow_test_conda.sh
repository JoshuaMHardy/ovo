#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

INPUT_DIR=$(pwd)/test-input
OUTPUT_DIR=$(pwd)/test-results
# Override using HOTSPOT env var
HOTSPOT=${HOTSPOT-B17,B237}

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf "batch1"

# If HOTSPOT is initialized, pass it to the pipeline
if [ -n "$HOTSPOT" ]; then cmd_hotspot="--hotspot $HOTSPOT"; else cmd_hotspot=""; fi

nextflow run ../../main.nf \
  --pdb_dir $INPUT_DIR \
  --publish_dir $OUTPUT_DIR \
  --output_dir batch1 \
  --cyclic \
  $cmd_hotspot

cat batch1/backbone_metrics.csv
