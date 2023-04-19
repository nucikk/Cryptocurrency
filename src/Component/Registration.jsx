import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setFirstNameError("The name field is required");
    } else if (/^[.,?/"$*]+$/.test(e.target.value)) {
      setFirstNameError("Extra characters are not allowed in the name field");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setLastNameError("The name field is required");
    } else if (/^[.,?/"$*]+$/.test(e.target.value)) {
      setLastNameError("Extra characters are not allowed in the name field");
    } else {
      setLastNameError("");
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("The email field is required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || /^[.,?/"$*]+$/.test(firstName)) {
      setFirstNameError("Please enter a valid name");
      return;
    }
    if (!lastName || /^[.,?/"$*]+$/.test(lastName)) {
      setLastNameError("Please enter a valid name");
      return;
    }
    if (!email) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (password.length < 6 || !/\d/.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one digit and one capital letter"
      );
      return;
    }

    console.log("Form data:", { firstName, lastName, email, password });
  };

  return (
    <div className="registration_container">
      <form onSubmit={handleSubmit} className="registration_form">
        <label className="registration_label" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="registration_input"
          type="text"
          name="firstName"
          placeholder="Type your first name..."
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {firstNameError && <span className="error">{firstNameError}</span>}

        <label className="registration_label" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="registration_input"
          type="text"
          name="lastName"
          placeholder="Type your last name..."
          value={lastName}
          onChange={handleLastNameChange}
        />
        {lastNameError && <span className="error">{lastNameError}</span>}

        <label className="registration_label" htmlFor="email">
          Email:
        </label>
        <input
          className="registration_input"
          type="email"
          name="email"
          placeholder="Type your email..."
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span className="error">{emailError}</span>}

        <label className="registration_label" htmlFor="password">
          Password:
        </label>
        <input
          className="registration_input"
          type="password"
          name="password"
          placeholder="Type your password..."
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <button className="registration_btn" type="submit">
          Register
        </button>

        <Link to="/">
          <button className="back_btn" type="submit">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
