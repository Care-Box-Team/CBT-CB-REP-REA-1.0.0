import { useState } from "react";
import { http } from "../../../api/api";
import { AuthenticationRequest } from "../../../api/models/login/authentication.interface";
import { SuccessRegisterResponse } from "../../../api/models/register/sucess-register.interface";
import { HandleFormEvent, HandleInputEvent } from "../../../constant/dom-event";
import { InputProps } from "../../../shared/Input/Input";

export const useAuthentication = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleEmail = (e: HandleInputEvent): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: HandleInputEvent): void => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: HandleFormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const authentication: AuthenticationRequest = {
        email,
        password,
      };
      const res = await http.post<SuccessRegisterResponse>(
        "/login/clientLogin",
        authentication
      );
      if (res.data.status === 1) {
        setLoading(false);
        setSuccess(true);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const emailInputProps: InputProps = {
    name: "email",
    onChange: (e) => {
      handleEmail(e);
    },
    placeholder: "Ingrese su correo electrónico",
    type: "text",
    value: email,
  };

  const passwordInputProps: InputProps = {
    name: "password",
    onChange: (e) => {
      handlePassword(e);
    },
    placeholder: "Ingrese su contraseña",
    type: "password",
    isSecure: true,
    value: password,
  };

  return {
    loading,
    success,
    error,
    emailInputProps,
    passwordInputProps,
    onSubmit,
  };
};
