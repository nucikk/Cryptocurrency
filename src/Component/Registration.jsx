import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/registration.css";
import Navbar from "./Navbar";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  //! ეს ფუნქცია ამოწმებს სახელის inputs
  //!თუ inputs ცარიელია, ის აბრუნებს errors თუ ველი შეიცავს დამატებით სიმბოლოებს აბრუნებს ერორს
  function validateFirstName(name) {
    if (!name) {
      return "The name field is required";
    }
    if (/^[.,?/"$*]+$/.test(name)) {
      return "Extra characters are not allowed in the name field";
    }
    return "";
  }

  const validateLastName = (name) => {
    if (!name) {
      return "The name field is required";
    }
    if (/^[.,?/"$*]+$/.test(name)) {
      return "Extra characters are not allowed in the name field";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email) {
      return "The email field is required";
    }
    return "";
  };

  //! ეს ფუნქცია ამოწმებს პაროლის ინპუტს.
  //! თუ პაროლი 6 სიმბოლოზე ნაკლებია ან არ შეიცავს ერთ ციფრს და ერთ დიდ ასოს, ის აბრუნებს ერორს
  const validatePassword = (password) => {
    if (password.length < 6 || !/\d/.test(password)) {
      return "Password must be at least 6 characters long and contain at least one digit and one capital letter";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameError = validateFirstName(firstName);
    setFirstNameError(firstNameError);
    if (firstNameError) return;

    const lastNameError = validateLastName(lastName);
    setLastNameError(lastNameError);
    if (lastNameError) return;

    const emailError = validateEmail(email);
    setEmailError(emailError);
    if (emailError) return;

    const passwordError = validatePassword(password);
    setPasswordError(passwordError);
    if (passwordError) return;
   
    localStorage.setItem('registeredUser', JSON.stringify({ email, password }));
    console.log("Form data: ", {firstName, lastName, email, password});
  };



  return (    
    <>
    <Navbar />
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
          onChange={(e) => setFirstName(e.target.value)}
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
          onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="error">{passwordError}</div>}


        <button className="registration_btn" type="submit">
          Register
        </button>


        <Link to="/login">
          <button className="login_btn" type="submit">
            Login
          </button>
        </Link>

        <Link to="/">
          <button className="back_btn" type="submit">
            Back
          </button>
        </Link>

        
      </form>
    </div>
    </>
  );
};

export default Registration;