import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./index";

const mostlistened = [0, 2, 6, 8];

describe("renders components without crashing", () => {
  it("Home renders without crashing", () => {
    expect(shallow(<Home mostlistened={mostlistened} />)).toHaveLength(1);
  });
});

describe("Test home urls", () => {
  const wrapper = mount(
    <Router>
      <Home mostlistened={mostlistened} />{" "}
    </Router>
  );
  it("test most listened urls", () => {
    expect(wrapper.find("iframe")).toHaveLength(mostlistened.length);
  });
});

describe("snapshots", () => {
  const tree = toJson(shallow(<Home mostlistened={mostlistened} />));
  expect(tree).toMatchSnapshot();
});
