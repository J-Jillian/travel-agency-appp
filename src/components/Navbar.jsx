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
              OREGÓN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              DESTINOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              VIAJES PERSONALIZADOS
            </Link>
          </li>
          <div className="logo">
            <img to="/" src={Logo} width={120} alt="website-logo" />
          </div>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              GRUPOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              AVENTURA
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              RSC
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
