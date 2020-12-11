import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Select from "./index";
import { countries } from "../../../tests/__mocks__/data";

const props = {
  getCountry: jest.fn(),
  country: "country-1",
  countries: countries(5),
};

describe("<Select />", () => {
  it("should render the component without crashing", () => {
    expect(shallow(<Select {...props} />));
  });
});

describe("select component data received", () => {
  const customProps = {
    ...props,
    countries: countries(1),
    getCountry: (e: any) => {
      customProps.country = e.target.name;
    },
  };
  const wrapper = mount(<Select {...customProps} />);
  it("correct data received", () => {
    expect(wrapper.find(".search__select-data").instance().value).toBe(
      customProps.countries[0].name
    );
  });
  it("selected value should be empty before click", () => {
    expect(wrapper.find("select").instance().value).toBe("");
  });
  it("selected value should not be empty after selection", () => {
    wrapper
      .find("select")
      .simulate("change", { target: customProps.countries[0] });
    expect(customProps.country).toBe(customProps.countries[0].name);
    expect(props.country).not.toBe(customProps.countries[0].name);
  });
});

describe("snapshots", () => {
  const tree = toJson(shallow(<Select {...props} />));
  expect(tree).toMatchSnapshot();
});
