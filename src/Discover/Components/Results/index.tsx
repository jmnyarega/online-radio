import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Common/Loader";
import { Istation, Ilocation } from "../../../Common/types/location";

type Iprops = {
  loading: boolean;
  stationNames: Istation[];
  stationUrls: Istation[];
};

const Results = ({ loading, stationNames, stationUrls }: Iprops) => (
  <div className="results da-center row">
    <Loader show={loading} />
    <ul className="results-container">
      {stationNames.slice(0, 10).map((x: Istation, i) => (
        <li className="results-lists" key={`x.name-${i}`}>
          <Link
            to={(location: Ilocation) => ({
              ...location,
              pathname: "/play",
              data: x,
              stationNames,
              stationUrls,
            })}
            className="results-text"
          >
            {x.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default Results;
