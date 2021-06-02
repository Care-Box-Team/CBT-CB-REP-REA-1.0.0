import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Navbar } from "../../../../shared/Navbar/Navbar";
import { BoxPage } from "../../Box/page/BoxPage";
import { BoxDetailPage } from "../../BoxDetail/pages/BoxDetailPage";
import { ProfilePage } from "../../Profile/page/ProfilePage";
import { BoxContrusction } from "../components/BoxConstruction/BoxConstruction";
import { HomePanel } from "../components/Panel/HomePanel";

export const MainPage: React.FC = () => {
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
        <Route exact={true} path={`${path}/profile`}>
          <ProfilePage />
        </Route>
        <Route exact={true} path={`${path}/boxs/:id`}>
          <BoxDetailPage />
        </Route>
      </Switch>
    </div>
  );
};
