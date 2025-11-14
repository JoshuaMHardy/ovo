import streamlit as st
import numpy as np
import pandas as pd
from typing import List, Dict
from collections import Counter


from ovo.app.components import molstar_custom_component, StructureVisualization
from ovo.core.database import descriptors_rfdiffusion
from ovo.core.database.descriptors_proteinqc import (
    PROTEINQC_SEQUENCE_DESCRIPTORS,
    PROTEINQC_STRUCTURE_DESCRIPTORS,
    ESMFOLD_DESCRIPTORS,
    PEP_PATCH_HYDROPHOBICITY_DESCRIPTORS_BY_KEY,
    AF2_DEFAULT_DESCRIPTORS,
)
from ovo.core.database.models import Descriptor
from ovo.core.logic.proteinqc_logic import get_descriptor_plot_setting
from ovo import storage, CategoricalResidueDescriptor, ResidueNumberDescriptor, NumericGlobalDescriptor
from ovo.app.utils.protein_qc_plots import (
    load_histograms,
    format_threshold_value,
    descriptor_histograms,
    get_histogram_alt,
)
from ovo.app.utils.cached_db import get_cached_design
from ovo.app.components.workflow_visualization_components import visualize_design_sequence

HISTOGRAMS = load_histograms()


@st.fragment()
def descriptor_overview_tiles(descriptors_df: pd.DataFrame, descriptors_by_key: Dict[str, Descriptor]):
    st.subheader(
        "Sequence-based descriptors",
        help="Overview of top sequence-based descriptors of the designs. The average value is compared to the warning and error thresholds. The top histograms show distribution of the descriptor in PDB colored by preset warning and error thresholds and the bottom histograms show distribution of the designs.",
    )
    descriptor_tiles(descriptors_df, PROTEINQC_SEQUENCE_DESCRIPTORS)

    st.subheader(
        "Structure-based descriptors",
        help="Overview of top structure-based descriptors of the designs. The average value is compared to the warning and error thresholds. The top histograms show distribution of the descriptor in PDB colored by preset warning and error thresholds and the bottom histograms show distribution of the designs.",
    )
    descriptor_tiles(descriptors_df, PROTEINQC_STRUCTURE_DESCRIPTORS)

    # AF2 initial guess
    af_descriptors = [descriptor for descriptor in AF2_DEFAULT_DESCRIPTORS if descriptor.key in descriptors_by_key]
    if af_descriptors:
        st.subheader("Refolding test: AlphaFold2 initial guess")
        descriptor_tiles(descriptors_df, af_descriptors)

    # ESMFold for scaffold design
    esmfold_descriptors = [descriptor for descriptor in ESMFOLD_DESCRIPTORS if descriptor.key in descriptors_by_key]
    if esmfold_descriptors:
        st.subheader("Refolding test: ESMFold")
        descriptor_tiles(descriptors_df, esmfold_descriptors)

    backbone_metrics_descriptors = [
        descriptor for descriptor in descriptors_rfdiffusion.BACKBONE_METRICS if descriptor.key in descriptors_by_key
    ]
    # FIXME: ADJUST HOTSPOT INTERFACE METRICS
    if backbone_metrics_descriptors:
        st.subheader("Backbone metrics")
        descriptor_tiles(descriptors_df, backbone_metrics_descriptors)


def on_dismiss_dialog():
    st.query_params.pop("dialog", None)


def get_residue_presence_df(descriptor: Descriptor, nonnull_descriptor_values, total_designs: int):
    """
    Returns a DataFrame with each unique residue and the percentage of designs in which it is present.
    """
    # Filter out empty or non-string values
    nonnull_values = [v for v in nonnull_descriptor_values if isinstance(v, str) and v.strip()]
    all_residues = []

    # Collect all residues from all designs by splitting on commas
    for v in nonnull_values:
        all_residues.extend([r.strip() for r in v.split(",") if r.strip()])
    if not all_residues:
        return None

    # Count in how many designs each residue is present
    residue_in_designs = Counter()
    for v in nonnull_values:
        residues = {r.strip() for r in v.split(",") if r.strip()}
        for residue in residues:
            residue_in_designs[residue] += 1
    residue_df = pd.DataFrame(
        {
            descriptor.name: list(residue_in_designs.keys()),
            "% of designs": [100 * count / total_designs for count in residue_in_designs.values()],
        }
    )
    residue_df = residue_df.sort_values(by="% of designs", ascending=False)
    return residue_df


