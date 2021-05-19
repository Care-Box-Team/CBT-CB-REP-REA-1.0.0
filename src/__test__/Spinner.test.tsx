import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "../shared/Spinner/Spinner";

describe("Spinner component", () => {
  it("should be mounted", () => {
    const wrapper = shallow(
      <Spinner color={"#ff4343"} height="40px" width="40px" />
    );
    expect(wrapper).toBeTruthy();
  });
});
