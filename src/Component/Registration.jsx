import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration_container">
      <form onSubmit={handleSubmit} className="registration_form">
        <label className="registration_label" htmlFor="firstName">First Name:</label>
        <input
          className="registration_input"
          type="text"
          name="firstName"
          placeholder="Type your first name..."
          value={firstName}
          onChange={handleFirstNameChange}
        />
        
        <label className="registration_label" htmlFor="lastName">Last Name:</label>
        <input
          className="registration_input"
          type="text"
          name="lastName"
          placeholder="Type your last name..."
          value={lastName}
          onChange={handleLastNameChange}
        />
        
        <label className="registration_label" htmlFor="email">Email:</label>
        <input
          className="registration_input"
          type="email"
          name="email"
          placeholder="Type your email..."
          value={email}
          onChange={handleEmailChange}
        />
        
        <label className="registration_label" htmlFor="password">Password:</label>
        <input
          className="registration_input"
          type="password"
          name="password"
          placeholder="Type your password..."
          value={password}
          onChange={handlePasswordChange}
        />
        
        <button className="registration_btn" type="submit">Register</button>
        
        <Link to="/">
          <button className="back_btn" type="submit">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
