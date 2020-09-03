import React from "react";
import { withRouter } from "react-router";
import "./index.css";

const Home = (props: any) => (
  <div className="container">
    <div className="main main__background">
      <div className="main-content player row">
        <div className="player-radio__image col">
          <img
            src="https://images.pexels.com/photos/1539/vintage-technology-music-old.jpg?cs=srgb&dl=pexels-splitshire-1539.jpg&fm=jpg"
            alt=""
            width="500"
          />
        </div>
        <div className="player-radio__info col">
          <div className="player-radio__country player-item">
            <span className="key">Name:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.name}
            </span>
          </div>

          <div className="player-radio__country player-item">
            <span className="key">Country:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.country}
            </span>
          </div>
          <div className="player-radio__language player-item">
            <span className="key">Language:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.language}
            </span>
          </div>
          <div className="player-radio__website player-item">
            <span className="key">Website:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.homepage}
            </span>
          </div>
          <div className="player-radio__tags player-item">
            <span className="key">Tags:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.tags}
            </span>
          </div>
          <div className="player-radio__country-code player-item">
            <span className="key">Country Code:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.countrycode}
            </span>
          </div>
          <div className="player-radio__voteso player-item">
            <span className="key">Votes:</span>
            <span className="value">
              {props.location &&
                props.location.data &&
                props.location.data.votes}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(Home);
