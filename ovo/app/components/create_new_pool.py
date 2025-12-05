import re

import streamlit as st

from ovo import storage, get_username
from ovo.core.database.models import Pool, Design
from ovo.core.logic.descriptor_logic import submit_descriptor_workflow
from ovo.core.logic.round_logic import get_or_create_project_rounds
from ovo.core.database.models_proteinqc import ProteinQCWorkflow

from ovo import db


@st.dialog("Upload new pool of designs", width="large")
def create_new_pool():
    content = st.empty()
    with content.container():
        project_id = st.session_state.project.id

        rounds_by_id = get_or_create_project_rounds(project_id=project_id)
        round_ids = list(rounds_by_id.keys())
        round_id = st.selectbox(
            "Project Round",
            options=round_ids,
            format_func=lambda i: rounds_by_id[i].name,
            key="custom_pool_round_selectbox",
            index=len(round_ids) - 1,
        )

        name = st.text_input("Pool name *", placeholder="Descriptive name for this collection of designs")

        if name and db.count(Pool, round_id=round_id, name=name):
            st.error(f"A pool with this name already exists in this round. Please choose a different name.")

        description = st.text_area(
            "Pool description",
            placeholder="Optional longer description of this pool",
        )
        if "files" not in st.session_state.keys():
            st.session_state.files = None

        if st.file_uploader(
            "PDB files *",
            accept_multiple_files=True,
            type=["pdb"],
            key="uploader",
        ):
            st.session_state.files = st.session_state.uploader

        with st.columns(2)[0]:
            chains = st.text_input(
                "Chain(s) to analyze",
                help="Chain IDs separated by comma (A,B,C), space (A B C) or concatenated (ABC)",
                value="A",
            )
            chains = chains.replace(" ", "").replace(",", "")

        _, submit_col = st.columns([3, 1])
        with submit_col:
            submit = st.button(
                "Upload pool",
                disabled=not st.session_state.files or not name,
                help="No files selected"
                if not st.session_state.files
                else ("Please enter a pool name" if not name else None),
                key="submit",
                type="primary",
                width="stretch",
            )

    if submit:
        assert re.match(r"^[A-Z]+$", chains), f"Invalid chains '{chains}'"
        content.empty()

        username = get_username()

        # Create pool
        pool = Pool(id=Pool.generate_id(), author=username, round_id=round_id, name=name, description=description)

        # Save the files to storage and create designs
        st.text("📂 Uploading PDB files...")
        designs = []

        for file in st.session_state.files:
            designs.append(
                Design.from_pdb_file(
                    storage=storage,
                    filename=file.name,
                    pdb_str=file.read().decode(),
                    chains=list(chains),
                    project_id=project_id,
                    pool_id=pool.id,
                )
            )

        # Save designs to db because we load them from db when submitting the proteinqc job
        db.save_all(designs + [pool])

        # Trigger sequence composition computation with local conda scheduler
        st.text("⏳ Submitting descriptor job...")
        submit_descriptor_workflow(
            workflow=ProteinQCWorkflow(
                tools=["seq_composition"],
                chains=list(chains),
                design_ids=[design.id for design in designs],
            ),
            scheduler_key="local",
            project_id=project_id,
        )

        st.session_state.files = None
        st.text("✅ Done")

        st.rerun()
