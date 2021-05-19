import React from "react";
import { shallow } from "enzyme";
import { Button } from "../shared/Button/Button";
import { Spinner } from "../shared/Spinner/Spinner";

describe("Button component", () => {
  it("should be mounted", () => {
    const wrapper = shallow(
      <Button loading={false} text={"Ir"} type={"button"} />
    );
    expect(wrapper).toBeTruthy();
  });

  it("should be render text", () => {
    const wrapper = shallow(
      <Button loading={false} text={"Enviar"} type={"button"} />
    );
    expect(wrapper.contains("Enviar")).toBeTruthy();
  });
  it("should be render spinner if loading", () => {
    const wrapper = shallow(
      <Button loading={true} text={"Enviar"} type={"button"} />
    );
    const spinner = (
      <Spinner color={"#ffffff"} width={"20px"} height={"20px"} />
    );
    expect(wrapper.contains(spinner)).toBeTruthy();
  });
});
