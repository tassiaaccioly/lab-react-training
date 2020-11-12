import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

function DriverCard(props) {
  return (
    <div className="drivercard">
      <img src={props.img} alt="License Photo" />
      <div className="infos">
        <h4>{props.name}</h4>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