def residue_number_descriptor_detail_table(descriptor: Descriptor, descriptor_values: pd.Series):
    """
    Returns (table_data, column_config, caption, format_func) for ResidueNumberDescriptor detail view.
    table_data: DataFrame with designs as rows, unique residues as columns, checkmark if present.
    column_config: dict for st.dataframe
    caption: str
    format_func: function for design_id formatting
    """
    unique_residues = set()
    design_to_residues = {}

    # Build mapping from design to set of residues, and collect all unique residues
    for design_id, val in descriptor_values.items():
        residues = {r.strip() for r in str(val).split(",") if r.strip()}
        design_to_residues[design_id] = residues
        unique_residues.update(residues)
    unique_residues = sorted(unique_residues)
    # Remove "None" if present
    if "None" in unique_residues:
        unique_residues.remove("None")
    bool_data = []

    # For each design, create a boolean row for presence of each residue
    for design_id in descriptor_values.index:
        row = [res in design_to_residues[design_id] for res in unique_residues]
        bool_data.append(row)
    bool_df = pd.DataFrame(bool_data, index=descriptor_values.index, columns=unique_residues)

    # Add column for number of residues present in each design and sort
    bool_df["# residues present"] = bool_df.sum(axis=1)
    bool_df = bool_df.sort_values(by="# residues present", ascending=False)

    caption = f"Designs (rows) vs residues (columns) for **{descriptor.name}**"
    column_config = {}
    column_config["# residues present"] = st.column_config.ProgressColumn(
        "# residues present",
        format="%d",
        min_value=0,
        max_value=len(unique_residues),
        width="small",
        help=f"Number of {descriptor.name} present in the design",
    )
    formatted_strings = {
        design_id: f"{design_id} | #residues={row['# residues present']}" for design_id, row in bool_df.iterrows()
    }
    format_func = lambda design_id: formatted_strings.get(design_id, str(design_id))
    return bool_df, column_config, caption, format_func


