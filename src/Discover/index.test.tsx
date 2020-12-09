import React from "react";
import { shallow } from "enzyme";
import { Home } from "./index";
import Search from "../Common/search";
import Loader from "../Common/Loader";

const shallowWrapper = shallow(<Home />);

shallowWrapper.setProps({
  location: { stationNames: [], stationUrls: [], data: { country: "" } },
});

describe("<Discover />", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(() => [[1, 2, 3, 4], setState]);
  it("search component", () => {
    expect(shallowWrapper.find(Search)).toHaveLength(1);
  });

  it("Loader component", () => {
    expect(shallowWrapper.find(Loader)).toHaveLength(1);
  });

  it("select country", () => {
    //@ts-ignore
    shallowWrapper.find(".search-input").prop("onChange")({
      //@ts-ignore
      currentTarget: { value: "kenya" },
    });
    expect(setState).toHaveBeenCalledTimes(0);
  });
});
