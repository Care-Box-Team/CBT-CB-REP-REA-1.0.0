import React from "react";
import { shallow } from "enzyme";
import Root from "./root.component";
import { Redirect, Route } from "react-router";
import { LoginPage } from "./modules/Login/page/LoginPage";

describe("Root component", () => {
  it("should be container Login Page in Route", () => {
    const wrapper = shallow(<Root />);
    expect(
      wrapper.contains(
        <Route exact={true} path="/client/login">
          <LoginPage />
        </Route>
      )
    ).toBeTruthy();
  });
  it("should be container Root Page in Route", () => {
    const wrapper = shallow(<Root />);
    expect(
      wrapper.contains(
        <Route exact path="/client">
          <Redirect to="/client/login" />
        </Route>
      )
    ).toBeTruthy();
  });
});
