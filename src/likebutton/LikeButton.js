import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = (props) => {
  let colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let idx = 0;
  let colors = colorsArr[idx];
  const [value, setValue] = useState(0);
  let [color, setColor] = useState(colors);

  const handleClick = () => {
    setValue(value + 1);
    idx = Math.floor(Math.random() * 6);
    colors = colorsArr[idx];
    setColor((color = colors));
  };

  return (
    <button
      onClick={handleClick}
      className="likebutton"
      style={{ backgroundColor: color }}
    >
      {value} Like{value === 1 ? '' : 's'}
    </button>
  );
};

export default LikeButton;
