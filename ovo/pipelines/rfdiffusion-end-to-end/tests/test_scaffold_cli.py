import subprocess
from ovo.core.utils.resources import RESOURCES_DIR
from ovo.core.utils.tests import prepare_test_output_dir, TEST_SCHEDULER_KEY
import pandas as pd
import os


def test_scaffold_cli():
    output_dir = prepare_test_output_dir(__file__)
    cmd = [
        "ovo",
        "scheduler",
        "run",
        "rfdiffusion-end-to-end",
        output_dir,
        "--scheduler",
        TEST_SCHEDULER_KEY,
        "--max_memory",
        "4G",
        "--batch_size",
        "2",
        "--design_type",
        "scaffold",
        "--rfdiffusion_input_pdb",
        str((RESOURCES_DIR / "examples/inputs/5ELI_A.pdb").resolve()),
        "--rfdiffusion_num_designs",
        "1",
        "--rfdiffusion_contig",
        "A111-114/10/A117-119",
        "--rfdiffusion_run_parameters",
        "diffuser.T=1 inference.deterministic=True",
        "--mpnn_run_parameters",
        "--seed 42",
        "--refolding_tests",
        "af2_model_1_ptm_ft_1rec",
    ]
    subprocess.check_call(cmd)
    print("Saved to:", output_dir)
    subprocess.run(["ls", "-lR", output_dir.rstrip("/") + "/"], check=True)
    initial_guess = pd.read_json(os.path.join(output_dir, "contig1_batch1/af2_model_1_ptm_ft_1rec.jsonl"), lines=True)
    assert len(initial_guess) == 1
