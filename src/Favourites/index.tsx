import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";

const Play = () => {
  let likedItems = JSON.parse(localStorage.getItem("liked" || "{}") || "[]");
  return (
    <div className="container main__background">
      <div className="favourite-list">
        <h2 className="title title__small favourite-title">
          Your favourite Radio Stations
        </h2>
        {likedItems.length > 0 ? (
          likedItems.map((x: any, i: number) => (
            <div className="mostlistened-row__line favourite-list">
              <Link
                to={(location: any) => ({
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
          ))
        ) : (
          <p className="favourite__no-favourites">
            You haven't liked any Radio stations, go
            <Link to="/discover" className="link favourite-link">
              here
            </Link>
            to find more
          </p>
        )}
      </div>
    </div>
  );
};

export default withRouter(Play);
