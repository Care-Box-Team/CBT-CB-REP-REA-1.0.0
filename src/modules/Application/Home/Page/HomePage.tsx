import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Navbar } from "../../../../shared/Navbar/Navbar";
import { BoxPage } from "../../Box/page/BoxPage";
import { BoxContrusction } from "../components/BoxConstruction/BoxConstruction";
import { HomePanel } from "../components/Panel/HomePanel";

export const HomePage: React.FC = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact={true}
          path={`${path}`}
          render={() => (
            <>
              <HomePanel />
              <BoxContrusction />
            </>
          )}
        ></Route>
        <Route exact={true} path={`${path}/boxs`}>
          <BoxPage />
        </Route>
      </Switch>
    </div>
  );
};
