import { ContigPartInfo } from "./types";
import React from "react";

interface Props {
    isGeneratedSegment: (contig: string) => boolean;
    index: number;
    contigParts: ContigPartInfo[];
    handleAddContigPart: (index: number) => void;
    upperButton: boolean;
    generatedSegmentConnection: (index: number, generatedSegmentMissing: boolean, content: string) => string | JSX.Element;
}

function AddSegmentButton(props: Props) {

    const spanText = (props.index + 1 >= props.contigParts.length) ? "C-term generated segment" : props.generatedSegmentConnection(props.index, true, "");
    let spanColor;

    if (typeof spanText === "string" && spanText.toLowerCase().includes("invalid")) {
        spanColor = "red";
    } else if (props.index + 1 >= props.contigParts.length) {
        spanColor = "inherit";
    } else {
        spanColor = "orange";
    }

    return (
        <>
            {/* special treatment for the first button */}
            {props.upperButton &&
                (!props.isGeneratedSegment(props.contigParts[props.index]?.content)) &&
                <div className="contigRowContainer">
                    <div className="contigRowColumn1">
                        <button onClick={() => props.handleAddContigPart(0)} className="add-button">+</button>
                    </div>

                    <div className="contigRowColumn2">
                        N-term generated segment
                    </div>
                </div>
            }

            {(!props.upperButton && props.index !== undefined && props.index < props.contigParts.length) &&
                (!props.isGeneratedSegment(props.contigParts[props.index]?.content) && !props.isGeneratedSegment(props.contigParts[props.index + 1]?.content)) &&
                <div className="contigRowContainer">
                    <div className="contigRowColumn1">
                        <button onClick={() => props.handleAddContigPart(props.index + 1)} className="add-button">+</button>
                    </div>

                    <div className="contigRowColumn2">
                        <span style={{ color: spanColor }}>
                            {spanText}
                        </span>
                    </div>
                </div>
            }
        </>
    );
}

export default AddSegmentButton;