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
            Listen to a variety of radio stations all over the world
          </h3>
          <p className="hero-text hero-text__intro">
            The easiest way to understand the culture of a country is to listen
            to their most popular radio station. There is a lot of information
            that is being shared on radio; news, music, way of living, politics,
            etc. Radio.radio is allowing you to experience and understand
            different cultures
            <span role="img" aria-label="img">
              🍿
            </span>
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
                    key={i}
                  >
                    <span
                      key={i + 1}
                      className="mostlistened__number mostlistened__item"
                    >
                      {i + 1}
                    </span>
                    <span
                      key={i + 2}
                      className="mostlistened__play play mostlistened__item"
                    ></span>
                    <span
                      key={i + 3}
                      className="mostlistened__radio-name mostlistened__item"
                    >
                      {x.name}
                    </span>
                    <span
                      key={i + 4}
                      className="mostlistened__country mostlistened__item"
                    >
                      {x.country}
                    </span>
                    <span
                      key={i + 5}
                      className="mostlistened__rate mostlistened__item"
                    >
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
