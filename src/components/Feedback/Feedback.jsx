import React from 'react';

import s from './Feedback.module.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className="Feedback">
        <h1 className={s.title}>Please leave feedback</h1>

        <div className={s.reactions}>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>

        <h2>Statistics</h2>
        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
