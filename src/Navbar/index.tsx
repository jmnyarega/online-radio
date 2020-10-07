import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = (props: any): any => {
  const {
    history: { location },
  } = props;

  const activeLink = (selected: string) => {
    const { pathname } = location;
    const mapLinks: any = {
      "/": "home",
      "/favourites": "favourites",
      "/discover": "discover",
    };
    return selected === mapLinks[pathname] ? "active" : "";
  };

  return (
    <header className="header header__text-color">
      <div className="logo">
        <Link to="/" className={`nav-list__link ${activeLink("home")}`}>
          Radio.radio
        </Link>
      </div>
      <nav className="nav">
        <li className="nav-list">
          <Link
            to="/favourites"
            className={`nav-list__link ${activeLink("favourites")}`}
          >
            Favourites
          </Link>
          <Link
            to="/discover"
            className={`nav-list__link ${activeLink("discover")}`}
          >
            Discover
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
