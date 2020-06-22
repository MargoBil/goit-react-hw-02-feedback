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

  onLeaveFeedback = ({target}) => {
    const name = target.dataset.name;
    this.setState (prevState => ({[name]: prevState[name] + 1}));
    this.countTotalFeedback ();
    this.countPositiveFeedbackPercentage ();
  };

  countTotalFeedback = () => {
    this.setState (prevState => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState (prevState => ({
      positivePercentage: Math.round (prevState.good / prevState.total * 100),
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
