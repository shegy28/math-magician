import React from 'react';
import calculate from '../logic/calculate';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.btnClicked = (e) => {
      const clickedBtn = e.target.innerText;
      const Result = calculate(this.state, clickedBtn);
      this.setState(Result);
    };
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="result">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="num">
          <button type="button" onClick={this.btnClicked}>AC</button>
          <button type="button" onClick={this.btnClicked}>+/-</button>
          <button type="button" onClick={this.btnClicked}>%</button>
          <button type="button" className="act" onClick={this.btnClicked}>÷</button>
        </div>
        <div className="num">
          <button type="button" onClick={this.btnClicked}>7</button>
          <button type="button" onClick={this.btnClicked}>8</button>
          <button type="button" onClick={this.btnClicked}>9</button>
          <button type="button" className="act" onClick={this.btnClicked}>x</button>
        </div>
        <div className="num">
          <button type="button" onClick={this.btnClicked}>6</button>
          <button type="button" onClick={this.btnClicked}>5</button>
          <button type="button" onClick={this.btnClicked}>4</button>
          <button type="button" className="act" onClick={this.btnClicked}>-</button>
        </div>
        <div className="num">
          <button type="button" onClick={this.btnClicked}>3</button>
          <button type="button" onClick={this.btnClicked}>2</button>
          <button type="button" onClick={this.btnClicked}>1</button>
          <button type="button" className="act" onClick={this.btnClicked}>+</button>
        </div>
        <div className="zero">
          <button type="button" className="o" onClick={this.btnClicked}>0</button>
          <button type="button" className="zb" onClick={this.btnClicked}>.</button>
          <button type="button" className="zb act" onClick={this.btnClicked}>=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
