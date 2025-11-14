# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "OVO"
copyright = "2025"
author = "David Prihoda, Marco Ancona, Tereza Calounova, Adam Kral, Lukas Polak, Hugo Hrban, and Danny A. Bitton"
html_logo = "../../ovo/app/assets/ovo-logo.svg"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "myst_parser",
    "autodoc2",
]

autodoc2_packages = [
    "../../ovo",
]

autodoc2_render_plugin = "myst"
myst_enable_extensions = [
    "fieldlist",
]

autodoc2_skip_module_regexes = [
    r"ovo\.run_app",
]

templates_path = ["_templates"]
exclude_patterns = []

suppress_warnings = [
    "myst.header",
]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "furo"
html_static_path = ["_static"]
html_css_files = [
    "theme.css",
]
