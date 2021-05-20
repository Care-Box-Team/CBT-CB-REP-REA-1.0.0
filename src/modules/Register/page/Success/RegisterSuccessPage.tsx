import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Flex } from "../../../../shared/Flex/Flex";
import { Spinner } from "../../../../shared/Spinner/Spinner";
import "./RegisterSuccessPage.scss";

export const RegisterSuccessPage: React.FC = () => {
  const [activateRedirectToHome, setActivate] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setActivate(true);
    }, 5000);
  }, []);
  if (activateRedirectToHome) {
    return <Redirect to="/client/home" />;
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="register-loading"
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <h3>Registro con éxito</h3>
        <p>
          Estamos recolectando sus datos, los redirigiremos a la página
          principal
        </p>
        <Spinner color={"#cecece"} width={"24px"} height={"24px"} />
      </Flex>
    </Flex>
  );
};
