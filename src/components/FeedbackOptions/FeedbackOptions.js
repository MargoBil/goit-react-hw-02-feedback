import React from 'react';

const FeedbackOptions = ({handleClickGoodReviews, handleClickNeutralReviews, handleClickBadReviews}) => {
  return (
    <>
    <button type = "button" onClick ={handleClickGoodReviews}>Good</button>
    <button type = "button" onClick ={handleClickNeutralReviews}>Neutral</button>
    <button type = "button" onClick ={handleClickBadReviews}>Bad</button>
    </>
  )
}

export default FeedbackOptions;