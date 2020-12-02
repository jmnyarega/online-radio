import React from "react";
import { Link } from "react-router-dom";
import Disc from "../Common/disc";
import "./index.css";

const Home = (): any => (
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
            {[0, 2, 6, 8].map((x) => (
              <iframe
                title={`home radio ${x}`}
                src={`https://tunein.com/embed/player/s2972${x}/`}
                scrolling="no"
                style={{ width: "100%", height: "100px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
