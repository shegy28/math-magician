import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;

  const btnClicked = (e) => {
    const clickedBtn = e.target.innerText;
    const gotValue = calculate(state, clickedBtn);
    setState(gotValue);
  };

  return (
    <div className="calculator">
      <div className="result">
        <span>
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </span>
      </div>
      <div className="num">
        <button type="button" onClick={btnClicked}>AC</button>
        <button type="button" onClick={btnClicked}>+/-</button>
        <button type="button" onClick={btnClicked}>%</button>
        <button type="button" className="act" onClick={btnClicked}>÷</button>
      </div>
      <div className="num">
        <button type="button" onClick={btnClicked}>7</button>
        <button type="button" onClick={btnClicked}>8</button>
        <button type="button" onClick={btnClicked}>9</button>
        <button type="button" className="act" onClick={btnClicked}>x</button>
      </div>
      <div className="num">
        <button type="button" onClick={btnClicked}>6</button>
        <button type="button" onClick={btnClicked}>5</button>
        <button type="button" onClick={btnClicked}>4</button>
        <button type="button" className="act" onClick={btnClicked}>-</button>
      </div>
      <div className="num">
        <button type="button" onClick={btnClicked}>3</button>
        <button type="button" onClick={btnClicked}>2</button>
        <button type="button" onClick={btnClicked}>1</button>
        <button type="button" className="act" onClick={btnClicked}>+</button>
      </div>
      <div className="zero">
        <button type="button" className="o" onClick={btnClicked}>0</button>
        <button type="button" className="zb" onClick={btnClicked}>.</button>
        <button type="button" className="zb act" onClick={btnClicked}>=</button>
      </div>

    </div>
  );
};

export default Calculator;
