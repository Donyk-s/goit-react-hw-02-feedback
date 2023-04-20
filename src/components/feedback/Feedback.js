import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
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
