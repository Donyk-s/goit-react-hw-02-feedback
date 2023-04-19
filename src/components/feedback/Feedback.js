import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
      </div>
    );
  }
}

ReactDOM.render(<Feedback step={5} />, document.getElementById('root'));
