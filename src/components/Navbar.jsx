import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import "../style/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleOnClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <img src={Logo} className="ham-logo" alt="website-logo" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              NOSOTROS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              DESTINOS
            </Link>
          </li>
          <div className="logo">
            <img src={Logo} width={120} alt="website-logo" />
          </div>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              GRUPOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              F&Q
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              CONTACTO
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleOnClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
