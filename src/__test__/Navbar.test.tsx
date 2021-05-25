import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../shared/Navbar/Navbar";
import { expect } from "chai";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "random-key",
  }),
  useRouteMatch: jest.fn().mockReturnValue({
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "random-key",
  }),
}));
describe("Navbar component", () => {
  const wrapper = shallow(<Navbar />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });

  it("should contains 4 items menu", () => {
    expect(wrapper.find("li")).to.have.length(4);
  });
});
