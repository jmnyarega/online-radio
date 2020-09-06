import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Common/search";
import Loader from "../Common/Loader";
import countries from "../data/countries.json";
import "./index.css";

type Iurl = {
  name: string;
};

const Home = () => {
  const [stationUrls, setStationUrls] = useState([]);
  const [stationNames, setStationName] = useState([]);
  const [loading, setLoader] = useState(false);

  const getCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    const country = e.currentTarget.value;
    (() => {
      setLoader(true);
      import(`../data/countries/${country}.json`)
        .then((x) => {
          setStationName(x.default);
          setStationUrls(x.default);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
        });
    })();
  };

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
export default Home;
