import React from 'react';
import './IdCard.css';

function IdCard(props) {
  function turnHeight(props) {
    let height = props.height.toString().split('');
    return `${height[0]}.${height[1]}${height[2]}m`;
  }

  return (
    <div className="idcard">
      <img src={props.picture} alt="User Avatar" />
      <div>
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {turnHeight(props)}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
