import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => (
  <header className="header header__text-color">
    <div className="logo">
      <Link to="/" className="nav-list__link">
        Radio.radio
      </Link>
    </div>
    <nav className="nav">
      <li className="nav-list">
        <Link to="/favourites" className="nav-list__link">
          Favourites
        </Link>
        <Link to="/discover" className="nav-list__link">
          Discover
        </Link>
      </li>
    </nav>
  </header>
);

export default NavBar;
