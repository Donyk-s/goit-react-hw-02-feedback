import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    console.log('i`ll by back');
  };
  handleIncrementNeutral = () => {
    console.log('i`ll by back');
  };
  handleIncrementBad = () => {
    console.log('i`ll by back');
  };
  render() {
    const { step } = this.props;

    return (
      <div>
        <span>
          Good:
          <span>{this.state.good}</span>
        </span>
        <span>
          Neutral:
          <span>{this.state.neutral}</span>
        </span>
        <span>
          Bad:
          <span>{this.state.bad}</span>
        </span>
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
