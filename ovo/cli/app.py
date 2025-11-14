#!/usr/bin/env python

import typer
import os
import sys
import runpy
import secrets

app = typer.Typer(pretty_exceptions_enable=False)


@app.command(name="app", context_settings={"allow_extra_args": True, "ignore_unknown_options": True})
def main(
    token: bool = typer.Option(
        False,
        "--token",
        help="Require a token to access the web app. Use set OVO_LOGIN_TOKEN env var for a custom token.",
    ),
    streamlit_run_args: typer.Context = typer.Option(None),
):
    """Run OVO streamlit web application
    \n

    OVO Config variables can be overriden with env vars in this format:
    \n
    OVO_SOME_FIELD_SUBFIELD env var will override some_field.subfield
    \n

    Additional commandline arguments will be passed to `streamlit run`, for example:
    \n
    ovo app --server.address 127.0.0.1 --server.port 5001
    \n

    See `streamlit run --help` for more info.
    """

    streamlit_script_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "run_app.py")
    sys.argv = ["streamlit", "run", streamlit_script_path] + streamlit_run_args.args

    if token:
        token_value = os.environ.get("OVO_LOGIN_TOKEN", secrets.token_urlsafe(16))
        os.environ["OVO_LOGIN_TOKEN"] = token_value
        print(f"OVO Login Token: {token_value}")

    runpy.run_module("streamlit", run_name="__main__")


if __name__ == "__main__":
    app()
