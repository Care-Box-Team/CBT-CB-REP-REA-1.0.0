import React from "react";
import { shallow } from "enzyme";
import { Flex } from "../shared/Flex/Flex";

describe("Flex component", () => {
  it("should be mounted", () => {
    const wrapper = shallow(<Flex />);
    expect(wrapper).toBeTruthy();
  });

  it("should be render children", () => {
    const Child: React.FC = () => (
      <>
        <p>Flex</p>
      </>
    );
    const wrapper = shallow(
      <Flex>
        <Child />
      </Flex>
    );
    expect(wrapper.contains(<Child />)).toBeTruthy();
  });
});
