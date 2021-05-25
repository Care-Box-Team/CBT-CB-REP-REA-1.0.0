import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { BoxContrusction } from "../modules/Application/Home/components/BoxConstruction/BoxConstruction";

describe("Box Construction component", () => {
  const wrapper = shallow(<BoxContrusction />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });
});
