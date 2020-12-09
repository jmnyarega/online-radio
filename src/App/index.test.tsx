import React from "react";
import { shallow } from "enzyme";
import App from "./index";

const shallowWrapper = shallow(<App />);
it("renders without crashing", () => {
  shallowWrapper;
});
