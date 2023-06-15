import React, { useState } from 'react';

const TextTable = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let power = 1;
        let binarR = 0;
        let rest = 0;
        if (inputText.length === 1) {
            let nr = inputText.charCodeAt();
            while (nr !== 0) {
                rest = nr % 2;
                binarR = binarR + rest * power;
                power = power * 10;
                nr = Math.floor(nr / 2);
            }
            setResult('0' + binarR.toString());
        } else {
            let resultString = "";
            for (let i = 0; i < inputText.length; ++i) {
                let nr = inputText[i].charCodeAt();
                while (nr !== 0) {
                    rest = nr % 2;
                    binarR = binarR + rest * power;
                    power = power * 10;
                    nr = Math.floor(nr / 2);
                }
                resultString += '0' + binarR.toString() + " ";
                power = 1;
                binarR = 0;
            }
            setResult(resultString.toString());
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='text'>
                Enter text:
                <input type="text" pattern="[^\d]*" value={inputText} onChange={handleInputChange} required />
            </label>
            <br />
            <br />
            <label className='text'>
                Binary number:
                <span>{" " + result}</span>
            </label>
            <br />
            <br />
            <button className='butt' type="submit">Convert</button>
        </form>
    );
};

export default TextTable;
