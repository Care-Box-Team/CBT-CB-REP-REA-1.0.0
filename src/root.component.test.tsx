import React from "react";
import { shallow } from "enzyme";
import Root from "./root.component";
import { Redirect, Route } from "react-router";
import { LoginPage } from "./modules/Login/page/LoginPage";
import { expect } from "chai";

describe("Root component", () => {
  const wrapper = shallow(<Root />);
  it("should be container Login Page in Route", () => {
    expect(
      wrapper.contains(
        <Route exact={true} path="/client/login">
          <LoginPage />
        </Route>
      )
    ).to.be.true;
  });
  it("should be container Root Page in Route", () => {
    expect(
      wrapper.contains(
        <Route exact path="/client">
          <Redirect to="/client/login" />
        </Route>
      )
    ).to.be.true;
  });

  it("shoudl contains 4 routes", () => {
    expect(wrapper.find(Route)).to.have.length(4);
  });
});
