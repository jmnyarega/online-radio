import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./index.css";

type Iprops = {
  location: any;
};

const Play = ({ location }: Iprops) => {
  let currentStation = location && location.data;
  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => {
      window.addEventListener("keypress", onKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  currentStation &&
    localStorage.setItem("playing", JSON.stringify(currentStation));
  if (!location.data && localStorage.getItem("playing") !== "undefined") {
    currentStation = JSON.parse(localStorage.getItem("playing") || "{}");
  }

  let likedItems = JSON.parse(localStorage.getItem("liked" || "{}") || "[]");
  const previouslyLiked = likedItems.some(
    (x: any) => x.changeuuid === currentStation.changeuuid
  );

  const [play, setPlay] = useState("");
  const [liked, setLiked] = useState(previouslyLiked);
  const [url, setUrl] = useState(currentStation && currentStation.url_resolved);

  const customAudio = () => {
    const ctx = document.getElementsByClassName("player-audio")[0];
    //@ts-ignore
    if (ctx.paused) {
      //@ts-ignore
      ctx.play();
      setPlay("playing");
    } else {
      //@ts-ignore
      ctx.pause();
      setPlay("paused");
    }
  };

  const onKeyPress = (event: any) => {
    if (event.charCode === 32) {
      customAudio();
    }
  };

  const like = () => {
    if (liked) {
      setLiked(false);
      likedItems = likedItems.filter(
        (x: any) => x.changeuuid !== currentStation.changeuuid
      );
    } else {
      setLiked(true);
      likedItems !== "undefined"
        ? (likedItems = [...likedItems, currentStation])
        : (likedItems = currentStation);
    }
    localStorage.setItem("liked", JSON.stringify(likedItems));
  };

  const onError = () => {
    setUrl(currentStation && currentStation.url);
    customAudio();
  };

  const onEnded = () => {
    console.log("Ended");
    customAudio();
  };

  return (
    <div className="container">
      <div className="main main__background">
        <div className="main-content player row d-center">
          <div className="player-radio__image col">
            {currentStation && currentStation.favicon ? (
              <img
                src={currentStation.favicon}
                alt=""
                className="player-audio__station-img"
              />
            ) : (
              <img src="" alt="" />
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
                className={liked ? "heart" : "heart-o"}
                role="button"
                aria-pressed="false"
                onClick={like}
              ></div>
            </div>
          </div>
        </div>

        {currentStation && currentStation.url_resolved && (
          <div className="player-audio__custom-container">
            <div className="player-audio__custom" onClick={customAudio}>
              <audio
                title={currentStation.name}
                onError={onError}
                onEnded={onEnded}
                className="player-audio"
                src={url}
              />
              <div className={play || "paused"}></div>
            </div>
            <hr className="player-audio__custom-streamline" />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Play);
