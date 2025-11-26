from ovo import DesignSpec
from ovo.core.utils.pdb import get_sequences_from_pdb_str, get_pdb


def test_design_spec_from_pdb(example_pdb_path):
    with open(example_pdb_path, "r") as f:
        pdb_data = f.read()
    assert get_sequences_from_pdb_str(pdb_data, chains=["A"]) == {
        "A": "NTTVFQGVAGQSLQVSCPYDSMKHWGRRKAWCRQLGEKGPCQRVVSTHNLWLLSFLRRWNGSTAITDDTLGGTLTITLRNLQPHDAGLYQCQSLHGSEADTLRKVLVEVLAD"
    }
    spec = DesignSpec.from_pdb_str(pdb_data, chains=["A"])
    assert len(spec.chains) == 1
    assert spec.chains[0].chain_ids == ["A"]
    assert (
        spec.chains[0].sequence
        == "NTTVFQGVAGQSLQVSCPYDSMKHWGRRKAWCRQLGEKGPCQRVVSTHNLWLLSFLRRWNGSTAITDDTLGGTLTITLRNLQPHDAGLYQCQSLHGSEADTLRKVLVEVLAD"
    )


def test_pdb_online_download():
    content = get_pdb("5ELI")
    assert b"HEADER" in content
    content = get_pdb("Q9NZC2")
    assert b"HEADER" in content
