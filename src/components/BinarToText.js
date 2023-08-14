import React, { useState } from 'react';

const BinarToText = () => {
    const [binaryInput, setBinaryInput] = useState('');
    const [textOutput, setTextOutput] = useState('');

    const handleInputChange = (event) => {
        setBinaryInput(event.target.value);
    };

  
    const handleSubmit = (event) => {
        event.preventDefault();
        const binaryArray = binaryInput.split(' ');
        let text = '';
        for (let i = 0; i < binaryArray.length; i++) {
          const binary = binaryArray[i];
          const charCode = parseInt(binary, 2);
          const character = String.fromCharCode(charCode);
          text += character;
        }
        setTextOutput(text);
      };

    return (
        <form onSubmit={handleSubmit}>
            <label className='text'>
                Enter binary:
                <input type="text" value={binaryInput} onChange={handleInputChange} required />
            </label>
            <br />
            <br />
            <label className='text'>
                Text output:
                <span>{" " + textOutput}</span>
            </label>
            <br />
            <br />
            <button className='butt' type="submit">Convert</button>
        </form>
    );
};

export default BinarToText;
