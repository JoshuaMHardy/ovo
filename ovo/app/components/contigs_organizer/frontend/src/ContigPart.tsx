import React, { useState, useEffect, createRef } from 'react';

interface Props {
    contigPart: string;
    index: number;
    updateContigPart: (index: number, newPart: string | null) => void; // update the parent state
}

const ContigPart = (props: Props) => {
    const inputRef = createRef<HTMLInputElement>();
    const [inputValue, setInputValue] = useState(props.contigPart);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        // when clicking away or pressing enter,
        // save the new value, or treat empty string as deletion
        props.updateContigPart(props.index, inputValue === "" ? null : inputValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            inputRef.current?.blur();
        }
    };

    useEffect(() => {
        setInputValue(props.contigPart); // Update input value when prop changes
        if (props.contigPart === "") {
            inputRef.current?.focus();
        }
    }, [props.contigPart]);

    return (
        <input
            ref={inputRef}
            type="text"
            value={inputValue}
            placeholder="10 or 10-20"
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="contigPart"
        />
    );
};

export default ContigPart;
