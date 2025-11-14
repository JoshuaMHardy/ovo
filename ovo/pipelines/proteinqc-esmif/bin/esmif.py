import os
import argparse
import glob

from esm import pretrained
import torch
import esm.inverse_folding
from esm.inverse_folding.util import CoordBatchConverter

import pandas as pd


def load_model(models_path):
    model = "esm_if1_gvp4_t16_142M_UR50.pt"
    model_path = os.path.join(models_path, model)
    model, alphabet = pretrained.load_model_and_alphabet(model_path)
    return (model, alphabet)


def get_sequence_aa_probs(model, alphabet, coords, seq, softmax=True):
    device = next(model.parameters()).device
    batch_converter = CoordBatchConverter(alphabet)
    batch = [(coords, None, seq)]
    coords, confidence, strs, tokens, padding_mask = batch_converter(batch, device=device)

    prev_output_tokens = tokens[:, :-1].to(device)
    target = tokens[:, 1:]
    target_padding_mask = target == alphabet.padding_idx
    logits, _ = model.forward(coords, padding_mask, confidence, prev_output_tokens)
    if softmax:
        probs = torch.softmax(logits, dim=1).cpu().detach().numpy()[0].T
    else:
        probs = logits.cpu().detach().numpy()[0].T
    return pd.DataFrame(probs, columns=alphabet.all_toks)[list("-ACDEFGHIKLMNPQRSTVWXY")]


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("input_path", type=str)
    parser.add_argument("output_csv", type=str)
    parser.add_argument("-c", "--chains", type=str, default="A", help="Chain to extract the sequence from")
    parser.add_argument("--esm_models_dir", type=str, help="Path to the ESM models directory")
    options = parser.parse_args()

    paths = sorted(glob.glob(os.path.join(options.input_path, "*.pdb")))
    if not paths:
        raise ValueError(f"No pdb files found in: {options.input_path}")

    print(f"Processing {len(paths):,} structures")

    models_path = options.esm_models_dir

    model, alphabet = load_model(models_path)
    print("Model loaded")
    model = model.eval()
    if torch.cuda.is_available():
        model = model.cuda()
        print("Transferred model to GPU")

    chains = [chain.strip() for chain in options.chains.split(",")]

    results = []
    for i, path in enumerate(paths):
        print(f"Processing {i + 1}/{len(paths)}: {path}")
        basename = os.path.basename(path).removesuffix(".pdb")
        structure = esm.inverse_folding.util.load_structure(path)
        coords, native_seqs = esm.inverse_folding.multichain_util.extract_coords_from_complex(structure)

        chain_softmax = []
        for chain_id in chains:
            if not (chain_id in coords and chain_id in native_seqs):
                raise ValueError(
                    f"Chain {chain_id} not found in structure: {path}, available chains: {list(coords.keys())}"
                )
            print("Processing chain:", chain_id)
            native_seq = native_seqs[chain_id]
            all_coords = esm.inverse_folding.multichain_util._concatenate_coords(coords, chain_id)
            logits = get_sequence_aa_probs(model, alphabet, all_coords, native_seq, softmax=False)
            softmax = pd.DataFrame(torch.softmax(torch.from_numpy(logits.values), dim=1), columns=logits.columns)
            softmax["native_aa"], softmax["chain_id"] = list(native_seq), chain_id
            chain_softmax.append(softmax)

        df_softmax = pd.concat(chain_softmax)
        native_seq_sum_softmax = sum([row[row["native_aa"]] for (i, row) in df_softmax.iterrows()])
        # Compute average softmax probability per structure given total sequence length (concatenated sequences of processed chain)
        native_seq_avg_softmax = native_seq_sum_softmax / len(df_softmax["native_aa"])
        processed_chains = ",".join(df_softmax["chain_id"].unique())
        results.append((basename, processed_chains, native_seq_avg_softmax))

    result = pd.DataFrame(results, columns=["id", "chain", "native_seq_avg_softmax"])
    result.to_csv(options.output_csv, index=False)
