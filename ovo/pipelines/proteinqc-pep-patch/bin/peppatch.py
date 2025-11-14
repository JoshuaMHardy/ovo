import os
import argparse
import glob

from typing import List, Tuple

import pandas as pd
import numpy as np
from Bio import PDB
from Bio.PDB import PDBParser
from Bio.PDB.Polypeptide import is_aa

from lambda_function import process_pdb, get_peppatch_set_definitions


COLS_TO_NORMALIZE = [
    # Electrostatic pH 5.5 - positive
    "sum_patch_area_+,electrostatic_5.5",
    "top1_patch_area_+,electrostatic_5.5",
    "top2_patches_sum_area_+,electrostatic_5.5",
    "top3_patches_sum_area_+,electrostatic_5.5",
    "top5_patches_sum_area_+,electrostatic_5.5",
    # Electrostatic pH 5.5 - negative
    "sum_patch_area_-,electrostatic_5.5",
    "top1_patch_area_-,electrostatic_5.5",
    "top2_patches_sum_area_-,electrostatic_5.5",
    "top3_patches_sum_area_-,electrostatic_5.5",
    "top5_patches_sum_area_-,electrostatic_5.5",
    # Electrostatic pH 7.4 - positive
    "sum_patch_area_+,electrostatic_7.4",
    "top1_patch_area_+,electrostatic_7.4",
    "top2_patches_sum_area_+,electrostatic_7.4",
    "top3_patches_sum_area_+,electrostatic_7.4",
    "top5_patches_sum_area_+,electrostatic_7.4",
    # Electrostatic pH 7.4 - negative
    "sum_patch_area_-,electrostatic_7.4",
    "top1_patch_area_-,electrostatic_7.4",
    "top2_patches_sum_area_-,electrostatic_7.4",
    "top3_patches_sum_area_-,electrostatic_7.4",
    "top5_patches_sum_area_-,electrostatic_7.4",
    # Hydrophobic
    "sum_patch_area,hydrophobic",
    "top1_patch_area,hydrophobic",
    "top2_patches_sum_area,hydrophobic",
    "top3_patches_sum_area,hydrophobic",
    "top5_patches_sum_area,hydrophobic",
]


def save_first_model_with_chains(
    pdb_file_path: str, out_pdb_file_path: str, chains_to_keep: List[str] = [], skip_unknown: bool = True
):
    """
    Save the first model of a PDB file if it contains multiple models.
    Also if chains_to_keep is provided, only those chains will be saved.
    If skip_unk is True, chains containing UNK residues will not be saved.

    """

    class _SelectChains(PDB.Select):
        def accept_chain(self, chain):
            if chain.id not in chains_to_keep:
                return False
            # Only keep chains with at least one protein residue
            for residue in chain.get_residues():
                if is_aa(residue.get_resname(), standard=True):
                    return True
            return False

        def accept_residue(self, residue):
            if skip_unknown and residue.get_resname() == "UNK":
                return False
            # Only keep standard amino acids
            return is_aa(residue.get_resname(), standard=True)

    # Check if the PDB file contains multiple models
    parser = PDB.PDBParser(QUIET=True)
    structure = parser.get_structure("structure", pdb_file_path)
    first_model = structure[0]
    io = PDB.PDBIO()
    io.set_structure(first_model)
    io.save(out_pdb_file_path, _SelectChains())
    return


def remove_hetatoms(pdb_file_path: str):
    """
    Remove HETATM lines from a PDB file.
    """
    with open(pdb_file_path, "r") as f:
        structure_data = f.read()

    with open(pdb_file_path, "w") as f_out:
        # Remove HETATM lines
        structure_data = "\n".join([line for line in structure_data.split("\n") if not line.startswith("HETATM")])

        # Write the modified data to a new file
        f_out.write(structure_data)


def remove_overlapping_atoms(structure, pdb_path_chain_subset, threshold=1e-3):
    """
    Remove one atom from each pair that are closer than threshold (in Å).
    Modifies the structure in-place.
    """
    atoms = list(structure.get_atoms())
    coords = np.array([atom.get_coord() for atom in atoms])
    to_remove = set()
    for i in range(len(atoms)):
        if i in to_remove:
            continue
        dists = np.linalg.norm(coords[i + 1 :] - coords[i], axis=1)
        overlapping = np.where(dists < threshold)[0]
        for idx in overlapping:
            to_remove.add(i + 1 + idx)
    # Remove atoms (from parent residue)
    for idx in sorted(to_remove, reverse=True):
        atom = atoms[idx]
        parent = atom.get_parent()
        parent.detach_child(atom.id)
    if len(to_remove) > 0:
        print(f"Removed {len(to_remove)} overlapping atoms.")
        io = PDB.PDBIO()
        io.set_structure(structure)
        io.save(pdb_path_chain_subset)


def preprocess_structure(pdb_file_path: str, out_pdb_file_path: str, chains_to_keep: List[str] = []):
    """
    Preprocess the PDB file by saving the first model and removing HETATM lines.
    """
    save_first_model_with_chains(pdb_file_path, out_pdb_file_path, chains_to_keep)
    remove_hetatoms(out_pdb_file_path)


