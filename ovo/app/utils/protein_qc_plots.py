import os

import streamlit as st
from typing import Dict, List
import json
import pandas as pd
import numpy as np
import altair as alt


@st.cache_data()
def load_histograms() -> Dict[str, Dict[str, Dict[str, List[float]]]]:
    """
    Load precomputed PDB histograms for all tools.
    The histograms are computed for the data between 1st and 99th percentile.

    Returns:
    {'descriptor': {'all': {'x': [0, 1, 2, ...], 'y': [0.1, 0.2, ...]}, 'non-human_only': ..., 'human_only': ..., 'human+non-human}, ...}}}}
    x - bin edges
    y - bin heights
    """
    histograms = {}
    for toolname in [
        "esm_1v",
        "esm_if",
        "proteinsol",
        "sequence_composition",
        "protparams",
        "dssp",
        "length",
        "mdanalysis",
        "peppatch",
    ]:
        data = load_plots_data(f"histograms/pdb/{toolname}_q01_q99.json")
        histograms.update({f"proteinqc|{key}": value for key, value in data.items()})
    return histograms


def load_plots_data(file_path: str) -> dict:
    ovo_resources_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "resources"))
    with open(os.path.join(ovo_resources_path, file_path), "r") as f:
        data = json.load(f)
    return data


@st.cache_data
def get_precomputed_histogram_alt(
    bins: np.ndarray,
    y: np.ndarray,
    color_by: str = "density",
    thresholds: List[float] = None,
    reverse_colors: bool = False,
    width: int = None,
    height: int = None,
    title: str = None,
) -> alt.Chart:
    """
    Create Altair histogram from precomputed data.

    Args:
    bins: bin edges in the precomputed histograms
    y: bin heights in the precomputed histograms
    descriptor: descriptor name in the precomputed histograms
    color_by: 'density', 'thresholds' or use green otherwise
    thresholds: list of thresholds for color_by='thresholds'
    reverse_colors: reverse the color scale
    width: width of the chart
    title: title of the chart
    """

    # Create DataFrame for Altair
    bin_centers = bins[:-1] + np.diff(bins) / 2
    total_height_sum = np.sum(y)  # Sum of heights for normalization
    data = pd.DataFrame(
        {
            "bin_center": bin_centers,
            "height": y,
            "normalized_height": y / total_height_sum,  # Normalized for color mapping
        }
    )

    if color_by == "density":
        color = alt.Color(
            "normalized_height:Q", scale=alt.Scale(scheme="redyellowgreen", reverse=False), title="Density", legend=None
        )
    elif color_by == "thresholds" and thresholds:
        color = alt.Color(
            "bin_center:Q",
            scale=alt.Scale(scheme="redyellowgreen", domain=thresholds, reverse=reverse_colors),
            title="Density",
            legend=None,
        )
    else:
        color = alt.value("#64bc61")

    # Create Altair chart
    chart = (
        alt.Chart(data)
        .mark_bar()
        .encode(
            x=alt.X("bin_center:Q", title=None),
            y=alt.Y(
                "normalized_height:Q", axis=alt.Axis(title="Reference", labels=False, ticks=False, domain=False)
            ),  # Hide y axis label and ticks
            color=color,
            tooltip=["bin_center"],
        )
    )

    # chart = chart.configure_axis(grid=False) # NOTE: If combining plots using vconcat, this cannot be used

    if title:
        chart = chart.properties(title=title)

    if width:
        chart = chart.properties(width=width)

    if width:
        chart = chart.properties(height=height)

    return chart


def update_bins(values: List[float], source_bins: List[float]) -> List[float]:
    """
    Given bins for a histogram and a list of values, extend the bins if the values are outside the range of the bins.
    """

    bin_width = np.diff(source_bins[:2])[0]

    # start with the same bins
    bins = source_bins.copy()

    min_bin = source_bins[0]
    max_bin = source_bins[-1]

    # If the second distribution has a wider range, extend the bins
    if (min_value := np.min(values)) < min_bin:
        # Create extra bins on the left
        extra_left = np.arange(min_value, min_bin, bin_width)
        bins = np.concatenate([extra_left, bins])

    if (max_value := np.max(values)) > max_bin:
        # Create extra bins on the right
        extra_right = np.arange(max_bin + bin_width, max_value + bin_width, bin_width)
        bins = np.concatenate([bins, extra_right])

    return bins


