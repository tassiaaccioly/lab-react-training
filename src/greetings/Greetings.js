import React from 'react';
import './Greetings.css';

const langs = {
  de: 'Hallo',
  en: 'Hi',
  es: 'Holla',
  fr: 'Bonjour',
};

const Greetings = (props) => {
  const choseLang = (props) => {
    let language = '';
    Object.values(props).map((key) => {
      if (langs[key]) {
        language = langs[key];
      }
    });
    return language;
  };

  return (
    <p className="greetings">
      {choseLang(props)} {props.children}
    </p>
  );
};

export default Greetings;
