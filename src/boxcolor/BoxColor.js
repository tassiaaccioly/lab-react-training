import React from 'react';
import './BoxColor.css';

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props) {
  return (
    <div
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
      className="boxcolor"
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}

export default BoxColor;
