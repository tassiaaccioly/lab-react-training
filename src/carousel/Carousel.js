import React, { useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const [state, setState] = useState(0);

  const handleClickLeft = () => {
    if (state === 0) {
      setState(props.imgs.length - 1);
    } else {
      setState(state - 1);
    }
  };

  const handleClickRight = () => {
    if (state === props.imgs.length - 1) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handleClickLeft}>Left</button>
      <img src={props.imgs[state]} alt="avatar" />
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
};

export default Carousel;
