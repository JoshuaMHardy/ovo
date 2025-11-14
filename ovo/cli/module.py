import typer
import importlib
import os

app = typer.Typer(pretty_exceptions_enable=False)


@app.command()
def module(
    module_name: str = typer.Argument(None, help="Module name (will return path to 'ovo' module if not provided)"),
):
    """Get absolute path to installed python module in current environment"""
    if module_name is None:
        print(os.path.dirname(os.path.dirname(__file__)))
    else:
        module = importlib.import_module(module_name)
        print(os.path.dirname(module.__file__))
