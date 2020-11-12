import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  //Function to transform numbers into •
  // function hideNum(props) {
  //   let hiddenNums = number.split('').map((elem, idx) => {
  //     if (idx < 12) {
  //       return (elem = '•');
  //     } else {
  //       return elem;
  //     }
  //   });
  //   let final = hiddenNums.reduce((a, b, idx) =>
  //     idx % 4 === 0 ? a + ' ' + b : a + b
  //   );
  //   return final;
  // }

  let month = expirationMonth < 10 ? '0' + expirationMonth : expirationMonth;
  let year = expirationYear % 2000;

  const imgPath = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';

  return (
    <div
      style={{ backgroundColor: bgColor, color: color }}
      className="creditcard"
    >
      <p className="flag">
        <img src={imgPath} alt="flag" />
      </p>
      <h4>•••• •••• •••• {number.substr(-4)}</h4>
      <div className="expiration">
        <p>
          Expires {month}/{year}
        </p>
        <span>{bank}</span>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
