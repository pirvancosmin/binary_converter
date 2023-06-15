import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DecimalTable from './components/DecimalTable';
import TextTable from './components/TextTable';
import BinarToDec from './components/BinarToDec';

function App() {
  useEffect(() => {
    document.title = 'Binary Converter';
  }, []);

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };


  return (
    <div>
      <Router>
        <div className='table'>
          <a href='/' className='title'><h1>Binary converter</h1></a>
          <h2 className='text'>Select one from those three options to convert:</h2>
          <ul className='unlist'>
            <li className='list'>
              <Link to="/DecimalTable" onClick={handleClick}>Decimal number to Binary number</Link>
            </li>
            <li className='list'>
              <Link to="/TextTable" onClick={handleClick}>Text number to Binary number</Link>
            </li>
            <li className='list'>
              <Link to="/BinarToDec" onClick={handleClick}>Binary number to Decimal number</Link>
            </li>
            <hr />
          </ul>

          <hr />
          <div className='text'>
            {!isHidden && <p> A binary number is a number expressed in the base-2 numeral system or binary numeral 
              system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).
              The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit, or binary digit.
              Because of its straightforward implementation in digital electronic circuitry using logic gates, the binary system is used by almost all modern computers and computer-based devices, as a preferred system of use, over various other human techniques of communication, because of the simplicity of the language and the noise immunity in physical implementation.
              Negative numbers are commonly represented in binary using two's complement.</p>}
          </div>
          <Routes>
            <Route path="/DecimalTable" element={<DecimalTable />} />
            <Route path="/TextTable" element={<TextTable />} />
            <Route path="/BinarToDec" element={<BinarToDec />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
