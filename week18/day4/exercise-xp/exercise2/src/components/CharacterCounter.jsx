import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
    const inputRef = useRef(null); 
    const [charCount, setCharCount] = useState(0); 


    const handleInputChange = () => {
        setCharCount(inputRef.current.value.length);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Character Counter</h2>
            <input
                type="text"
                ref={inputRef} 
                onInput={handleInputChange} 
                placeholder="Type something..."
                style={{
                    padding: '10px',
                    width: '80%',
                    maxWidth: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '10px',
                }}
            />
            <p>Character Count: {charCount}</p>
        </div>
    );
};

export default CharacterCounter;