import React, { useState } from "react";
import "../Style/registration.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="registration_container">
      <form className="registration_form" onSubmit={handleSubmit}>
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

        <button className="registration_btn" type="submit">
          Login
        </button>

        <Link to="/registration">
          <button className="back_btn">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
