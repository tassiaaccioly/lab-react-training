import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = (props) => {
  const [value, setValue] = useState({
    toggleImg: true,
  });

  const handleClick = () => {
    setValue({ toggleImg: !value.toggleImg });
  };

  return (
    <img
      onClick={handleClick}
      src={value.toggleImg ? props.img : props.imgClicked}
      className="clickableimg"
    />
  );
};

export default ClickablePicture;
