import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import StationInfo from "./index";
import { location } from "../../../tests/__mocks__/data";

const props = {
  currentStation: location(1).data,
  location: location(1),
  like: true,
  onLike: jest.fn(),
  imgUrl: "https://fake-image/",
  onImageError: jest.fn(),
};

describe("StationInfo renders without crashing", () => {
  it("renders without crashing", () => {
    expect(shallow(<StationInfo {...props} />));
  });
});

describe("testing sub-components", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/discover",
            hash: "",
            ...location(5),
          },
        ]}
      >
        <StationInfo {...props} />
      </MemoryRouter>
    </Router>
  );
  it("img", () => {
    expect(wrapper.find("img").instance().src).toBe(props.imgUrl);
  });
});

describe("Info", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/discover",
            hash: "",
            ...location(5),
          },
        ]}
      >
        <StationInfo {...props} />
      </MemoryRouter>
    </Router>
  );
  it("should display correct station name", () => {
    expect(wrapper.find(".radio-name").instance().innerHTML).toMatch(
      props.currentStation.name
    );
  });
  it("should display correct station country", () => {
    expect(wrapper.find(".radio-country").instance().innerHTML).toMatch(
      props.currentStation.country
    );
  });
  it("should display correct station language", () => {
    expect(wrapper.find(".radio-language").instance().innerHTML).toMatch(
      props.currentStation.language
    );
  });
  it("should display correct station homepage", () => {
    expect(wrapper.find(".radio-homepage").instance().href).toMatch(
      props.currentStation.homepage
    );
  });
  it("should display correct station tags", () => {
    expect(wrapper.find(".radio-tags").instance().innerHTML).toMatch(
      props.currentStation.tags
    );
  });
  it("should display correct station countrycode", () => {
    expect(wrapper.find(".radio-countrycode").instance().innerHTML).toMatch(
      props.currentStation.countrycode
    );
  });
  it("should display correct station votes", () => {
    expect(wrapper.find(".radio-votes").instance().innerHTML).toMatch(
      props.currentStation.votes.toString()
    );
  });
});

describe("snapshots", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/discover",
            hash: "",
            ...location(5),
            key: "1",
          },
        ]}
      >
        <StationInfo {...props} />
      </MemoryRouter>
    </Router>
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
