import React from 'react';

import s from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    console.log('Кликнули в Good');
    console.log(this);
  };

  clickNeutral = () => {
    console.log('Кликнули в Neutral');
    console.log(this);
  };

  clickBad = () => {
    console.log('Кликнули Bad');
    console.log(this);
  };

  render() {
    return (
      <div className="Feedback">
        <h1 className={s.title}>Please leave feedback</h1>

        <div className={s.reactions}>
          <button type="button" onClick={this.clickGood}>
            Good
          </button>
          <button type="button" onClick={this.clickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.clickBad}>
            Bad
          </button>
        </div>

        <h2 className={s.titleStatistics}>Statistics</h2>

        <div className={s.statistics}>
          <span className={s.data}>Good: {this.state.good}</span>
          <span className={s.data}>Neutral: {this.state.neutral}</span>
          <span className={s.data}>Bad: {this.state.bad}</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
