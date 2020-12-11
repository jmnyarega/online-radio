import React from "react";

type Iprops = {
  getCountry?: (x: any) => void;
  country: string;
  countries: Icountry[];
};

type Icountry = {
  name: string;
};

const Select = ({ getCountry, country, countries }: Iprops) => (
  <span className="search-custom__select row">
    <select
      className="search__select-country block"
      onChange={getCountry}
      value={country}
    >
      <option value="">---Select Country---</option>
      {countries
        .filter((x) => !x.name.startsWith("http"))
        .map((country, i) => {
          return (
            <option
              key={i}
              value={country.name}
              className="search__select-data"
            >
              {country.name}
            </option>
          );
        })}
    </select>
    <span className="search-custom__arrow arrow"></span>
  </span>
);

export default Select;
