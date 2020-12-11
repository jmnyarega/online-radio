import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Results from "./index";
import { location } from "../../../tests/__mocks__/data";
import Loader from "../../../Common/Loader";

const locationProps = location(10);

const props = {
  loading: false,
  stationNames: locationProps.stationNames,
  stationUrls: locationProps.stationUrls,
};

describe("<Results /> should render without crashing", () => {
  it("results component", () => {
    expect(shallow(<Results {...props} />));
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
        <Results {...props} />
      </MemoryRouter>
    </Router>
  );
  it("should render <Loader />", () => {
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});

describe("correct data", () => {
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
        <Results {...props} />
      </MemoryRouter>
    </Router>
  );
  it("should display correct number of stations", () => {
    expect(wrapper.find(".results-lists")).toHaveLength(
      locationProps.stationNames.length
    );
  });
});

describe("correct amount data", () => {
  const customProps = {
    ...props,
    stationNames: location(1).stationNames,
  };
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
        <Results {...customProps} />
      </MemoryRouter>
    </Router>
  );
  it("should display correct name of station", () => {
    expect(wrapper.find(".results-lists").text()).toBe(
      locationProps.stationNames[0].name
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
            pathname: "/",
            state: { name: "josiah" },
            hash: "",
            ...location(10),
            key: "1",
          },
        ]}
      >
        <Results {...props} />
      </MemoryRouter>
    </Router>
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
