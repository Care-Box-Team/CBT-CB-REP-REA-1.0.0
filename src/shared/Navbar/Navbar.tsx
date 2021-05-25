import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HomeRouter } from "../../constant/home-routes";
import { Flex } from "../Flex/Flex";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
  let { pathname } = useLocation();
  let { url } = useRouteMatch();

  const isPathSowing = (actualPath): string => {
    return pathname === actualPath ? "active-link" : "no-active-link";
  };

  return (
    <header className="header">
      <Flex
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <div className="header-logo">
          <img src={Logo} alt="Carebox" />
        </div>
        <Flex className="menu-items-container">
          <li className={isPathSowing(HomeRouter.Inicio)}>
            <Link to={`${url}`}>Inicio</Link>
          </li>
          <li className={isPathSowing(HomeRouter.Box)}>
            <Link to={`/client/home/boxs`}>Box</Link>
          </li>
          <li className={isPathSowing(HomeRouter["Mis Box"])}>
            <Link to={`${url}/my-box`}>Mis Box</Link>
          </li>
          <li className={isPathSowing(HomeRouter.Perfil)}>
            <Link to={`${url}/profile`}>Mi Perfil</Link>
          </li>
        </Flex>
      </Flex>
    </header>
  );
};
