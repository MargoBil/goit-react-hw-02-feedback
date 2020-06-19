import React, {Component} from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState (state => ({[name]: state[name] + 1}));
    this.countTotalFeedback ();
    this.countPositiveFeedbackPercentage ();
  };

  countTotalFeedback = () => {
    this.setState (state => ({
      total: state.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState (state => ({
      positivePercentage: Math.round (state.good / state.total * 100),
    }));
  };

  render () {
    const {good, neutral, bad, total, positivePercentage} = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0
            ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            : <Notification />}
        </Section>
      </div>
    );
  }
}

export default App;
