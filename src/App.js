import React, { Component } from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import SectionTitle from './components/SectionTitle/SectionTitle';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <MainContainer>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </MainContainer>
    );
  }
}

export default App;
