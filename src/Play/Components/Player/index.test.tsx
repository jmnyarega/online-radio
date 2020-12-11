import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Player from "./index";
import { location } from "../../../tests/__mocks__/data";
import Mute from "../../../Common/mute";

let props = {
  currentStation: location(2).data,
  onError: jest.fn(),
  onPlay: jest.fn(),
  url: "http://test/fake-url",
  onPause: jest.fn(),
  onEnded: jest.fn(),
  error: false,
  playing: true,
  volume: 5,
  handleVolume: jest.fn(),
  onMute: jest.fn(),
  mute: false,
  Audio: {
    play: jest.fn(),
  },
};

describe("Player renders without crashing", () => {
  it("Player renders without crashing", () => {
    expect(shallow(<Player {...props} />));
  });
});

describe("sub-components renders without crashing", () => {
  const wrapper = mount(<Player {...props} />);

  it("Mute renders without crashing", () => {
    expect(wrapper.find(Mute)).toHaveLength(1);
  });
});

describe("audio tag", () => {
  const wrapper = mount(<Player {...props} />);

  it("audio tag gets title from props", () => {
    expect(wrapper.find("audio").instance()?.title).toBe(
      props.currentStation.name
    );
  });

  it("audio tag gets src from props", () => {
    expect(wrapper.find("audio").instance()?.src).toBe(props.url);
  });
});

describe("range tag", () => {
  const wrapper = mount(<Player {...props} />);

  it("range input receives corrent range value", () => {
    expect(wrapper.find(".radio__range-volume").instance()?.value).toBe(
      props.volume.toString()
    );
  });
});

describe("snapshots", () => {
  const tree = toJson(mount(<Player {...props} />));
  expect(tree).toMatchSnapshot();
});