def get_histogram_alt(
    values: List[float], bins: List[float] = None, width: int = None, color: str = "black", title: str = None
) -> alt.Chart:
    """
    Create Altair histogram from values.
    If bins are provided, the bins are used and extended if the values are outside the range of the bins.
    """

    if bins is None:
        bins = np.linspace(np.min(values), np.max(values), 50)
    else:
        # Extend the bins if the values are outside the range of the bins
        bins = update_bins(values, bins)

    # Compute histogram
    histogram, _ = np.histogram(values, bins)

    # Create DataFrame for Altair
    bin_centers = bins[:-1] + np.diff(bins) / 2
    data = pd.DataFrame(
        {
            "bin_center": bin_centers,
            "height": histogram,
        }
    )

    # Create Altair chart
    chart = (
        alt.Chart(data)
        .mark_bar()
        .encode(
            x=alt.X("bin_center:Q", title=None),
            y=alt.Y(
                "height:Q", axis=alt.Axis(title="Designs", labels=False, ticks=False, domain=False)
            ),  # Hide y axis label and ticks
            tooltip=["bin_center"],
            color=alt.value(color),
        )
    )

    # chart = chart.configure_axis(grid=False) # NOTE: If combining plots using vconcat, this cannot be used

    # Add title
    if title:
        chart = chart.properties(title=title)

    # Set width
    if width:
        chart = chart.properties(width=width)

    return chart


def combine_histograms(histogram1: alt.Chart, histogram2: alt.Chart, how: str, title=None) -> alt.Chart:
    """
    Vertically stack or overlay two histograms sharing the x-axis.
    """

    if how == "overlay":
        chart = histogram1 + histogram2
    elif how == "stack":
        chart = alt.vconcat(histogram1, histogram2)
    else:
        raise ValueError(f"Invalid value for 'how': {how}")

    chart = chart.resolve_legend(color="independent")
    chart = chart.resolve_scale(
        x="shared",  # Share the x-axis scale between the two histograms
        y="independent",  # Independent y-axis to scale correctly
    )

    # Hide the grid
    chart = chart.configure_axis(grid=False)

    if title:
        chart = chart.properties(title=title)

    return chart


def descriptor_histograms(
    histograms: dict,
    descriptor_name: str,
    histogram_source: str,
    color_by: str,
    thresholds: List[float],
    reverse_colors: bool,
    values: List[float],
    precomputed_histogram_height: int = 250,
    pool_histogram_height: int = 100,
    overlay: bool = False,
):
    """
    Create a combined histogram plot for a descriptor. The top histogram is the precomputed histogram and the bottom histogram is the pool histogram from the passed values.

    Parameters:
    histograms (dict): Precomputed histograms
    descriptor_name (str): Name of the descriptor
    histogram_source (str): Source of the histogram
    color_by (str): Color by 'density' or 'thresholds'
    thresholds (List[float]): Thresholds for color mapping
    reverse_colors (bool): Reverse the color mapping
    values (List[float]): Values for the pool/selected designs histogram
    precomputed_histogram_height (int): Height of the precomputed histogram
    pool_histogram_height (int): Height of the pool histogram
    """
    if descriptor_name not in histograms:
        st.error(f"Reference distribution not available for **{descriptor_name}**")
        bins = None
        fig1 = None
    else:
        data = histograms[descriptor_name][histogram_source]
        bins = data["x"]

        # Precomputed histogram
        fig1 = get_precomputed_histogram_alt(
            bins=bins,
            y=data["y"],
            color_by=color_by,
            thresholds=thresholds,
            reverse_colors=reverse_colors,
            height=precomputed_histogram_height,
            width=800,
        )

    # Pool histogram
    fig2 = get_histogram_alt(
        values=values,
        bins=bins,
    ).properties(height=pool_histogram_height)

    if not fig1:
        # Return only the pool histogram
        return fig2.properties(height=pool_histogram_height + 50).configure_axis(grid=False)
    elif overlay:
        # Overlay the two histograms
        return combine_histograms(fig1, fig2, how="overlay")
    # Stack the two histograms
    return combine_histograms(fig1, fig2, how="stack")


@st.cache_data
def format_threshold_value(descriptor_name: str, value) -> str:
    """
    Format the threshold values for display.

    If the descriptor is a percentage (0-1), multiply by 100 and add a percentage sign.
    If the descriptor is 'Sequence length', round to the nearest integer.
    Otherwise, round to two decimal places.
    """
    if not value:
        return
    if "%" in descriptor_name:
        return f"{value:.2f} %"
    elif descriptor_name == "Sequence length":
        return f"{value:.0f}"
    else:
        return f"{value:.2f}"
