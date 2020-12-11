import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Audio from "../utils/js/utils";
import Player from "./Components/Player/index";
import StationInfo from "./Components/StationInfo/index";
import { Ilocation } from "../Common/types/location";
import "./index.css";

type Iprops = {
  location: Ilocation;
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

  let currentStation = location?.data;
  currentStation &&
    localStorage.setItem("playing", JSON.stringify(currentStation));
  if (!location.data && localStorage.getItem("playing") !== "undefined") {
    currentStation = JSON.parse(localStorage.getItem("playing") || "{}");
  }

  const [imgUrl, setImgUrl] = useState(currentStation?.favicon);

  const [url, setUrl] = useState(currentStation?.url_resolved);
  const [playing, setPlaying] = useState();
  const [like, setLike] = useState(Audio.liked(currentStation));
  const [volume, setVolume] = useState(1);
  const [error, setError] = useState(false);
  const [mute, setMute] = useState(false);

  const onKeyPress = (event: any) => {
    if (volumes >= 0 && volumes <= 10) {
      if (event.charCode === 48) Audio.increasevolume((volumes += 1));
      if (event.charCode === 57) Audio.decreasevolume((volumes -= 1));
    } else if (volumes < 0) volumes = 0;
    else if (volumes > 10) volumes = 10;
    event.charCode === 32 && Audio.play();
    event.charCode === 109 && Audio.mute();
  };

  const onMouseRoll = (event: any) => {
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
    setUrl(url?.replace("http:", "https:"));
    setPlaying(false);
    setError(true);
    alert("playback error");
    Audio.play();
  };

  const onEnded = () => {
    setError(true);
    setPlaying(false);
    Audio.play();
  };

  const handleVolume = (e: any) => {
    setVolume(e.target.value);
    Audio.setVolume(volume);
  };

  const onMute = () => {
    const muted = Audio.mute();
    setMute(muted);
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
          <StationInfo
            currentStation={currentStation}
            location={location}
            onLike={onLike}
            like={like}
            imgUrl={imgUrl}
            onImageError={onImageError}
          />
        </div>

        {currentStation?.url_resolved && (
          <Player
            currentStation={currentStation}
            onError={onError}
            onPlay={onPlay}
            url={url}
            onPause={onPause}
            onEnded={onEnded}
            error={error}
            playing={playing}
            volume={volume}
            handleVolume={handleVolume}
            onMute={onMute}
            mute={mute}
            Audio={Audio}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(Play);
