import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomePage } from "./modules/Application/Home/page/HomePage";
import { LoginPage } from "./modules/Login/page/LoginPage";
import { RegisterPage } from "./modules/Register/page/Register/RegisterPage";
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
        <Route exact={true} path="/client/register">
          <RegisterPage />
        </Route>
        <Route path="/client/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
