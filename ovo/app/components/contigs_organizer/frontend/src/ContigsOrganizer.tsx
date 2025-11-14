import React, { useState, useEffect, useRef } from "react";
import { Streamlit } from "streamlit-component-lib";
import "./assets/style.css";
import { SortableList } from "./components/SortableList/SortableList";
import { ContigPartInfo, CoordinateData, StreamlitComponentValue } from "./types";
import { PdbParser } from 'pdb-parser-js';
import { AminoAcids, getRange, calculateDistances, isGeneratedSegment, parseFixedSegment } from "./utils";
import ContigsOrganizerItem from "./ContigsOrganizerItem";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    contigs: string;
    pdb: string;
    colors: Map<string, string>;
    updateStreamlitComponentValue: (value: StreamlitComponentValue) => void;
}

function ContigsOrganizer(props: Props) {

    const [contigParts, setContigParts] = useState<ContigPartInfo[]>();
    const [parsedPdb, setParsedPdb] = useState<CoordinateData[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    const distancesMap = useRef(new Map<string, number>());
    const residuesMap = useRef(new Map<string, string>());

    //#region Contigs handling
    useEffect(() => {
        const parts = props.contigs.split("/").map(part => ({
            id: uuidv4(),
            content: part,
        }));
        setContigParts(parts);

        // Parse the PDB, so we might compute distances between residues etc.
        if (parsedPdb.length === 0) {
            const parser = new PdbParser();
            parser.collect(props.pdb.split('\n'));

            const pdb = parser.parse();
            const parsedPdb = pdb.coordinate.atoms.map((e) => e.data);
            setParsedPdb(parsedPdb);
            const distances = calculateDistances(parts, parsedPdb);
            distances.forEach(dist => distancesMap.current.set(dist.segment, dist.result));
        }

    }, [props.contigs]);

    const segmentsPostprocessing = (segments: ContigPartInfo[], coordinateData: CoordinateData[]) => {
        const result = [...segments];

        for (let i = 0; i < result.length - 1; i++) {
            // Check if there are two generated segments next to each other
            if (isGeneratedSegment(result[i].content) && isGeneratedSegment(result[i + 1].content)) {
                result.splice(i, 1);
                i--;
            }
        }

        // Also, update the distances between residues.
        const distances = calculateDistances(segments, coordinateData);
        distances.forEach(dist => distancesMap.current.set(dist.segment, dist.result));

        return result;
    };

    const handleAddContigPart = (index: number) => {
        const newContigPart = { id: uuidv4(), content: "" };
        setContigParts(prev => {
            const newParts = [...(prev || [])];
            newParts.splice(index, 0, newContigPart);
            return segmentsPostprocessing(newParts, parsedPdb);
        });
    };

    const updateContigPart = (index: number, newContent: string | null) => {
        setContigParts(prev => {
            const updatedParts = [...(prev || [])];
            if (newContent === null) {
                // delete the part
                updatedParts.splice(index, 1);
            } else {
                updatedParts[index].content = newContent;
            }

            return segmentsPostprocessing(updatedParts, parsedPdb);
        });
    };

    const getColor = (item: ContigPartInfo) => {
        if (props.colors.has(item.content)) {
            return props.colors.get(item.content)!;
        }

        return "#6d6d6d";
    };

    const handleContigsChange = (items: ContigPartInfo[]) => {
        setContigParts(segmentsPostprocessing(items, parsedPdb));
    };

    const generatedSegmentConnection = (index: number, generatedSegmentMissing: boolean, content: string) => {
        if (contigParts === undefined) {
            // should never happen, just for type checking
            return "";
        }
        if (!generatedSegmentMissing && index === 0) {
            return "N-term generated segment";
        }
        if (!generatedSegmentMissing && index === contigParts.length - 1) {
            return "C-term generated segment";
        }

        // case where the generated segment is not present in the contigParts yet
        let firstSegmentIdx = index;
        let secondSegmentIdx = index + 1;

        if (!generatedSegmentMissing) {
            firstSegmentIdx = index - 1;
        }

        const firstSegment = contigParts[firstSegmentIdx].content;
        const secondSegment = contigParts[secondSegmentIdx].content;

        if (isGeneratedSegment(firstSegment) || isGeneratedSegment(secondSegment)) {
            return ``;
        }

        const segment1 = parseFixedSegment(firstSegment);
        const segment2 = parseFixedSegment(secondSegment);

        if (!segment1) {
            console.error("Failed parsing distances for this segment: " + contigParts[firstSegmentIdx].content);
            return `Invalid connected fixed segment ${contigParts[firstSegmentIdx].content}. Please, change it.`;
        }

        if (!segment2) {
            console.error("Failed parsing distances for this segment: " + contigParts[index + 1].content);
            return `Invalid connected fixed segment ${contigParts[index + 1].content}. Please, change it.`;
        }

        const segmentsDistance = distancesMap.current.get(`${segment1.chainId}${segment1.lastIndex}_${segment2.chainId}${segment2.firstIndex}`)?.toFixed(1) ?? "?";

        if (generatedSegmentMissing || !content) {
            return `Please add a segment connecting ${segment1.chainId}${segment1.lastIndex} -> ${segment2.chainId}${segment2.firstIndex} (${segmentsDistance} Å)`;
        }

        const groups = content.match(/^[A-Z]?([0-9]+)(-([0-9]+))?$/);
        if (groups) {
            if (parseInt(groups[1]) > parseInt(groups[3] || groups[1])) {
                return "Invalid range (start > end)";
            }
        } else {
            return "Invalid format, expected: 10, 10-20, or A10-20";
        }
        return (<>
            Generated segment of {content} residues<br />
            <span>
                Connecting {segment1.chainId}{segment1.lastIndex} -&gt; {segment2.chainId}{segment2.firstIndex} ({segmentsDistance} Å)
            </span>
        </>);
    };

    const getFixedSegmentDescription = (segment: string) => {
        const residuesThreshold = 10;

        if (residuesMap.current.has(segment)) {
            const residues = residuesMap.current.get(segment);
            if (residues!.length >= residuesThreshold) {
                return `Fixed segment of ${residues!.length} residues: ${residues!.substring(0, 3)}...${residues!.substring(residues!.length - 3, residues!.length)}`;
            }
            return `Fixed segment of ${residues!.length} residues: ${residues!}`;
        }

        const fixed = parseFixedSegment(segment);
        if (!fixed) {
            return `Invalid segment. Please, change it.`;
        }
        const residuesArray = getRange([fixed.firstIndex, fixed.lastIndex]);

        // look into the parsed PDB and look up the data
        const relevantAtoms = parsedPdb.filter((e) => e.chainID === fixed.chainId && residuesArray.indexOf(e.resSeq ?? -1) !== -1);

        const resultArray = relevantAtoms.reduce((accumulator: CoordinateData[], current: CoordinateData) => {
            if (accumulator.length === 0 || accumulator[accumulator.length - 1].resName !== current.resName || accumulator[accumulator.length - 1].resSeq !== current.resSeq) {
                accumulator.push(current);
            }
            return accumulator;
        }, []);

        const residues = resultArray.map((e) => AminoAcids[e.resName! as keyof typeof AminoAcids]).join("");
        residuesMap.current.set(segment, residues);
        if (residues.length >= residuesThreshold) {
            return `Fixed segment of length ${residues.length}: ${residues.substring(0, 3)}...${residues.substring(residues!.length - 3, residues.length)}`;
        }
        return `Fixed segment of length ${residues.length}: ${residues}`;
    };
    //#endregion

    useEffect(() => {
        if (ref.current) {
            // for setting the Streamlit frame height
            Streamlit.setFrameHeight(ref.current.clientHeight);
        }
        if (contigParts !== undefined) {
            props.updateStreamlitComponentValue({
                contig: contigParts.map((e) => e.content).join("/"),
            });
        }
    }, [ref, contigParts]);

    return (
        <div ref={ref}>
            {contigParts !== undefined && (<SortableList
                items={contigParts}
                onChange={handleContigsChange}
                renderItem={(item, idx) => (
                    <ContigsOrganizerItem idx={idx} handleAddContigPart={handleAddContigPart}
                        contigParts={contigParts} isGeneratedSegment={isGeneratedSegment}
                        generatedSegmentConnection={generatedSegmentConnection} item={item}
                        getFixedSegmentDescription={getFixedSegmentDescription}
                        getColor={getColor} updateContigPart={updateContigPart} />
                )}
            />)}
        </div>
    );
}

export default ContigsOrganizer;
