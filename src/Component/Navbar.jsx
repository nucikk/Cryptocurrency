import React, { useState } from "react";
import logo from "../Image/logo.svg";
import "../Style/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import PageList from "./PageList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar_links ${showMenu ? "visible" : "hidden"}`}>
        <PageList />
      </div>
      <div className="navbar_auth">
        <button className="navbar_auth_login">Login</button>
        <button className="navbar_auth_signup">Signup</button>

        <button className="menu_btn" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
