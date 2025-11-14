from cmap import Colormap
from ovo.core.utils.formatting import get_hash_of_bytes


def get_color_from_str(value: str, colormap_name: str) -> str:
    # Colormaps: https://cmap-docs.readthedocs.io/en/latest/catalog/
    cmap = Colormap(colormap_name)

    hash_str = get_hash_of_bytes(value.encode())

    # get number between 0.0-1.0
    hash_number = (int(hash_str[:5], 16) % 1000) / 1000

    return cmap(hash_number).hex.replace("#", "0x").lower()
