import React from "react";
import "./index.css";

const NavBar = () => (
  <header className="header header__text-color">
    <div className="logo">Radio.radio</div>
    <nav className="nav">
      <li className="nav-list">
        <a href="/discover" className="nav-list__link">
          Discover
        </a>
      </li>
    </nav>
  </header>
);

export default NavBar;
