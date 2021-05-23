import React, { useState } from "react";
import { Redirect } from "react-router";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { Input } from "../../../../shared/Input/Input";
import { useAuthentication } from "../../hooks/useAuthentication";
import "./LoginForm.scss";
export const LoginForm: React.FC = () => {
  const {
    emailInputProps,
    error,
    loading,
    onSubmit,
    passwordInputProps,
    success,
  } = useAuthentication();

  if (success) {
    return <Redirect to="/client/home" />;
  }
  return (
    <form onSubmit={onSubmit} className="login-form-container">
      <Flex direction="column" className="field">
        <label htmlFor="email">Email</label>
        <Input {...emailInputProps} />
      </Flex>
      <Flex direction="column" className="field">
        <label htmlFor="password">Contraseña</label>
        <Input {...passwordInputProps} />
      </Flex>
      {error && <p className="error">Las credenciales no son correctas.</p>}
      <Flex className="submit-btn">
        <Button loading={loading} text={"Ingresar"} type={"submit"} />
      </Flex>
    </form>
  );
};
