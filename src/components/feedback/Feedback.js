import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood() {
    console.log('i`ll by back');
  }
  handleIncrementNeutral() {
    console.log('i`ll by back');
  }
  handleIncrementBad() {
    console.log('i`ll by back');
  }
  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrementGood}>
          Good {step}
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral {step}
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad {step}
        </button>
      </div>
    );
  }
}

// ReactDOM.render(<Feedback step={5} />, document.getElementById('root'));
