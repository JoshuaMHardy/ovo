import streamlit as st
import pandas as pd
from typing import List, Collection
from cmap import Colormap

from ovo.core.database.models import Descriptor, NumericGlobalDescriptor, ResidueNumberDescriptor
from ovo.core.logic.proteinqc_logic import get_descriptor_cmap


@st.cache_data(hash_funcs={Descriptor: lambda obj: (obj.key)})
def get_descriptor_column_config(descriptor: Descriptor):
    """
    Create a streamlit column_config for a more readable dataframe (labels, help, formatting,...)
    """
    if not isinstance(descriptor, NumericGlobalDescriptor):
        return st.column_config.TextColumn(
            label=descriptor.name, help=f"**{descriptor.name}**: {descriptor.description}", width="small"
        )
    if descriptor.name == "Sequence length":
        format = "%.0f"
    elif "%" in descriptor.name:
        format = "%.2f %%"
    else:
        format = "%.2f"
    return st.column_config.NumberColumn(
        label=descriptor.name, help=f"**{descriptor.name}**: {descriptor.description}", format=format, width="small"
    )


def get_residue_number_column_config(
    descriptor: Descriptor, unique_values: Collection, cmap_name: str = "seaborn:tab10_light", n_colors: int = 10
):
    if isinstance(descriptor, ResidueNumberDescriptor):
        cmap = Colormap(cmap_name)
        colors = list(color.hex for color in cmap.iter_colors(n_colors))
        return st.column_config.MultiselectColumn(
            label=descriptor.name,
            help=f"**{descriptor.name}**: {descriptor.description}",
            width="small",
            options=unique_values,
            color=colors,
        )
    return None


def make_bg_color_func(descriptor, min_val, max_val):
    cmap = get_descriptor_cmap(descriptor, min_val, max_val)

    def color_func(val):
        if pd.isna(val):
            return ""
        return f"background-color: {cmap(val)}"

    return color_func


@st.fragment()
def descriptor_table(design_ids: List[str], descriptors_df: pd.DataFrame, descriptors: List[Descriptor]):
    # Select only columns for the selected descriptors
    assert descriptors_df.columns.nlevels == 2, "Expected nested=True table with 2 levels (tool name, descriptor name)"
    assert len(set(d.key for d in descriptors)) == len(descriptors), (
        f"Duplicate descriptors found in list: {[d.key for d in descriptors]}"
    )
    sequence_cols = [col for col in descriptors_df.columns if col[0] == "Sequence"]
    selected_df = descriptors_df[sequence_cols + [(descriptor.tool, descriptor.name) for descriptor in descriptors]]
    if not design_ids:
        st.warning("No designs found")
        return
    styles = {}
    column_config = {}

    # When using positional column indices for column config, 0 refers to the first index column
    col_offset = selected_df.index.nlevels

    for descriptor in descriptors:
        col = (descriptor.tool, descriptor.name)
        if col not in selected_df.columns:
            continue
        col_idx = selected_df.columns.get_loc(col) + col_offset
        if isinstance(descriptor, NumericGlobalDescriptor):
            min_val, max_val = selected_df[col].agg(["min", "max"])
        else:
            min_val, max_val = None, None
        styles[col] = selected_df[col].map(make_bg_color_func(descriptor, min_val, max_val))
        if isinstance(descriptor, ResidueNumberDescriptor):
            unique_values = set(x.strip() for row in descriptors_df[col].dropna() for x in row.split(","))
            column_config[col_idx] = get_residue_number_column_config(descriptor, unique_values)
        else:
            column_config[col_idx] = get_descriptor_column_config(descriptor)

    # Combine styles into a DataFrame
    style_df = pd.DataFrame(styles)
    styled_df = selected_df.style.apply(lambda _: style_df, axis=None)

    st.dataframe(styled_df, column_config=column_config, key="descriptor_table")
