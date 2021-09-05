import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.statistics}>
      <span className={s.data}>Good: {good}</span>
      <span className={s.data}>Neutral: {neutral}</span>
      <span className={s.data}>Bad: {bad}</span>
      <span className={s.data}>Total: {total} </span>
      <span className={s.data}>Positive feedback: {positivePercentage} %</span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
