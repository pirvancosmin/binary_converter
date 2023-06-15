import React, { useState } from 'react';

const DecimalTable = () => {
    const [inputNr, setInputNr] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (event) => {
        setInputNr(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let nr = parseInt(inputNr);
        let power = 1;
        let binarR = 0;
        let rest = 0;
        while (nr !== 0) {
            rest = nr % 2;
            binarR = binarR + rest * power;
            power = power * 10;
            nr = Math.floor(nr / 2);
        }
        setResult(binarR.toString());
    };


    return (
        <form onSubmit={handleSubmit}>
            <label className='text'>
                Enter decimal:
                <input type="text" pattern="[0-9]*" value={inputNr} onChange={handleInputChange} required />
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

export default DecimalTable;