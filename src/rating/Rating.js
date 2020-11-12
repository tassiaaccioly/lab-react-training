import React from 'react';
import './Rating.css';

function whatRate(props) {
  let roundRating = Math.round(props);
  switch (roundRating) {
    case 1:
      return `★☆☆☆☆`;
    case 2:
      return `★★☆☆☆`;
    case 3:
      return `★★★☆☆`;
    case 4:
      return `★★★★☆`;
    case 5:
      return `★★★★★`;
    default:
      return `☆☆☆☆☆`;
  }
}

function Rating(props) {
  return <div className="ratings">{whatRate(props.children)}</div>;
}

export default Rating;