@st.dialog("Detail", on_dismiss=on_dismiss_dialog)
def detail_descriptor_dialog(descriptor, descriptor_values: pd.Series):
    st.markdown(
        """
    <style>
    div[role="dialog"] {
        width: 80vw !important;
        max-width: 1200px !important;
        height: auto;
    }
    </style>
    """,
        unsafe_allow_html=True,
    )

    st.write(f"**{descriptor.name}**: {descriptor.description}")

    table_data = pd.DataFrame({"value": descriptor_values})
    table_data.index.name = "Design ID"

    col1, col2 = st.columns([2, 3.5])

    if isinstance(descriptor, CategoricalResidueDescriptor):
        value_counts = descriptor_values.value_counts()
        table_data["category_abundance"] = descriptor_values.map(value_counts)
        caption = f"Design sorted by **{descriptor.name}** category abundance"
        table_data = table_data.sort_values(by=["category_abundance", "value"], ascending=[False, True])
        column_config = {
            "design_id": st.column_config.Column("Design ID"),
            "value": st.column_config.TextColumn(descriptor.name),
            "category_abundance": st.column_config.ProgressColumn(
                "Category #",
                help=f"Category abundance among the designs",
                format="%d",
                min_value=0,
                max_value=int(table_data["category_abundance"].max()),
                width="small",
            ),
        }
        format_func = lambda design_id: f"{design_id} | {descriptor.name} = {table_data.value.loc[design_id]}"
    elif isinstance(descriptor, NumericGlobalDescriptor):
        caption = f"Designs sorted by **{descriptor.name}**"
        table_data = table_data.sort_values(by="value", ascending=True)
        min_val = descriptor.min_value if descriptor.min_value is not None else float(table_data["value"].min())
        max_val = descriptor.max_value if descriptor.max_value is not None else float(table_data["value"].max())

        # Streamlit shows error if min_val == max_val in ProgressColumn so we adjust slightly
        if min_val == max_val:
            epsilon = 1e-6
            min_val -= epsilon
            max_val += epsilon
        column_config = {
            "design_id": st.column_config.Column("Design ID"),
            "value": st.column_config.ProgressColumn(
                descriptor.name, format="%.2f", min_value=min_val, max_value=max_val
            ),
        }
        format_func = lambda design_id: f"{design_id} | {descriptor.name} = {table_data.value.loc[design_id]:.2f}"
    elif isinstance(descriptor, ResidueNumberDescriptor):
        table_data, column_config, caption, format_func = residue_number_descriptor_detail_table(
            descriptor, descriptor_values
        )
    else:
        # TODO: Support other descriptor tiles
        st.info("Detail view for this type of descriptor coming soon")
        return

    with col1:
        st.caption(caption)
        st.dataframe(
            table_data,
            column_config=column_config,
            width="stretch",
        )

    with col2:
        design_id = st.selectbox(
            "Select design:",
            options=table_data.index,
            key="design_id_select",
            format_func=format_func,
        )

        visualize_design_sequence(design_id)

        design = get_cached_design(design_id)

        left, right = st.columns([1, 2], vertical_alignment="center")

        with left:
            colors_and_types = {
                ("chain-id", "cartoon"): ("Cartoon", ""),
                ("hydrophobicity", "molecular-surface"): (
                    "Surface hydrophobicity",
                    "Surface colored by hydrophobicity scale: :green-badge[**green** = hydroPHOBIC] :red-badge[**red** = hydroPHILIC]",
                ),
                ("hydrophobicity", "cartoon+ball-and-stick"): (
                    "Side chain hydrophobicity",
                    "Cartoon and side chains colored by hydrophobicity scale: :green-badge[**green** = hydroPHOBIC] :red-badge[**red** = hydroPHILIC]",
                ),
            }
            rep_type_index = 0
            if descriptor.key in PEP_PATCH_HYDROPHOBICITY_DESCRIPTORS_BY_KEY:
                rep_type_index = 1
            color, representation_type = st.selectbox(
                "Representation",
                options=list(colors_and_types.keys()),
                format_func=lambda x: colors_and_types[x][0],
                key="colors_and_types_input",
                label_visibility="collapsed",
                index=rep_type_index,
            )

        with right:
            st.write(colors_and_types[(color, representation_type)][1])

        molstar_custom_component(
            structures=[
                StructureVisualization(
                    pdb=storage.read_file_str(design.structure_path),
                    color=color,
                    representation_type=representation_type,
                )
            ],
            key="dialog_structure",
            height="300px",
        )


def detail_button(descriptor, descriptor_values: pd.Series):
    if st.button("Detail", key=f"{descriptor.name}_btn"):
        st.query_params["dialog"] = descriptor.key
    if st.query_params.get("dialog") == descriptor.key:
        detail_descriptor_dialog(descriptor, descriptor_values)


def write_tile_title(descriptor: Descriptor, descriptor_values: pd.Series):
    # Indicate pass/warning/error with color highlight and symbol by comparing avg value to warning/error thresholds
    if (
        (isinstance(descriptor, NumericGlobalDescriptor))
        and (descriptor.comparison != "does_not_apply")
        and (descriptor.warning_value and descriptor.error_value)
    ):
        avg_value = np.mean(descriptor_values)

        if descriptor.comparison == "higher_is_better":
            if avg_value > descriptor.warning_value:
                color = "green"
                symbol = ":material/check_circle:"
            elif avg_value > descriptor.error_value:
                color = "orange"
                symbol = ":material/warning:"
            else:
                color = "red"
                symbol = ":material/error:"
        else:
            if avg_value < descriptor.warning_value:
                color = "green"
                symbol = ":material/check_circle:"
            elif avg_value < descriptor.error_value:
                color = "orange"
                symbol = ":material/warning:"
            else:
                color = "red"
                symbol = ":material/error:"
        st.markdown(f"#### :{color}-background[{symbol} {descriptor.name}]", help=descriptor.description)
    else:
        st.markdown(f"#### {descriptor.name}", help=descriptor.description)