def normalize_area_columns(
    df: pd.DataFrame, cols_to_normalize: List[str], col_for_norm: str = "total_area"
) -> pd.DataFrame:
    """
    Normalize the area columns in the DataFrame by dividing them by the total area.
    The columns to normalize are defined in the  list.
    """
    for column_name in cols_to_normalize:
        if column_name not in df.columns:
            continue
        try:
            descriptor, method = column_name.split(",")
            normalized_column_name = f"{descriptor}_normalized,{method}"
            df[normalized_column_name] = df[column_name] / df[col_for_norm]
        except ValueError:
            print(f"Could not normalize column {column_name} with {col_for_norm}.")
            continue
    return df


def prepare_chain_group_pdbs(pdb_path, out_dir: str, chains_str: str) -> Tuple[List[str], List[str]]:
    """Prepare PDB files for each chain group specified.

    :param path: Path to PDB file
    :param out_dir: Output directory to save prepared PDB files
    :param chains_str: String specifying chain groups, ";" separated groups, "," separated chains within group.
                   Example: "A,B;C" will analyze chains A and B combined as one entry, and chain C as another entry.
                   Use "FULL" to analyze all available chains as one entry.
                   Use "EACH" to analyze each chain separately.

    :return: List of chain groups (['A', 'B', 'A,B']) and corresponding list of prepared PDB file paths
    """
    with open(pdb_path) as f:
        available_chains = sorted(
            {line[21].strip() for line in f if line.startswith("ATOM") and len(line) > 21 and line[21].strip()}
        )
    print("Available chains:", available_chains)

    chain_groups = []
    for group in chains_str.split(";"):
        if group == "EACH":
            chain_groups.extend(available_chains)
        elif group == "FULL":
            chain_groups.append(",".join(available_chains))
        else:
            if missing_chains := sorted(set(group.split(",")).difference(available_chains)):
                raise ValueError(
                    f"Requested chain {missing_chains} is missing in structure: {pdb_path}, available chains: {available_chains}"
                )
            chain_groups.append(group)

    os.makedirs(out_dir, exist_ok=True)
    paths = []
    for chain_group in chain_groups:
        pdb_path_chain_subset = os.path.join(
            out_dir, f"{os.path.basename(pdb_path).removesuffix('.pdb')}.{chain_group}.pdb"
        )
        preprocess_structure(pdb_path, pdb_path_chain_subset, chain_group.split(","))
        paths.append(pdb_path_chain_subset)

    return chain_groups, paths


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("input_path", type=str)
    parser.add_argument("output_csv", type=str)
    parser.add_argument("-c", "--chains", type=str, default="A", help="Chain to extract the sequence from")
    parser.add_argument("--peppatch_config_path", type=str, default=".", help="Path to peppatch config JSON file")
    options = parser.parse_args()

    paths = sorted(glob.glob(os.path.join(options.input_path, "*.pdb")))
    if not paths:
        raise ValueError(f"No pdb files found in: {options.input_path}")

    config_path = options.peppatch_config_path

    peppatch_set = get_peppatch_set_definitions(config_path)

    results = []
    for i, path in enumerate(paths):
        print(f"Processing {i + 1}/{len(paths)}: {path}")
        basename = os.path.basename(path).removesuffix(".pdb")

        chain_groups, chain_pdb_paths = prepare_chain_group_pdbs(path, "prepared_pdb", chains_str=options.chains)
        for chain_group, pdb_path_chain_subset in zip(chain_groups, chain_pdb_paths):
            # Skip large structures over 5000 residues
            parser = PDBParser(QUIET=True)
            structure = parser.get_structure("structure", pdb_path_chain_subset)
            n_residues = sum(1 for _ in structure.get_residues())
            if n_residues < 1:
                print(f"Skipping {basename} chain group {chain_group}: no standard residues found")
                results.append({"id": basename, "chains": chain_group, "error": f"Skipped as no residues were found"})
                continue
            if n_residues > 5000:
                print(f"Skipping {basename} chain group {chain_group}: {n_residues} residues (over 5000)")
                results.append(
                    {
                        "id": basename,
                        "chains": chain_group,
                        "error": f"Skipped due to {n_residues} residues (over 5000)",
                    }
                )
                continue

            # Run pep-patch
            try:
                # Handle overlapping atoms which cause mdtraj process quit https://github.com/mdtraj/mdtraj/issues/1300
                remove_overlapping_atoms(structure, pdb_path_chain_subset)

                per_residue_patches, global_descriptors = process_pdb(pdb_path_chain_subset, peppatch_set)
                results.append(
                    {
                        "id": basename,
                        "chains": chain_group,
                        **global_descriptors,
                        "error": None,
                    }
                )
            except Exception as e:
                print(f"Error processing {basename} chain group {chain_group}: {e}")
                results.append(
                    {
                        "id": basename,
                        "chains": chain_group,
                        "error": str(e),
                    }
                )

    result = pd.DataFrame(results).set_index("id")

    # Normalize area columns
    result = normalize_area_columns(result, COLS_TO_NORMALIZE, "total_area")
    result.to_csv(options.output_csv, index=True)
