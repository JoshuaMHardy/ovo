# RFdiffusion binder diversification step by step

This workflow enables starting from an existing binder-target complex, generating 
similar binder backbones and designing their sequences. 
It implements the end-to-end [RFdiffusion](https://github.com/RosettaCommons/RFdiffusion) partial diffusion
protocol where noise is added to the backbone of an existing binder chain.

Use cases:
- Generate binders with improved computational success rate, starting from a computationally successful design.
- Generate binders with improved specificity and affinity for a target protein, using an existing binder as starting point.
- Generate binders with altered specificity by starting from a binder–homolog complex (same family) with the target swapped for homolog.

## 1. Prerequisites

Before you proceed, make sure to install OVO by following [OVO Installation](../user_guide/installation.md)
and set up RFdiffusion as described in [RFdiffusion Quickstart](quickstart.md).

## 2. Input structure

TODO

Next: [ProteinQC Quickstart](../proteinqc/quickstart.md)
