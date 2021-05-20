import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { RegisterSuccessPage } from "../modules/Register/page/Success/RegisterSuccessPage";
import { Spinner } from "../shared/Spinner/Spinner";

describe("Register success page component", () => {
  const wrapper = shallow(<RegisterSuccessPage />);

  it("should be mounted", () => {
    expect(wrapper).to.exist;
  });

  it("should contain spinner", () => {
    const SpinnerLoading = (
      <Spinner color={"#cecece"} width={"24px"} height={"24px"} />
    );
    expect(wrapper.contains(SpinnerLoading)).to.be.true;
  });

  it("should contain text confirmation", () => {
    const Title = <h3>Registro con éxito</h3>;
    expect(wrapper.contains(Title)).to.be.true;
  });
});
