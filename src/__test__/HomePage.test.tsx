import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { HomePage } from "../modules/Application/Home/page/HomePage";
import { MemoryRouter } from "react-router";

describe("Home Page component", () => {
  const wrapper = shallow(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });
});
