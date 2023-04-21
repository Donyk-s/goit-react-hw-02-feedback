import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <span className={css.good}>
        Good:
        <span className={css.colorGood}>{good}</span>
      </span>
      <span className={css.neutral}>
        Neutral:
        <span className={css.colorNeutral}>{neutral}</span>
      </span>
      <span className={css.bad}>
        Bad:
        <span className={css.colorBad}>{bad}</span>
      </span>
      <div>Total feedback: {total}</div>
      <div>Positive feedback percentage: {positivePercentage}%</div>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
