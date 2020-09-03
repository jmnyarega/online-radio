import React from "react";
import Search from "../Common/search";
import countries from "../data/countries.json";
import "./index.css";

console.log(countries);

const Home = () => (
  <div className="container">
    <div className="main main__background">
      <div className="main-content search">
        <span className="search-custom__select row">
          <select name="" id="" className="search__select-country block">
            <option value="">---Select Country---</option>
            {countries.slice(3).map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
          <span className="search-custom__arrow arrow"></span>
        </span>
        <div className="row d-center">
          <input
            type="text"
            name=""
            id=""
            className="search-input"
            placeholder="Search radio station"
          />
          <span className="search-icon">
            <Search width={24} height={24} fill="rgb(242,242,242)" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
