# RFdiffusion scaffold design step by step

This workflow enables designing a new protein structure that supports fixed segments (*motifs*) from an existing structure. 
It implements and extends the end-to-end workflow for motif scaffolding from [RFdiffusion](https://github.com/RosettaCommons/RFdiffusion).

Possible use cases include:

- Scaffolding a new enzyme around a defined active-site geometry
- Truncating a region of a protein formed from multiple discontinuous regions of the sequence
- Designing a new scaffold that stabilizes that fixed region and enhances solubility (e.g. by removing an unwanted hydrophobic interface)

## 1. Prerequisites

Before you proceed, make sure to install OVO by following [OVO Installation](../user_guide/installation.md)
and set up RFdiffusion as described in [RFdiffusion Quickstart](quickstart.md).

## 2. Input structure

TODO

Next: [RFdiffusion Binder Design](binder_design.md)
