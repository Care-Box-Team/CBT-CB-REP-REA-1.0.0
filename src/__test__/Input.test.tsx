import React from "react";
import { shallow } from "enzyme";
import { Input } from "../shared/Input/Input";

describe("Input component", () => {
  it("should be mounted", () => {
    const wrapper = shallow(
      <Input
        type="text"
        value="foo"
        placeholder={"foo"}
        onChange={(e) => {}}
        name="foo"
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
