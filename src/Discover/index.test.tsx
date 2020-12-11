import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Discover from "./index";
import Select from "./Components/Select";
import Results from "./Components/Results";
import Search from "../Common/search";
import { location } from "../tests/__mocks__/data";

describe("<Discover /> should render without crashing", () => {
  it("search component", () => {
    expect(shallow(<Discover />));
  });
});

describe("should render sub-components", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/",
            state: { name: "josiah" },
            hash: "",
            ...location(10),
            key: "1",
          },
        ]}
      >
        <Discover location={location(10)} />
      </MemoryRouter>
    </Router>
  );
  it("should render <Select />", () => {
    expect(wrapper.find(Select)).toHaveLength(1);
  });
  it("should render <Results />", () => {
    expect(wrapper.find(Results)).toHaveLength(1);
  });
  it("should render <Search />", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});

describe("snapshots", () => {
  const wrapper = mount(
    <Router>
      <MemoryRouter
        initialEntries={[
          {
            search: "",
            pathname: "/",
            state: { name: "josiah" },
            hash: "",
            ...location(10),
            key: "1",
          },
        ]}
      >
        <Discover location={location(10)} />
      </MemoryRouter>
    </Router>
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
