import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  function hideNum(props) {
    let hiddenNums = props.number.split('').map((elem, idx) => {
      if (idx < 12) {
        return (elem = '•');
      } else {
        return elem;
      }
    });
    let final = hiddenNums.reduce((a, b, idx) =>
      idx % 4 === 0 ? a + ' ' + b : a + b
    );
    return final;
  }

  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="creditcard"
    >
      <p className="flag">{props.type}</p>
      <h4>{hideNum(props)}</h4>
      <div className="expiration">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <span>{props.bank}</span>
      </div>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
