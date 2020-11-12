import React from 'react';
import './Random.css';

function Random(props) {
  function randomNum(props) {
    return Math.round(Math.random() * (props.max - props.min)) + props.min;
  }

  return (
    <p className="random">
      Random value between {props.min} and {props.max} => {randomNum(props)}
    </p>
  );
}

export default Random;
