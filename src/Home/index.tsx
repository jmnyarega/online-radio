import React from "react";
import Disc from "../Common/disc";
import "./index.css";

const Home = () => (
  <div className="container">
    <div className="main main__background">
      <div className="row main-content">
        <div className="col hero-toplist">
          <div className="row d-center">
            <Disc className="col" />
            <h4 className="title title__small inline col">
              Most listened Stations
            </h4>
          </div>
        </div>
        <div className="col hero hero-intro">
          <h3 className="title title__large hero-text hero-text__title">
            The standard Lorem Ipsum passage, used since the 1500s
          </h3>
          <p className="hero-text hero-text__intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn btn-raised hero-btn">Discover</button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
