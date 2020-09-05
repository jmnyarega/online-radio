import React from "react";
import { withRouter } from "react-router";
import "./index.css";

type Iprops = {
  location: any;
};

const Play = ({ location }: Iprops) => {
  let currentStation = location && location.data;
  currentStation &&
    localStorage.setItem("playing", JSON.stringify(currentStation));
  if (!location.data && localStorage.getItem("playing") !== "undefined") {
    currentStation = JSON.parse(localStorage.getItem("playing") || "{}");
  }
  return (
    <div className="container">
      <div className="main main__background">
        <div className="main-content player row d-center">
          <div className="player-radio__image col">
            {currentStation && currentStation.favicon ? (
              <img src={currentStation.favicon} alt="" width="300" />
            ) : (
              <img
                src="https://images.pexels.com/photos/1539/vintage-technology-music-old.jpg?cs=srgb&dl=pexels-splitshire-1539.jpg&fm=jpg"
                alt=""
                width="200"
              />
            )}
          </div>
          <div className="player-radio__info col">
            <div className="player-radio__country player-item">
              <span className="key">Name:</span>
              <span className="value">
                {currentStation && currentStation.name}
              </span>
            </div>
            <div className="player-radio__country player-item">
              <span className="key">Country:</span>
              <span className="value">
                {currentStation && currentStation.country}
              </span>
            </div>
            <div className="player-radio__language player-item">
              <span className="key">Language:</span>
              <span className="value">
                {currentStation && currentStation.language}
              </span>
            </div>
            <div className="player-radio__website player-item">
              <span className="key">Website:</span>
              <span className="value">
                {currentStation && currentStation.homepage}
              </span>
            </div>
            <div className="player-radio__tags player-item">
              <span className="key">Tags:</span>
              <span className="value">
                {currentStation && currentStation.tags}
              </span>
            </div>
            <div className="player-radio__country-code player-item">
              <span className="key">Country Code:</span>
              <span className="value">
                {currentStation && currentStation.countrycode}
              </span>
            </div>
            <div className="player-radio__votes player-item">
              <span className="key">Votes:</span>
              <span className="value">
                {currentStation && currentStation.votes}
              </span>
            </div>
          </div>
        </div>
        {currentStation && currentStation.url_resolved && (
          <figure className="player-audio__container ">
            <audio
              autoPlay
              onPlaying={() => {
                console.log("playing");
              }}
              onPause={() => {
                console.log("paused");
              }}
              onError={() => {
                console.log("error...");
              }}
              controls
              src={currentStation.url_resolved}
              className="audio"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        )}
      </div>
    </div>
  );
};

export default withRouter(Play);
