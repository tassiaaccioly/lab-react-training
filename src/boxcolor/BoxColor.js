import React from 'react';
import './BoxColor.css';

const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const BoxColor = (props) => {
  const { r, g, b } = props;
  return (
    <div
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      className="boxcolor"
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
