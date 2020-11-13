import React, { useState } from 'react';
import Greetings from '../greetings/Greetings';
import './SignupPage.css';

const SignupPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: '',
    toggle: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setState({ ...state, toggle: !state.toggle });
  };

  return (
    <div>
      <form action="" className="form">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          value={state.email}
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          value={state.password}
        />

        <label htmlFor="nationality">Nationality</label>
        <select onChange={handleChange} name="" id="" value={state.nationality}>
          <option value="en">English</option>
          <option value="de">Deutch</option>
          <option value="fr">Français</option>
        </select>

        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
      {state.toggle ? (
        <div className="greetings-div">
          <Greetings lang="en" />
          <p>Your email address is: {}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignupPage;
