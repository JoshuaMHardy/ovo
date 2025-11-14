import subprocess
import os
import pandas as pd
import pytest
from ovo.core.utils.resources import RESOURCES_DIR
from ovo.core.utils.tests import get_test_scheduler, prepare_test_output_dir, assert_similar_sequence


def test_scaffold_hairpin():
    scheduler = get_test_scheduler()
    output_dir = prepare_test_output_dir(__file__)
    scheduler.run(
        "rfdiffusion-end-to-end",
        output_dir=output_dir,
        params=dict(
            max_memory="4G",
            batch_size=2,
            design_type="scaffold",
            rfdiffusion_input_pdb=RESOURCES_DIR / "examples/inputs/5ELI_A.pdb",
            rfdiffusion_num_designs=1,
            rfdiffusion_contig="A111-114/10/A117-119",
            rfdiffusion_run_parameters="diffuser.T=1 inference.deterministic=True",
            mpnn_run_parameters="--seed 42",
            refolding_tests="af2_model_1_ptm_ft_1rec,esmfold",
        ),
    )
    print("Saved to:", output_dir)
    subprocess.run(["ls", "-lR", output_dir.rstrip("/") + "/"], check=True)

    backbone_metrics = pd.read_csv(os.path.join(output_dir, "contig1_batch1/backbone_metrics.csv"))
    assert len(backbone_metrics) == 1
    first_bb = backbone_metrics.iloc[0]
    assert_similar_sequence(first_bb.pydssp_str, "--EEEEEE--EEEEEE-", 0.5)

    seq_composition = pd.read_csv(os.path.join(output_dir, "contig1_batch1/seq_composition.csv"))
    assert len(seq_composition) == 1
    first_seq = seq_composition.iloc[0]
    assert_similar_sequence(first_seq.sequence, "QSLHVNSSSGEAKVEAD", 0.5)

    initial_guess = pd.read_json(os.path.join(output_dir, "contig1_batch1/af2_model_1_ptm_ft_1rec.jsonl"), lines=True)
    assert len(initial_guess) == 1
    first_scores = initial_guess.iloc[0]
    assert first_scores["design_backbone_rmsd"] < 15.0
    assert first_scores["native_motif_rmsd"] < 20.0
    assert first_scores["plddt"] > 20.0

    esmfold = pd.read_json(os.path.join(output_dir, "contig1_batch1/esmfold.jsonl"), lines=True)
    assert len(esmfold) == 1
    first_esmfold = esmfold.iloc[0]
    assert first_esmfold["RMSD_backbone"] < 10.0
    assert first_esmfold["RMSD_all_atom"] < 20.0
    assert first_esmfold["pLDDT"] > 20.0
