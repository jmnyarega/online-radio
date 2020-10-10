import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Audio from "../utils/js/utils";
import "./index.css";

type Iprops = {
  location: any;
};

const Play = ({ location }: Iprops) => {
  let volumes = 0;
  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    window.addEventListener("wheel", onMouseRoll);
    return () => {
      window.addEventListener("wheel", onMouseRoll);
      window.addEventListener("keypress", onKeyPress);
    };
  }, []); // eslint-disable-line

  let currentStation = location && location.data;
  currentStation &&
    localStorage.setItem("playing", JSON.stringify(currentStation));
  if (!location.data && localStorage.getItem("playing") !== "undefined") {
    currentStation = JSON.parse(localStorage.getItem("playing") || "{}");
  }

  const [imgUrl, setImgUrl] = useState(
    currentStation && currentStation.favicon
  );

  const [url, setUrl] = useState(currentStation.url_resolved);
  const [playing, setPlaying] = useState();
  const [like, setLike] = useState(Audio.liked(currentStation));
  const [volume, setVolume] = useState(1);
  const [error, setError] = useState(false);

  const onKeyPress = (event: any) => {
    if (volumes >= 0 && volumes <= 10) {
      if (event.charCode === 48) Audio.increasevolume((volumes += 1));
      if (event.charCode === 57) Audio.decreasevolume((volumes -= 1));
    } else if (volumes < 0) volumes = 0;
    else if (volumes > 10) volumes = 10;
    event.charCode === 32 && Audio.play();
    event.charCode === 109 && Audio.mute();
    setVolume(volumes);
  };

  const onMouseRoll = (event: any) => {
    console.log(event);
    if (volumes >= 0 && volumes <= 10) {
      if (event.deltaY < 0) Audio.increasevolume((volumes += 1));
      if (event.deltaY > 0) Audio.decreasevolume((volumes -= 1));
    } else if (volumes < 0) volumes = 0;
    else if (volumes > 10) volumes = 10;
    setVolume(volumes);
  };

  const onImageError = () => {
    setImgUrl(
      "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    );
  };

  const onError = () => {
    setUrl(currentStation.url);
    setError(true);
    alert("playback error");
    Audio.play();
  };

  const onEnded = () => {
    setError(true);
    Audio.play();
  };

  const handleVolume = (e: any) => {
    setVolume(e.target.value);
    Audio.setVolume(volume);
  };

  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);
  const onLike = () => {
    Audio.like(currentStation);
    setLike(!like);
  };

  return (
    <div className="container">
      <div className="main main__background">
        <div className="main-content player row d-center">
          <div className="player-radio__image col">
            <img
              src={imgUrl}
              alt=""
              className="player-audio__station-img"
              onError={onImageError}
            />
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
                {location.stationNames ? (
                  <Link
                    className="link"
                    to={(props) => ({
                      ...props,
                      pathname: "/discover",
                      stationNames: location.stationNames,
                      stationUrls: location.stationUrls,
                    })}
                  >
                    {currentStation && currentStation.country}
                  </Link>
                ) : (
                  currentStation && currentStation.country
                )}
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
                <a
                  className="link"
                  href={currentStation && currentStation.homepage}
                >
                  website
                </a>
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
            <div className="player-audio__actions">
              <div
                className={like ? "heart" : "heart-o"}
                role="button"
                aria-pressed="false"
                onClick={onLike}
              ></div>
            </div>
          </div>
        </div>

        {currentStation && currentStation.url_resolved && (
          <div className="player-audio__custom-container">
            <div
              className="player-audio__custom player-audio__loading"
              onClick={Audio.play}
            >
              <audio
                title={currentStation.name}
                onError={onError}
                onPlay={onPlay}
                onPause={onPause}
                onEnded={onEnded}
                className="player-audio"
                crossOrigin="anonymous"
                src={url}
                media-player="audioPlayer"
                preload="auto"
              />
              <div className="circle-wrapper">
                <div
                  className={`${playing ? "circle" : "circle-pause"} ${
                    error ? "border-error circle-pause" : "border"
                  }`}
                />
                <div className="icon">
                  <i
                    className={`${playing ? "fa fa-pause" : "fa fa-play"}`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <input
              type="range"
              name="volume"
              value={volume}
              min="0"
              max="10"
              onChange={handleVolume}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Play);
