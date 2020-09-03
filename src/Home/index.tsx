import React from "react";
import { Link } from "react-router-dom";
import Disc from "../Common/disc";
import "./index.css";

const Home = () => (
  <div className="container">
    <div className="main main__background">
      <div className="row main-content">
        <div className="col hero-toplist">
          <div className="row d-center">
            <Disc className="col" />
            <h4 className="title title__small col">Most listened Stations</h4>
          </div>
          <div className="mostlistened">
            <ul className="mostlistened-container">
              <li className="mostlistened-container-list link">
                <span className="mostlistened__number">01</span>
                <span className="mostlistened__play play"></span>
                <span className="mostlistened__radio-name">Radio one</span>
                <span className="mostlistened__country">Russian</span>
                <span className="mostlistened__rate">12 kbps</span>
              </li>
              <li className="mostlistened-container-list link">
                <span className="mostlistened__mostlistened__number">02</span>
                <span className="mostlistened__play play"></span>
                <span className="mostlistened__radio-name">Radio one</span>
                <span className="mostlistened__country">Russian</span>
                <span className="mostlistened__rate">12 kbps</span>
              </li>
              <li className="mostlistened-container-list link">
                <span className="mostlistened__number">03</span>
                <span className="mostlistened__play play"></span>
                <span className="mostlistened__radio-name">Radio one</span>
                <span className="mostlistened__country">Russian</span>
                <span className="mostlistened__rate">12 kbps</span>
              </li>
              <li className="mostlistened-container-list link">
                <span className="mostlistened__number">04</span>
                <span className="mostlistened__play play"></span>
                <span className="mostlistened__radio-name">Radio one</span>
                <span className="mostlistened__country">Russian</span>
                <span className="mostlistened__rate">12 kbps</span>
              </li>
              <div className="row mostlistened-row__line">
                <li className="mostlistened-container-list link">
                  <span className="mostlistened__number">04</span>
                  <span className="mostlistened__play play"></span>
                  <span className="mostlistened__radio-name">Radio one</span>
                  <span className="mostlistened__country">Russian</span>
                  <span className="mostlistened__rate">12 kbps</span>
                </li>
                <Link
                  to="/discover"
                  className="mostlistened__line d-center row"
                >
                  →
                </Link>
              </div>
            </ul>
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
          <Link to="/discover" className="btn btn-hero hero-btn">
            Discover
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
