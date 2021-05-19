import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../modules/Login/page/LoginPage";
import { LoginForm } from "../modules/Login/components/Form/LoginForm";
import { expect } from "chai";

describe("Login Page component", () => {
  const wrapper = shallow(<LoginPage />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });

  it("should be contains left panel", () => {
    expect(wrapper.find(".left-panel")).to.have.length(1);
  });

  it("should be contains right panel", () => {
    expect(wrapper.find(".right-panel")).to.have.length(1);
  });

  it("should be left panel contains form", () => {
    expect(wrapper.contains(<LoginForm />)).to.be.true;
  });
});
