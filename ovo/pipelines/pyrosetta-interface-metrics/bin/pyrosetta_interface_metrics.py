#!/usr/bin/env python3
#
# Calculates contact molecular surface and various other metrics suggested by
# Brian Coventry. XML is unaltered from Brian.
#
# Adapted by David Prihoda for RFpeptide scoring based on RFpeptide supplement
#
# Usage:
#
#   ./pyrosetta_interface_metrics.py PDB_FOLDER OUT_CSV
#
# where FOLDER contains PDBs of complexes you want to score.
#


import os
import glob
import argparse
import multiprocessing
import json
import sys
import tempfile

from pyrosetta import *
from rosetta.protocols.rosetta_scripts import *

script_dir = os.path.dirname(__file__)

p = argparse.ArgumentParser()
p.add_argument("data_dir", help="Folder of FastDesign outputs to process. Must contain both binder and receptor.")
p.add_argument("out_jsonl", help="Output jsonl file name")
p.add_argument(
    "--suffix",
    default="",
    help="Suffix on outputs to process. e.g. if --suffix=complex, then only processes files named *complex.pdb",
)
p.add_argument("--relax", action="store_true", default=False, help="Relax structures before scoring")
p.add_argument("--out-pdb", help="Save PDB structures to this directory after applying movers")
p.add_argument("--debug", action="store_true", default=False, help="Exit on error")
p.add_argument("--reference-files-dir", help="Directory containing reference files (model weights, executables)")
args = p.parse_args()

# Build PyRosetta init flags
init_flags = " -corrections::beta_nov16 -detect_disulf false -run:preserve_header true"

# Auto-detect DAlphaBall for accurate buried unsat calculations
def find_dalphaball():
    """Auto-detect DAlphaBall executable from OVO reference_files_dir"""
    import platform
    
    reference_files_dir = args.reference_files_dir
    if reference_files_dir:
        # Detect platform-specific executable name
        if platform.system() == "Darwin":
            executable = "DAlphaBall.macgcc"
        else:
            executable = "DAlphaBall.gcc"
        
        standard_path = os.path.join(reference_files_dir, "bin", executable)
        if os.path.isfile(standard_path):
            return standard_path
    
    return None

dalphaball_path = find_dalphaball()
has_dalphaball = False

if dalphaball_path:
    if os.path.isfile(dalphaball_path):
        init_flags += f" -holes:dalphaball {dalphaball_path}"
        has_dalphaball = True
        print(f"✓ DAlphaBall found: {dalphaball_path}")
    else:
        print(f"⚠ Warning: DAlphaBall path specified but not found: {dalphaball_path}")
        print("  Using standard SASA instead")
else:
    print("ℹ DAlphaBall not found, using standard SASA")
    print("  Run 'ovo init dalphaball' for more accurate buried unsat calculations")

init(init_flags)
parser = RosettaScriptsParser()

# Prepare XML with appropriate dalphaball_sasa setting
xml_template_path = os.path.join(script_dir, "interface_metrics_rfdesign.xml")
with open(xml_template_path) as f:
    xml_content = f.read()

# Adjust dalphaball_sasa based on availability
if has_dalphaball:
    # Change dalphaball_sasa="false" to dalphaball_sasa="true" to enable rotation-invariant SASA
    xml_content = xml_content.replace('dalphaball_sasa="false"', 'dalphaball_sasa="true"')
    # Write to temporary file
    temp_xml = tempfile.NamedTemporaryFile(mode='w', suffix='.xml', delete=False)
    temp_xml.write(xml_content)
    temp_xml.close()
    protocol_path = temp_xml.name
else:
    # Use template as-is with dalphaball_sasa="false"
    protocol_path = xml_template_path

ncpu = len(os.sched_getaffinity(0)) if hasattr(os, "sched_getaffinity") else os.cpu_count()
print(f"Using {ncpu} cores")


def calculate(pdb_path):
    basename = os.path.basename(pdb_path).removesuffix(".pdb")
    row = {"id": basename}
    try:
        pose = pose_from_pdb(pdb_path)

        if args.relax:
            objs = XmlObjects.create_from_file(protocol_path)
            relax = objs.get_mover("FastRelax")
            relax.apply(pose)

        # We re-initialize the mover for each PDB to avoid remembering stuff from previous peptides, like peptide length
        protocol = parser.generate_mover(protocol_path)
        # Apply movers
        protocol.apply(pose)

        if args.out_pdb:
            os.makedirs(args.out_pdb, exist_ok=True)
            # save pose
            pose.dump_pdb(os.path.join(args.out_pdb, str(basename) + "_relaxed.pdb"))

        print("SCORES", pose.scores)
        for k, v in pose.scores.items():
            row[k] = float(v)
    except Exception as e:
        row["error"] = f"{e} ({type(e).__name__})"
        print(f"ERROR processing {basename}: {row['error']}")
        if args.debug:
            raise
    return row


if __name__ == "__main__":
    files = sorted(glob.glob(os.path.join(args.data_dir, f"*{args.suffix}.pdb")))

    if not files:
        print("No files found in", args.data_dir)
        sys.exit(0)

    if args.debug:
        records = map(calculate, files)
    else:
        with multiprocessing.Pool(min(ncpu, len(files))) as p:
            records = p.map(calculate, files)

    num_errors = 0
    with open(args.out_jsonl, "wt") as f:
        for record in records:
            json.dump(record, f)
            if record.get("error"):
                num_errors += 1
            f.write("\n")

    if num_errors == len(files):
        raise ValueError(f"All results failed: {record['error']}")

    print("Saved to:", args.out_jsonl)
