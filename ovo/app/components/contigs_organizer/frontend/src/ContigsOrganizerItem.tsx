import React from "react";
import AddSegmentButton from "./AddSegmentButton";
import ContigPart from "./ContigPart";
import { SortableList } from "./components/SortableList/SortableList";
import "./assets/style.css";
import { ContigPartInfo } from "./types";

interface Props {
    idx: number | undefined;
    item: ContigPartInfo;
    contigParts: ContigPartInfo[];
    isGeneratedSegment: (contig: string) => boolean;
    handleAddContigPart: (index: number) => void;
    generatedSegmentConnection: (index: number, generatedSegmentMissing: boolean, content: string) => string | JSX.Element;
    getFixedSegmentDescription: (contig: string) => string;
    updateContigPart: (index: number, newContent: string | null) => void;
    getColor: (item: ContigPartInfo) => string;
}

function ContigsOrganizerItem(props: Props) {
    const { idx, isGeneratedSegment, contigParts, handleAddContigPart, generatedSegmentConnection, item, getFixedSegmentDescription, updateContigPart, getColor } = props;

    const spanText = isGeneratedSegment(item.content) ? generatedSegmentConnection(idx!, false, item.content) : getFixedSegmentDescription(item.content);
    let spanColor = "inherit";
    if (typeof spanText === "string" && spanText.toLowerCase().includes("invalid")) spanColor = "red";

    // This component renders both the "add segment" buttons as well as the draggable components.
    return <>
        {/* this will get rendered only for the top element */}
        {props.idx === 0 && <AddSegmentButton index={props.idx} handleAddContigPart={handleAddContigPart}
            contigParts={contigParts} isGeneratedSegment={isGeneratedSegment} upperButton={true}
            generatedSegmentConnection={generatedSegmentConnection}
        />}

        <div className="contigRowContainer">
            <div className="contigRowColumn1" style={{ display: "block" }}>
                <SortableList.Item id={item.id} color={getColor(item)}>
                    <ContigPart contigPart={item.content} index={idx!} updateContigPart={updateContigPart} />
                    {!isGeneratedSegment(item.content) && <SortableList.DragHandle />}
                </SortableList.Item>
            </div>
            {idx !== undefined && (
                <div className="contigRowColumn2">
                    <span style={{ color: spanColor }}>
                        {spanText}
                    </span>
                </div>
            )}
        </div>

        {(idx !== undefined && idx < contigParts.length) &&
            <AddSegmentButton index={idx!} handleAddContigPart={handleAddContigPart}
                contigParts={contigParts} isGeneratedSegment={isGeneratedSegment} upperButton={false}
                generatedSegmentConnection={generatedSegmentConnection}
            />
        }
    </>;
}

export default ContigsOrganizerItem;
