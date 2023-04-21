import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <span>
        Good:
        <span>{good}</span>
      </span>
      <span>
        Neutral:
        <span>{neutral}</span>
      </span>
      <span>
        Bad:
        <span>{bad}</span>
      </span>
      <div>Total feedback: {total}</div>
      <div>Positive feedback percentage: {positivePercentage}%</div>
    </div>
  );
};
