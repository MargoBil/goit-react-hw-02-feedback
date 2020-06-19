import React from 'react';

const Statistics = ({good, neutral, bad, positivePercentage, total}) => {
  return (
    <>
    <ul>
      <li><p>Good</p><span>{good}</span></li>
      <li><p>Neutral</p><span>{neutral}</span></li>
      <li><p>Bad</p><span>{bad}</span></li>
      <li><p>Total</p><span>{total}</span></li>
      <li><p>Positive feedback</p><span>{positivePercentage}%</span></li>
    </ul>
    </>
  )
}

export default Statistics;