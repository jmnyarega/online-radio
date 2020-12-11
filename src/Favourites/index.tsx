import React from "react";
import { Link } from "react-router-dom";
import { Istation } from "../Common/types/location";
import "./index.css";

const likedItemsProps = JSON.parse(
  localStorage.getItem("liked" || "{}") || "[]"
);

type Iprops = {
  likedItems?: Istation[];
};

const defaultProps: Iprops = {
  likedItems: likedItemsProps,
};

const Favourites: React.SFC<Iprops> = ({ likedItems }) => (
  <div className="container main__background">
    <div className="favourite-list">
      <h2 className="title title__small favourite-title">
        Your favourite Radio Stations
      </h2>
      {likedItems && likedItems.length > 0 ? (
        likedItems.map((x: any, i: number) => (
          <div className="mostlistened-row__line favourite-list" key={i + 1}>
            <Link
              to={(location: any) => ({
                ...location,
                pathname: "/play",
                data: x,
              })}
              className="mostlistened-container-list link"
              key={i}
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

Favourites.defaultProps = defaultProps;
export default Favourites;
