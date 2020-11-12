import React from 'react';
import './Random.css';

function Random(props) {
  function randomNum(props) {
    return Math.floor(Math.random() * (props.max - props.min) + 1);
  }

  return (
    <p className="random">
      Random value between {props.min} and {props.max} => {randomNum(props)}
    </p>
  );
}

export default Random;
