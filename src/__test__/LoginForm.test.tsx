import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import { LoginForm } from "../modules/Login/components/Form/LoginForm";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";

describe("Login Form component", () => {
  const wrapper = shallow(<LoginForm />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });

  it("should contains a form", () => {
    expect(wrapper.find(".login-form-container")).to.have.length(1);
  });

  it("should contains two inputs", () => {
    expect(wrapper.find(Input)).to.have.length(2);
  });

  it("should contains a submit button", () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
