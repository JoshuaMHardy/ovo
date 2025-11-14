import subprocess
import re
import ovo
import os


def test_cli_has_initialized_home_dir():
    p = subprocess.run("env", capture_output=True, text=True)
    assert "OVO_HOME=" in p.stdout
    assert re.search(r"OVO_HOME=.*/test-results", p.stdout), (
        "OVO_HOME not found in env, it should be initialized by conftest.py"
    )


def test_cli_module():
    p = subprocess.run(["ovo", "module"], capture_output=True, text=True)
    assert p.stdout.strip() == os.path.dirname(ovo.__file__)
