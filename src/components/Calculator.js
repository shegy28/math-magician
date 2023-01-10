import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div>
          <input placeholder="0" className="result" />
        </div>
        <div className="num">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="act">÷</button>
        </div>
        <div className="num">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="act">X</button>
        </div>
        <div className="num">
          <button type="button">6</button>
          <button type="button">5</button>
          <button type="button">4</button>
          <button type="button" className="act">-</button>
        </div>
        <div className="num">
          <button type="button">3</button>
          <button type="button">2</button>
          <button type="button">1</button>
          <button type="button" className="act">+</button>
        </div>
        <div className="zero">
          <button type="button" className="o">0</button>
          <button type="button" className="zb">.</button>
          <button type="button" className="zb act">=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
