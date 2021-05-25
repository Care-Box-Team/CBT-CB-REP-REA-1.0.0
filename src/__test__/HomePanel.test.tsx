import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { HomePanel } from "../modules/Application/Home/components/Panel/HomePanel";

describe("Home Panel component", () => {
  const wrapper = shallow(<HomePanel />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });
});
