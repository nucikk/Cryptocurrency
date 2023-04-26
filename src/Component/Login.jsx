import React, { useState } from "react";
import "../Style/registration.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import circuit from "../Image/circuit.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageText, setErrorMessageText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      console.log('Login successful');
      alert('Login successful');
      window.location.href = "/";
   
    } else {
      console.log('Invalid email or password');
      setErrorMessageText("Invalid email or password")
    }
  };

  return (
    <>
      <Navbar />
      <img className="circuit_img" src={circuit} />
      <div className="login_container">
        <form className="login_form" onSubmit={handleSubmit}>
          <label className="registration_label" htmlFor="email">
            Email:
          </label>
          <input
            className="registration_input"
            type="email"
            name="email"
            placeholder="Type your email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label className="registration_label" htmlFor="password">
            Password:
          </label>
          <input
            className="registration_input"
            type="password"
            name="password"
            placeholder="Type your password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errorMessageText && <div className="error">{errorMessageText}</div>}

          <button className="registration_btn" type="submit">
            Login
          </button>

          <Link to="/registration">
            <button className="register_btn">Register</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
