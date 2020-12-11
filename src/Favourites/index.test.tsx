import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import Favourites from "./index";
import { location } from "../tests/__mocks__/data";

const props = {
  likedItems: location(3).stationNames,
};

describe("renders <Favourites /> without crashing", () => {
  it("should never crash", () => {
    expect(shallow(<Favourites />));
  });
});

describe("Test favourite lists", () => {
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
          },
        ]}
      >
        <Favourites {...props} />
      </MemoryRouter>
    </Router>
  );
  it("number of lists equal to array length", () => {
    expect(wrapper.find(".mostlistened-row__line")).toHaveLength(
      props.likedItems.length
    );
  });
});

describe("Test one favourite list", () => {
  const props = location(1).stationNames;
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
          },
        ]}
      >
        <Favourites likedItems={props} />
      </MemoryRouter>
    </Router>
  );
  it("correct name is displayed", () => {
    expect(wrapper.find(".mostlistened__radio-name").instance().innerHTML).toBe(
      props[0].name
    );
  });
  it("correct name is displayed", () => {
    expect(wrapper.find(".mostlistened__country").instance().innerHTML).toBe(
      props[0].country
    );
  });
  it("correct name is displayed", () => {
    expect(wrapper.find(".mostlistened__rate").instance().innerHTML).toBe(
      `${props[0].bitrate}kbps`
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
        <Favourites {...props} />
      </MemoryRouter>
    </Router>
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
