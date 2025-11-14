#!/bin/bash

set -ex

# change to script dir
cd "$(dirname "$0")"

INPUT_DIR=$(pwd)/test-binder-input
OUTPUT_DIR=$(pwd)/test-binder-results
# Comment out the following line to run without hotspot
HOTSPOT=B17,B237

# change to work dir
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"
# clear previous result
rm -rf contig1_batch*
rm -f input.txt

# If HOTSPOT is initialized, pass it to the pipeline
if [ -n "$HOTSPOT" ]; then cmd_hotspot="--hotspot $HOTSPOT"; else cmd_hotspot=""; fi

# PDB id, file list
for file in $INPUT_DIR/*.pdb; do
  # extract id from filename
  id=$(basename "$file" .pdb)
  echo "$file" >> input.txt
done
nextflow run ../../main.nf \
  --input_pdb input.txt \
  --tools seq_composition,backbone_metrics \
  --publish_dir $OUTPUT_DIR \
  --chains A \
  $cmd_hotspot

cat contig1_batch*/*.csv
#rm -r contig1_batch*
