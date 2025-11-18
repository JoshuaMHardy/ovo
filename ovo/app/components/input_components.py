import os
from copy import deepcopy

import streamlit as st

from ovo.app.components.molstar_custom_component import molstar_custom_component, StructureVisualization
from ovo.app.components.molstar_custom_component.dataclasses import ContigSegment
from ovo.core.database import WorkflowTypes, Workflow
from ovo.core.utils.residue_selection import parse_selections
from ovo.core.utils.formatting import safe_filename
from ovo.core.utils.pdb import get_pdb, filter_pdb_str

from ovo import storage
from ovo.core.utils.pdb import add_glycan_to_pdb


def initialize_workflow(page_key: str, workflow_name: str, include_subclasses=False) -> Workflow:
    """Initialize a workflow in the session state based on dropdown with available workflow variants (subclasses).

    :param page_key: Key identifying the workflow page, used as key in session_state.workflows
    :param workflow_name: Base name of the workflow (e.g. "rfdiffusion-end-to-end")

    """
    variant_names = WorkflowTypes.get_subclass_names(workflow_name) if include_subclasses else [workflow_name]
    if len(variant_names) > 1:
        with st.container(horizontal=True):
            workflow = st.session_state.workflows.get(page_key, None)
            variant_name = st.selectbox(
                "Workflow variant",
                options=variant_names,
                index=variant_names.index(workflow.name) if workflow else 0,
                width=450,
                key=f"workflow_variant_{page_key}",
            )
    else:
        variant_name = variant_names[0]

    if not st.session_state.workflows.get(page_key) or st.session_state.workflows[page_key].name != variant_name:
        # If workflow is not initialized yet or variant has changed, (re)initialize it
        # TODO carry over parameters when changing variant if possible
        st.session_state.workflows[page_key] = WorkflowTypes.get(variant_name)()
        # Set a copy of the initial workflow to be able to reset parameters later
        st.session_state.initial_workflows[page_key] = deepcopy(st.session_state.workflows[page_key])

    return st.session_state.workflows[page_key]


def pdb_input_component(old_pdb_code: str | None) -> tuple[str, bytes] | None:
    st.write("Enter PDB code, UniProt ID or upload your own structure file")
    with st.columns(2)[0]:
        new_pdb_code = st.text_input("PDB code or UniProt ID", value=old_pdb_code, key="input_pdb_code")
        st.button("Confirm")

    uploaded_file = st.file_uploader("...or upload a PDB file", type=["pdb", "pdb1"], key="input_pdb_file")

    # Check if a file has just been uploaded
    if uploaded_file is not None:
        pdb_input_bytes = uploaded_file.getvalue()
        filename, _ = os.path.splitext(safe_filename(uploaded_file.name))
        return filename, pdb_input_bytes

    elif new_pdb_code and new_pdb_code != old_pdb_code:
        with st.spinner(f"Downloading PDB {new_pdb_code}"):
            return new_pdb_code, get_pdb(new_pdb_code)

    return None


@st.fragment
def sequence_selection_fragment(
    page_key: str,
    input_name: str,
    color="chain-id",
    representation_type="cartoon+ball-and-stick",
    fixed_segments: list[ContigSegment] | None = None,
    **selection_kwargs,
):
    workflow = st.session_state.workflows[page_key]

    if page_key not in st.session_state.selection_history:
        st.session_state.selection_history[page_key] = {}

    if input_name not in st.session_state.selection_history[page_key]:
        st.session_state.selection_history[page_key][input_name] = [[]]

    selection_history = st.session_state.selection_history[page_key][input_name]

    st.write(
        "Click residues in sequence or structure to add them to the selection. Shift+Click to select a residue range."
    )

    force_reload = False
    if (
        st.button(":material/undo: Undo selection", disabled=len(selection_history) <= 1)
        and len(selection_history) >= 2
    ):
        # Go one selection backwards
        selection_history.pop(-1)
        previous_value = selection_history.pop(-1)
        st.write(f"Setting selection back to: {', '.join(previous_value)}")
        workflow.set_selected_segments(previous_value, **selection_kwargs)
        force_reload = True

    pdb_input_string = storage.read_file_str(workflow.get_input_pdb_path())

    if fixed_segments and not st.checkbox("Show full input structure"):
        pdb_input_string = filter_pdb_str(
            pdb_input_string,
            segments=[seg.value for seg in fixed_segments],
            add_ter=False,  # do not add TER so that molstar shows the sequence all in one piece
        )

    left, mid, right = st.columns([1.5, 1.5, 3])
    with left:
        if st.toggle(
            "Show glycosylation sites",
            key="show_glycosylation_sites_input",
            help="The positions of glycans are strictly based on the 5eli NAG template; "
            "nonexistent links might be displayed.",
        ):
            pdb_input_string, glycosylated_residues = add_glycan_to_pdb(pdb_input_string)
            if glycosylated_residues:
                st.warning(f"Glycosylated motif found at {','.join(glycosylated_residues)}")
            else:
                st.info("No glycosylation motif found.")

    with mid:
        representation_types = {
            "cartoon": "Cartoon",
            "cartoon+ball-and-stick": "Cartoon + Side chains",
            "molecular-surface": "Molecular Surface",
        }
        representation_type = st.selectbox(
            "Representation type",
            options=list(representation_types.keys()),
            index=list(representation_types.keys()).index(representation_type),
            format_func=lambda x: representation_types[x],
            key="representation_type_input",
            label_visibility="collapsed",
        )

    with right:
        colors = {
            "chain-id": "Color by chain",
            "hydrophobicity": "Color by hydrophobicity (green = hydrophobic, red = hydrophilic)",
        }
        color = st.selectbox(
            "Color scheme",
            options=list(colors.keys()),
            index=list(colors.keys()).index(color),
            format_func=lambda x: colors[x],
            key="color_scheme_input",
            label_visibility="collapsed",
        )

    selected_str = molstar_custom_component(
        structures=[
            StructureVisualization(
                pdb=pdb_input_string,
                highlighted_selections=workflow.get_selected_segments(**selection_kwargs),
                color=color,
                contigs=fixed_segments if color == "chain-id" else None,
                representation_type=representation_type,
            )
        ],
        selection_mode=True,
        show_controls=True,
        height=700,
        download_filename=input_name,
        key="input",
        force_reload=force_reload,
    )

    if selected_str is None:
        # component has not been initialized yet, stop here
        return

    selection = parse_selections(selected_str)

    workflow.set_selected_segments(selection, **selection_kwargs)

    # Added Logic to update selection history. Only add to history if the selection
    # - is not empty ([], it's output every other re-rendering)
    # - is not the current selection already (to avoid duplicates due to multiple re-rendering)
    # FIXME: Only case not handled is when, at start, one single residue only is selected and try to undo the selection
    if not force_reload and selection and (not selection_history or selection != selection_history[-1]):
        selection_history.append(selection)

    st.write(f"Selected segments: {', '.join(selection)}")
