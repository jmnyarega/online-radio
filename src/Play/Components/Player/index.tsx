import React from "react";
import { Istation } from "../../../Common/types/location";
import Mute from "../../../Common/mute";

type Iprops = {
  currentStation: Istation;
  onError: () => void;
  onPlay: () => void;
  url?: string;
  onPause: () => void;
  onEnded: () => void;
  error: boolean;
  playing: boolean;
  volume: number;
  handleVolume: (e: any) => void;
  onMute: () => void;
  mute: boolean;
  Audio: {
    play: () => void;
  };
};

const Player = ({
  currentStation,
  onError,
  onPlay,
  url,
  onPause,
  onEnded,
  error,
  playing,
  volume,
  handleVolume,
  onMute,
  mute,
  Audio,
}: Iprops) => (
  <div className="player-audio__custom-container">
    <div
      className="player-audio__custom player-audio__loading"
      onClick={Audio.play}
    >
      <audio
        title={currentStation?.name}
        onError={onError}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        className="player-audio"
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
      className="radio__range-volume"
      type="range"
      name="volume"
      value={volume}
      min="0"
      max="10"
      onChange={handleVolume}
    />
    {/* eslint-disable */}
    <a onClick={onMute} style={{ cursor: "pointer" }}>
      <Mute muted={mute} />
    </a>
  </div>
);

export default Player;