def descriptor_tiles(descriptors_df: pd.DataFrame, descriptors: List[Descriptor]):
    N_COLS_ROW = min(3, len(descriptors))
    cols = st.columns(N_COLS_ROW)
    for i, descriptor in enumerate(descriptors):
        col_idx = i % N_COLS_ROW
        with cols[col_idx]:
            with st.container(border=True, height=400):
                if (descriptor.tool, descriptor.name) not in descriptors_df.columns:
                    st.markdown(f"#### {descriptor.name}", help=descriptor.description)
                    st.warning("Not available")
                    continue
                descriptor_values = descriptors_df[(descriptor.tool, descriptor.name)]
                if isinstance(descriptor, NumericGlobalDescriptor):
                    descriptor_values = pd.to_numeric(descriptor_values, errors="coerce")

                nonnull_descriptor_values = descriptor_values.dropna().tolist()

                write_tile_title(descriptor, nonnull_descriptor_values)

                if not nonnull_descriptor_values:
                    st.warning("Not available")
                    continue

                if len(descriptor_values) > len(nonnull_descriptor_values):
                    perc_missing = (1 - len(nonnull_descriptor_values) / len(descriptor_values)) * 100
                    st.markdown(
                        ":orange-background[:material/warning:]",
                        help=f"This descriptor is missing for **{perc_missing:.2f}%** of selected designs.",
                    )

                if isinstance(descriptor, CategoricalResidueDescriptor):
                    top_n = 10
                    st.write(f"Top {top_n} most common values")
                    counts_df = pd.Series(nonnull_descriptor_values).value_counts().head(top_n).reset_index()
                    counts_df.columns = [descriptor.name, "Count"]
                    st.dataframe(
                        counts_df,
                        column_config={
                            descriptor.name: st.column_config.Column(descriptor.name),
                            "Count": st.column_config.ProgressColumn(
                                "Count",
                                format="%d",
                                min_value=0,
                                max_value=max(1, int(counts_df["Count"].max())),
                            ),
                        },
                        hide_index=True,
                        width="stretch",
                        height=200,
                    )
                elif isinstance(descriptor, NumericGlobalDescriptor):
                    avg_value = np.mean(nonnull_descriptor_values)
                    st.metric(f"Average {descriptor.name}", format_threshold_value(descriptor.name, avg_value))

                    if descriptor.key in HISTOGRAMS:
                        thresholds, reverse_colors, color_by = get_descriptor_plot_setting(descriptor)
                        fig = descriptor_histograms(
                            histograms=HISTOGRAMS,
                            descriptor_name=descriptor.key,
                            color_by=color_by,
                            thresholds=thresholds,
                            reverse_colors=reverse_colors,
                            histogram_source="all",
                            values=nonnull_descriptor_values,
                            precomputed_histogram_height=40,
                            pool_histogram_height=20,
                        )
                    else:
                        fig = (
                            get_histogram_alt(nonnull_descriptor_values)
                            .properties(height=140)
                            .configure_axis(grid=False)
                        )

                    st.altair_chart(fig, use_container_width=True)

                # Support for ResidueNumberDescriptor
                elif isinstance(descriptor, ResidueNumberDescriptor):
                    residue_df = get_residue_presence_df(descriptor, nonnull_descriptor_values, descriptors_df.shape[0])
                    if residue_df is None or residue_df.empty:
                        st.warning("No residue data available.")
                    else:
                        st.dataframe(
                            residue_df,
                            column_config={
                                descriptor.name: st.column_config.Column(descriptor.name),
                                "% of designs": st.column_config.ProgressColumn(
                                    "% of designs",
                                    format="%.1f%%",
                                    min_value=0,
                                    max_value=100,
                                    help="Percentage of designs in which the residue is present",
                                ),
                            },
                            hide_index=True,
                            width="stretch",
                            height=200,
                        )
                else:
                    st.info("Visualization for this type of descriptor coming soon")
                detail_button(descriptor, descriptor_values)
