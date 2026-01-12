import { ColorListName } from "molstar/lib/mol-util/color/lists";

export type ContigSegment = {
    value: string;
    type: "fixed" | "generated";
    length: number;
    color: string;
    input_res_start: number;
    input_res_end: number;
    input_res_chain: string;
    out_res_start: number;
    out_res_end: number;
    out_res_chain: string;
};

export type SequenceSelection = {
    chainId: string;
    residues: number[];
};

export type StreamlitComponentValue = {
    sequenceSelections: SequenceSelection[];
};

export type ChainVisualization = {
    chain_id: string;
    color: "uniform" | "chain-id" | "hydrophobicity" | "plddt" | "molecule-type" | "secondary-structure" | "residue-name" | "residue-charge";
    color_params: ColorParameters | null;
    representation_type: "cartoon" | "molecular-surface" | "gaussian-surface" | "ball-and-stick";
    residues: number[] | null;
    label: string | null;
};

export type StructureVisualization = {
    pdb: string;
    contigs: string | null;
    color: "uniform" | "chain-id" | "hydrophobicity" | "plddt" | "molecule-type" | "secondary-structure" | "residue-name" | "residue-charge";
    color_params: ColorParameters | null;
    representation_type: "cartoon" | "molecular-surface" | "gaussian-surface" | "ball-and-stick";
    highlighted_selections: string[] | null;
    chains: ChainVisualization[] | null;
};

export type ColorParameters = {
    value: string | null;
    palette: ColorListName | null;
};
