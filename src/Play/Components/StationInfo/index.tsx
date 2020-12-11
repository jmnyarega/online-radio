import React from "react";
import { Link } from "react-router-dom";
import { Istation, Ilocation } from "../../../Common/types/location";

type Iprops = {
  currentStation?: Istation;
  location: Ilocation;
  onLike: (e: any) => void;
  like: boolean;
  imgUrl?: string;
  onImageError: () => void;
};

const StationInfo = ({
  currentStation,
  location,
  like,
  onLike,
  imgUrl,
  onImageError,
}: Iprops) => (
  <>
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
        <span className="key ">Name:</span>
        <span className="value radio-name">{currentStation?.name}</span>
      </div>
      <div className="player-radio__country player-item">
        <span className="key">Country:</span>
        <span className="value radio-country">
          {location.stationNames ? (
            <Link
              className="link"
              to={(props) => ({
                ...props,
                pathname: "/discover",
                stationNames: location?.stationNames,
                stationUrls: location?.stationUrls,
              })}
            >
              {currentStation?.country}
            </Link>
          ) : (
            currentStation?.country
          )}
        </span>
      </div>
      <div className="player-radio__language player-item">
        <span className="key">Language:</span>
        <span className="value radio-language">{currentStation?.language}</span>
      </div>
      <div className="player-radio__website player-item">
        <span className="key">Website:</span>
        <span className="value">
          <a className="link radio-homepage" href={currentStation?.homepage}>
            website
          </a>
        </span>
      </div>
      <div className="player-radio__tags player-item">
        <span className="key">Tags:</span>
        <span className="value radio-tags">{currentStation?.tags}</span>
      </div>
      <div className="player-radio__country-code player-item">
        <span className="key">Country Code:</span>
        <span className="value radio-countrycode">
          {currentStation?.countrycode}
        </span>
      </div>
      <div className="player-radio__votes player-item">
        <span className="key">Votes:</span>
        <span className="value radio-votes">{currentStation?.votes}</span>
      </div>
      <div className="player-audio__actions">
        {/* eslint-disable-next-line */}
        <a className={like ? "heart" : "heart-o"} onClick={onLike}></a>
      </div>
    </div>
  </>
);

export default StationInfo;
