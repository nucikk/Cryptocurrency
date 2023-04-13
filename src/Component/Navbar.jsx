import React from "react";
import { Link } from "react-router-dom";
import logo from "../Image/logo.svg";
import "../Style/Navbar.css";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Concept", path: "/" },
    { name: "Our Story", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} />
      </div>
      <div className="navbar-links">
        <ul>
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-auth">
        <button className="navbar-auth-login">Login</button>
        <button className="navbar-auth-signup">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
