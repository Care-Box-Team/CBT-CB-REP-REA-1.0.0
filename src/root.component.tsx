import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./modules/Login/page/LoginPage";
import "./sass/index.scss";
export default function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/client">
          <Redirect to="/client/login" />
        </Route>
        <Route exact={true} path="/client/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
