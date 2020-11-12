import React, { useState } from 'react';
import './dice.css';

const Dice = () => {
  let number = Math.floor(Math.random() * 6) + 1;
  let dices = `./img/dice${number}.png`;
  const [value, setValue] = useState(dices);

  const handleClick = () => {
    number = '-empty';
    dices = `./img/dice${number}.png`;
    setValue(dices);
    setTimeout(() => {
      number = Math.floor(Math.random() * 6) + 1;
      dices = `./img/dice${number}.png`;
      setValue(dices);
    }, 500);
  };

  return (
    <div className="dice">
      <img onClick={handleClick} src={value} />
    </div>
  );
};

export default Dice;
