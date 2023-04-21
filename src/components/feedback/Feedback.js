import React from 'react';
export const Feedback = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Please leave only positive reviews &#129488;</h2>
      <div>
        {options.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <h3>Statistics:</h3>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};
