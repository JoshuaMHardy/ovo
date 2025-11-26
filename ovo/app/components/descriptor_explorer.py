import streamlit as st
import numpy as np
from dataclasses import dataclass
import pandas as pd
from typing import Dict

from ovo.core.database.models import Descriptor
from ovo.core.logic.proteinqc_logic import get_descriptor_plot_setting

from ovo.app.components.descriptor_scatterplot import format_descriptor_name
from ovo.app.utils.cached_db import get_cached_descriptor_values
from ovo.app.utils.protein_qc_plots import (
    load_histograms,
    format_threshold_value,
    descriptor_histograms,
    get_histogram_alt,
)


COLOR_BY_OPTIONS = ["density", "thresholds", "None"]
SOURCE_OPTIONS = [
    "all",
    "non-human_only",
    "human_only",
    "human+non-human",
    "short (<=100)",
    "medium (101-300)",
    "long (301-1000)",
    "very long (>1000)",
]


@dataclass
class HistogramSettings:
    descriptor: Descriptor | None = None
    source: str | None = None
    color_by: str | None = None

    @classmethod
    def from_query_params(cls, descriptors_by_key: dict[str, Descriptor], key_prefix: str):
        return cls(
            descriptor=descriptors_by_key[st.query_params[f"{key_prefix}_descriptor"]]
            if f"{key_prefix}_descriptor" in st.query_params and f"{key_prefix}_descriptor" in descriptors_by_key
            else None,
            source=st.query_params[f"{key_prefix}_source"] if f"{key_prefix}_source" in st.query_params else None,
            color_by=st.query_params[f"{key_prefix}_color_by"] if f"{key_prefix}_color_by" in st.query_params else None,
        )

    def update_query_params(self, key_prefix: str):
        for field in ["descriptor", "source", "color_by"]:
            if value := getattr(self, field):
                st.query_params[f"{key_prefix}_{field}"] = value.key if field == "descriptor" else value
            else:
                st.query_params.pop(f"{key_prefix}_{field}", None)


@st.fragment()
def descriptor_explorer(
    descriptors_df: pd.DataFrame, descriptors_by_key: Dict[str, Descriptor], single_design: bool = False
):
    if descriptors_df.empty:
        st.warning("No designs found")
        return

    if not descriptors_by_key:
        st.warning("No descriptors found for the selected designs.")
        return
    pdb_histograms = load_histograms()

    key_prefix = "design_expl" if single_design else "descriptor_expl"

    settings = HistogramSettings.from_query_params(descriptors_by_key, key_prefix)

    descriptor_col, color_col, source_col = st.columns(3)

    # Select the descriptor to plot
    descriptor_options = list(descriptors_by_key.keys())
    with descriptor_col:
        descriptor = st.selectbox(
            "Descriptor",
            format_func=lambda descriptor_key: format_descriptor_name(descriptors_by_key[descriptor_key]),
            index=descriptor_options.index(settings.descriptor.key) if settings.descriptor is not None else 0,
            key=f"{key_prefix}_descriptor",
            options=descriptor_options,
            # force_change=preset_changed,
        )
        settings.descriptor = descriptors_by_key.get(descriptor)

    with color_col:
        color_by = st.selectbox(
            label="Color by",
            format_func=lambda option: option.capitalize(),
            index=COLOR_BY_OPTIONS.index(settings.color_by) if settings.color_by else 0,
            key=f"{key_prefix}_color_by",
            options=COLOR_BY_OPTIONS,
        )
        settings.color_by = color_by

    with source_col:
        source_options = SOURCE_OPTIONS.copy()
        if settings.descriptor and settings.descriptor.tool == "ESM-1v":
            # Max length for ESM-1v is 1024 so remove the very long option
            # TODO: Compute the distribution using window-based approach
            source_options.remove("very long (>1000)")
        source = st.selectbox(
            label="Source",
            format_func=lambda option: f"PDB ({option.replace('_', ' ')})",
            help="""
    Select the background distribution to compare the pool/selection distribution to.  
    The **"all"** option includes all PDB structures.  
    The **"non-human only"** option includes only non-human proteins.  
    The **"human only"** option includes only human proteins.  
    The **"human+non-human"** option includes proteins from human+non-human complexes.  
    The **"short"** (≤100), **"medium"** (101-300), **"long"** (301-1000), and **"very long"** (>1000) options include proteins with the corresponding sequence length.""",
            index=SOURCE_OPTIONS.index(settings.source) if settings.source else 0,
            key=f"{key_prefix}_source",
            options=SOURCE_OPTIONS,
        )
        settings.source = source

    if not settings.descriptor:
        st.warning("Please select a descriptor to plot.")
        return

    settings.update_query_params(key_prefix)
    descriptor_values = descriptors_df[(settings.descriptor.tool, settings.descriptor.name)]
    nonnull_descriptor_values = descriptor_values.dropna().tolist()

    # Write the descriptor description and thresholds
    st.write(f"*{settings.descriptor.description}*")

    if single_design:
        avg_col, warning_col, error_col = st.columns(3)
    else:
        avg_col, median_col, warning_col, error_col = st.columns(4)

    # If there are missing values, show warning message that the distribution is only for the non-missing values
    if len(descriptor_values) > len(nonnull_descriptor_values):
        perc_missing = (1 - len(nonnull_descriptor_values) / len(descriptor_values)) * 100
        st.warning(
            f"This descriptor is missing for **{perc_missing:.2f}%** of designs. The distribution was calculated from designs with non-missing values. You can submit **full ProteinQC** to calculate the descriptor for all designs.",
            icon=":material/warning:",
        )
    with avg_col:
        avg_value = np.mean(descriptor_values)
        avg_value = format_threshold_value(settings.descriptor.name, avg_value)
        label = (
            "" if single_design else "Average "
        ) + settings.descriptor.name  # f'Average {settings.descriptor.name}'
        st.metric(label, avg_value)
    if not single_design:
        with median_col:
            median_value = np.median(descriptor_values)
            median_value = format_threshold_value(settings.descriptor.name, median_value)
            st.metric(f"Median {settings.descriptor.name}", median_value)
    with warning_col:
        warning_value = format_threshold_value(settings.descriptor.name, settings.descriptor.warning_value)
        st.metric("Warning threshold", warning_value)
    with error_col:
        error_value = format_threshold_value(settings.descriptor.name, settings.descriptor.error_value)
        st.metric("Error threshold", error_value)

    if settings.descriptor.key not in pdb_histograms:
        st.warning("No background distribution available for this descriptor.", icon=":material/warning:")
        fig = get_histogram_alt(values=descriptor_values).properties(height=350, width=800).configure_axis(grid=False)
    else:
        thresholds, reverse_colors, _ = get_descriptor_plot_setting(settings.descriptor)

        overlay = single_design
        fig = descriptor_histograms(
            histograms=pdb_histograms,
            descriptor_name=settings.descriptor.key,
            histogram_source=settings.source,
            color_by=settings.color_by,
            thresholds=thresholds,
            reverse_colors=reverse_colors,
            values=descriptor_values,
            precomputed_histogram_height=350 if overlay else 250,
            pool_histogram_height=350 if overlay else 100,
            overlay=overlay,
        )

    st.altair_chart(
        fig,
        width="stretch" if single_design else "content",
        key=f"descriptor_histogram_{key_prefix}",
    )
