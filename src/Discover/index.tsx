import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Search from "../Common/search";
import Loader from "../Common/Loader";
import countries from "../data/countries.json";
import "./index.css";

type Iurl = {
  name: string;
};

const Home = (props: any) => {
  const [stationUrls, setStationUrls] = useState([]);
  const [stationNames, setStationName] = useState([]);
  const [loading, setLoader] = useState(false);

  const getCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    const country = e.currentTarget ? e.currentTarget.value : e;
    (() => {
      setLoader(true);
      import(`../data/countries/${country}.json`)
        .then((x) => {
          setStationName(x.default);
          setStationUrls(x.default);
          setLoader(false);
        })
        .catch(() => {
          setLoader(false);
        });
    })();
  };

  useEffect(() => {
    if (props.location.stationNames) {
      setStationName(props.location.stationNames);
      setStationUrls(props.location.stationUrls);
    }
  }, [props.location.stationNames, props.location.stationUrls]);

  const search = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    let results: any = [];
    stationUrls.forEach(
      (x: Iurl) =>
        x.name.toLowerCase().includes(term.toLowerCase()) && results.push(x)
    );
    setStationName(results);
  };
  return (
    <div className="container">
      <div className="main main__background">
        <div className="main-content search d-column">
          <span className="search-custom__select row">
            <select
              className="search__select-country block"
              onChange={getCountry}
            >
              <option value="">---Select Country---</option>
              {countries
                .slice(3)
                .filter((x) => !x.name.startsWith("http"))
                .map((country, i) => {
                  return (
                    <option key={i} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
            </select>
            <span className="search-custom__arrow arrow"></span>
          </span>
          <div className="row da-center">
            <input
              type="text"
              className="search-input"
              onChange={search}
              placeholder="Search radio station"
            />
            <span className="search-icon">
              <Search width={24} height={24} fill="rgb(242,242,242)" />
            </span>
          </div>
          <div className=" results da-center row">
            <Loader show={loading} />
            <ul className="results-container">
              {stationNames.slice(0, 10).map((x: any) => {
                return (
                  <li className="results-lists">
                    <Link
                      to={(location) => ({
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
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Home);
