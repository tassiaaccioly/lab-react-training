import React, { useState } from 'react';
import './LikeButton.css';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

const LikeButton = (props) => {
  let [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <button onClick={handleClick} className="likebutton">
      {value} Like{value === 1 ? '' : 's'}
    </button>
  );
};

export default LikeButton;
