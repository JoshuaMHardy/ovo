import subprocess
import os
from ovo.core.utils.pdb import get_sequences_from_pdb_str
from ovo.core.utils.resources import RESOURCES_DIR
from ovo.core.utils.tests import get_test_scheduler, prepare_test_output_dir


def test_scaffold_hairpin():
    scheduler = get_test_scheduler()
    output_dir = prepare_test_output_dir(__file__)
    scheduler.run(
        "rfdiffusion-backbone",
        output_dir=output_dir,
        params=dict(
            max_memory="4G",
            input_pdb=RESOURCES_DIR / "examples/inputs/5ELI_A.pdb",
            num_designs=1,
            contig="A111-114/10/A117-119",
            run_parameters="diffuser.T=1 inference.deterministic=True",
        ),
    )
    print("Saved to:", output_dir)
    subprocess.run(["ls", "-lR", output_dir.rstrip("/") + "/"], check=True)

    # read seq per chain from PDB file
    with open(os.path.join(output_dir, "rfdiffusion/rfdiffusion_standardized_pdb/rfdiffusion_0_standardized.pdb")) as f:
        seqs = get_sequences_from_pdb_str(f.read())
    assert sorted(seqs.keys()) == ["A"]
    assert seqs["A"] == "QSLHGGGGGGGGGGEAD"
