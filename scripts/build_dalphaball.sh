#!/bin/bash
# Script to build DAlphaBall for OVO (local conda users)
# DAlphaBall provides rotation-invariant SASA calculations for PyRosetta BuriedUnsatHbonds filter
#
# Note: Container users don't need this - DAlphaBall is included in the PyRosetta container.
#
# Usage:
#   ./scripts/build_dalphaball.sh [install_dir]
#
# If install_dir is not provided, installs to $OVO_HOME/bin/

set -euo pipefail

INSTALL_DIR="${1:-${OVO_HOME:-$HOME/ovo}/bin}"
DALPHABALL_URL="https://github.com/outpace-bio/DAlphaBall.git"
TEMP_DIR=$(mktemp -d)

echo "═══════════════════════════════════════════════════════"
echo "Building DAlphaBall for OVO"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "Note: This is only needed for local conda users."
echo "      Container users (Apptainer/Singularity/Docker) already have"
echo "      DAlphaBall included in the PyRosetta container."
echo ""
echo "This script will:"
echo "  1. Clone DAlphaBall source"
echo "  2. Compile DAlphaBall"
echo "  3. Install to: $INSTALL_DIR"
echo ""

# Check for required tools
for cmd in git make gcc gfortran; do
    if ! command -v $cmd &> /dev/null; then
        echo "Error: $cmd is not installed"
        echo "Please install build tools:"
        echo "  - On Ubuntu/Debian: sudo apt-get install build-essential gfortran libgmp-dev"
        echo "  - On macOS: xcode-select --install && brew install gcc gmp"
        echo "  - With conda: conda install -c conda-forge gxx gfortran gmp"
        exit 1
    fi
done

echo "Cloning DAlphaBall source..."
cd "$TEMP_DIR"
git clone --depth 1 "$DALPHABALL_URL"
cd DAlphaBall/src

echo ""
echo "Compiling DAlphaBall..."

# Set compiler environment variables (Makefile expects these)
export FC=gfortran
export CC=gcc

make

EXECUTABLE="DAlphaBall.gcc"
if [ ! -f "$EXECUTABLE" ]; then
    echo "Error: Compilation failed - $EXECUTABLE not found"
    exit 1
fi

echo ""
echo "Installing DAlphaBall to $INSTALL_DIR..."
mkdir -p "$INSTALL_DIR"
cp "$EXECUTABLE" "$INSTALL_DIR/"
chmod +x "$INSTALL_DIR/$EXECUTABLE"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "✓ DAlphaBall built successfully!"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "Location: $INSTALL_DIR/$EXECUTABLE"
echo ""
echo "DAlphaBall will be automatically detected by OVO."
echo ""

# Cleanup
rm -rf "$TEMP_DIR"
