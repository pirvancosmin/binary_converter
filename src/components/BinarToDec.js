import React, { useState } from 'react';

const BinarToDec = () => {
    const [inputNr, setInputNr] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (event) => {
        setInputNr(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let nr = parseInt(inputNr);
        let result = 0;
        let power = 1;
        while (nr != 0) {
            let x = nr % 10;
            result = result + x * power;
            power = power * 2;
            nr = Math.floor(nr / 10);
        }
        setResult(result.toString());
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className='text'>
                Enter binary:
                <input type="text" pattern="[0-1]*" value={inputNr} onChange={handleInputChange} required />
            </label>
            <br />
            <br />
            <label className='text'>
                Decimal number:
                <span>{" " + result}</span>
            </label>
            <br />
            <br />
            <button className='butt' type="submit">Convert</button>
        </form>
    );
};

export default BinarToDec;