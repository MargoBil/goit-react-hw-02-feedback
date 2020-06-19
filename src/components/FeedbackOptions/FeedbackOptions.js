import React from 'react';

const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <>
    <button type = "button" onClick ={()=>onLeaveFeedback('good')}>Good</button>
    <button type = "button" onClick ={()=>onLeaveFeedback('neutral')}>Neutral</button>
    <button type = "button" onClick ={()=>onLeaveFeedback('bad')}>Bad</button>
    </>
  )
}

export default FeedbackOptions;