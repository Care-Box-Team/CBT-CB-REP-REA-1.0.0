import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { RegisterPage } from "../modules/Register/page/Register/RegisterPage";
import { RegisterForm } from "../modules/Register/components/Form/RegisterForm";

describe("Register Page component", () => {
  const wrapper = shallow(<RegisterPage />);
  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });

  it("should have a forma", () => {
    expect(wrapper.find(RegisterForm)).to.have.length(1);
  });
});
