import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="drivercard">
      <img src={img} alt="License Photo" />
      <div className="infos">
        <h4>{name}</h4>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
