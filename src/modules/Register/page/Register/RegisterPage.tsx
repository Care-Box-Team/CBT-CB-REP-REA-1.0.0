import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex } from "../../../../shared/Flex/Flex";
import { BackArrow } from "../../../../shared/Icon/BackArrow";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { RegisterSuccessPage } from "../Success/RegisterSuccessPage";

import "./RegisterPage.scss";

export const RegisterPage: React.FC = () => {
  const [showSucessPage, setSuccessPage] = useState<boolean>(false);

  const showLoadingPage = () => {
    setSuccessPage(true);
  };

  if (showSucessPage) {
    return <RegisterSuccessPage />;
  }
  return (
    <div className="register-container">
      <div className="back-arrow-container">
        <Link to="/client/login">
          <Flex alignItems="center">
            <BackArrow color={"#7a7a7a"} width={16} height={16} />
            <p>Regresar </p>
          </Flex>
        </Link>
      </div>
      <div className="title-form">
        <h3>Registro</h3>
        <p>Por favor complete todos los campos para registrarse</p>
      </div>
      <RegisterForm showSuccessPage={showLoadingPage} />
    </div>
  );
};
