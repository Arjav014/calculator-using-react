import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState('0');

  const handleButtonClick = (value) => {
    if(value === 'C') {
      setInput('');
    }
    else if(value === '<') {
      setInput(input.slice(0,-1));
    }
    else if(value === '=') {
      try{
        setInput(eval(input).toString());
      } catch(error) {
        setInput('Error');
      }
    }
    else {
      setInput((preValue) => preValue + value);
    }
  }

  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div className="row">
          <button className="btn" onClick={() => handleButtonClick('C')}>C</button>
          <button className="btn" onClick={() => handleButtonClick('<')}>&lt;</button>
          <button className="btn" onClick={() => handleButtonClick('%')}>%</button>
          <button className="btn" onClick={() => handleButtonClick('/')}>/</button>

        </div>
        <div className="row">
          <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn" onClick={() => handleButtonClick('00')}>00</button>
          <button className="btn" onClick={() => handleButtonClick('.')}>.</button>
          <button className="btn" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App