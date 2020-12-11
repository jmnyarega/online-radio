import React, { useState, useEffect } from "react";
import Search from "../Common/search";
import Results from "./Components/Results/index";
import Select from "./Components/Select/index";
import countries from "../data/countries.json";
import "./index.css";

export const Discover = ({ location }: any) => {
  const [stationUrls, setStationUrls] = useState([]);
  const [stationNames, setStationName] = useState([]);
  const [loading, setLoader] = useState(false);
  const [country, setCountry] = useState();

  const getCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setCountry(value);
    setLoader(true);
  };

  const getData = async () => {
    const data = await import(`../data/countries/${country}.json`);
    setStationName(data.default);
    setStationUrls(data.default);
    setLoader(false);
  };

  loading && getData();

  useEffect(() => {
    if (location?.stationNames) {
      const names = location?.stationNames;
      const urls = location?.stationUrls;
      const country = location?.data.country;
      setStationName(names);
      setStationUrls(urls);
      setCountry(country);
    }
  }, [location]);

  const search = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    let results: any = [];
    stationUrls.forEach(
      (x: { name: string }) =>
        x.name.toLowerCase().includes(term.toLowerCase()) && results.push(x)
    );
    setStationName(results);
  };
  return (
    <div className="container">
      <div className="main main__background">
        <div className="main-content search d-column">
          <Select
            getCountry={getCountry}
            country={country}
            countries={countries}
          />
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
          <Results
            loading={loading}
            stationNames={stationNames}
            stationUrls={stationUrls}
          />
        </div>
      </div>
    </div>
  );
};
export default Discover;
