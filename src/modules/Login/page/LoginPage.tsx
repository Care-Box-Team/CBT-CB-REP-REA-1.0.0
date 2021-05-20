import React from "react";
import { Flex } from "../../../shared/Flex/Flex";
import Logo from "../../../assets/logo.png";
import { LoginForm } from "../components/Form/LoginForm";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
export const LoginPage: React.FC = () => {
  return (
    <Flex className="login-container">
      <div className="left-panel">
        <div className="login-logo">
          <img src={Logo} alt="" />
          <p>Consigue productos de aseo en un sitio</p>
        </div>
        <div className="login-title">
          <h3>Login</h3>
          <p>Ingrese sus credenciales</p>
        </div>
        <LoginForm />
        <div className="register-label">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/client/register"> Registráte aquí </Link>
          </p>
        </div>
      </div>
      <div className="right-panel" />
    </Flex>
  );
};
