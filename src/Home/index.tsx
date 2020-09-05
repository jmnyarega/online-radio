import React from "react";
import { Link } from "react-router-dom";
import top5 from "../data/top.json";
import Disc from "../Common/disc";
import "./index.css";

const Home = () => (
  <div className="container">
    <div className="main main__background">
      <div className="main-content">
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
        <div className="col hero-toplist">
          <div className="row dv-center">
            <Disc className="col" />
            <h4 className="title title__small col">Most listened Stations</h4>
          </div>
          <div className="mostlistened">
            <ul className="mostlistened-container">
              {top5.map((x, i) => (
                <div className="mostlistened-row__line">
                  <Link
                    to={(location) => ({
                      ...location,
                      pathname: "/play",
                      data: x,
                    })}
                    className="mostlistened-container-list link"
                  >
                    <span className="mostlistened__number mostlistened__item">
                      {i + 1}
                    </span>
                    <span className="mostlistened__play play mostlistened__item"></span>
                    <span className="mostlistened__radio-name mostlistened__item">
                      {x.name}
                    </span>
                    <span className="mostlistened__country mostlistened__item">
                      {x.country}
                    </span>
                    <span className="mostlistened__rate mostlistened__item">
                      {x.bitrate}kbps
                    </span>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
