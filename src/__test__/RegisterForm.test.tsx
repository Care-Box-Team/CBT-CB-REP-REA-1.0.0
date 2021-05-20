import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { RegisterForm } from "../modules/Register/components/Form/RegisterForm";
import { Input } from "../shared/Input/Input";

describe("Register Form component", () => {
  const onSubmit = (): void => {};
  const wrapper = shallow(<RegisterForm showSuccessPage={onSubmit} />);

  it("should be mounted", () => {
    expect(wrapper).to.be.exist;
  });

  it("should contains 7 inputs", () => {
    expect(wrapper.find(Input)).to.have.length(7);
  });
});
