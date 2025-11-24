import subprocess
import os
import pandas as pd
import pytest

from ovo.core.utils.resources import RESOURCES_DIR
from ovo.core.utils.tests import get_test_scheduler, prepare_test_output_dir, assert_similar_sequence


def test_5eli_binder_ligandmpnn():
    scheduler = get_test_scheduler()
    output_dir = prepare_test_output_dir(__file__)
    scheduler.run(
        "rfdiffusion-end-to-end",
        output_dir=output_dir,
        params=dict(
            max_memory="4G",
            batch_size="2",
            design_type="binder",
            rfdiffusion_input_pdb=RESOURCES_DIR / "examples/inputs/5ELI_A.pdb",
            rfdiffusion_num_designs=1,
            rfdiffusion_contig="A74-97/0 20",
            rfdiffusion_run_parameters="diffuser.T=15 inference.deterministic=True",
            mpnn_run_parameters="--seed 42",
            mpnn_fastrelax_cycles=0,
            mpnn_num_sequences=2,
            refolding_tests="af2_model_1_multimer_tt_3rec",
        ),
    )
    print("Saved to:", output_dir)
    subprocess.run(["ls", "-lR", output_dir.rstrip("/") + "/"], check=True)

    seq_composition = pd.read_csv(os.path.join(output_dir, "contig1_batch1/seq_composition.csv"))
    assert len(seq_composition) == 2
    first_seq = seq_composition.iloc[0]
    assert first_seq["id"] == "contig1_batch1_0_standardized_packed_1_1"
    assert_similar_sequence(first_seq.sequence, "VTVITITTTGGVLSVSITTL", 0.5)
    second_seq = seq_composition.iloc[1]
    assert second_seq["id"] == "contig1_batch1_0_standardized_packed_2_1"
    assert_similar_sequence(first_seq.sequence, "VTVITITTTGGTLTISITNV", 0.5)

    initial_guess = pd.read_json(
        os.path.join(output_dir, "contig1_batch1/af2_model_1_multimer_tt_3rec.jsonl"), lines=True
    )
    assert len(initial_guess) == 2
    first_scores = initial_guess.iloc[0]
    assert first_scores["target_aligned_binder_rmsd"] < 100
    assert first_scores["binder_plddt"] > 5.0
