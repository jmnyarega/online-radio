import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Play from "./index";
import Player from "./Components/Player/index";
import StationInfo from "./Components/StationInfo/index";
import { location as locationData } from "../tests/__mocks__/data";

const location = locationData(10);

describe("renders <Play /> without crashing", () => {
  it("Home renders without crashing", () => {
    expect(shallow(<Play />)).toHaveLength(1);
  });
});

describe("sub-components renders correctly", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/",
            state: { name: "josiah" },
            hash: "",
            ...location,
          },
        ]}
      >
        <Play />
      </MemoryRouter>
    </Router>
  );
  it("Player render without crashing", () => {
    expect(wrapper.find(Player)).toHaveLength(1);
  });
  it("StationInfo render without crashing", () => {
    expect(wrapper.find(StationInfo)).toHaveLength(1);
  });
});

describe("snapshots", () => {
  const tree = toJson(shallow(<Play />));
  expect(tree).toMatchSnapshot();
});
