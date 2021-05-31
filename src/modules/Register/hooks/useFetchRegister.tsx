import { useState } from "react";
import { HandleFormEvent } from "../../../constant/dom-event";
import { InputProps } from "../../../shared/Input/Input";
import { http } from "../../../api/api";
import { ICreateRegister } from "../../../api/models/register/create-register.interface";
import { LocalStorage } from "../../../utils/LocalStorage";
import { SuccessRegisterResponse } from "../../../api/models/register/sucess-register.interface";
export const useFetchRegister = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const nameInputProps: InputProps = {
    name: "name",
    onChange: (e) => {
      setName(e.target.value);
    },
    placeholder: "Ingrese sus nombres",
    type: "text",
    value: name,
    required: true,
  };

  const lastnameInputProps: InputProps = {
    name: "lastname",
    onChange: (e) => {
      setLastName(e.target.value);
    },
    placeholder: "Ingrese sus apellidos",
    type: "text",
    value: lastname,
    required: true,
  };

  const phoneInputProps: InputProps = {
    name: "phone",
    onChange: (e) => {
      setPhone(e.target.value);
    },
    placeholder: "Ingrese su teléfono",
    type: "text",
    value: phone,
    required: true,
  };

  const adressInputProps: InputProps = {
    name: "adress",
    onChange: (e) => {
      setAdress(e.target.value);
    },
    placeholder: "Ingrese su dirección",
    type: "text",
    value: adress,
    required: true,
  };

  const emailInputProps: InputProps = {
    name: "email",
    onChange: (e) => {
      setEmail(e.target.value);
    },
    placeholder: "Ingrese su email",
    type: "text",
    value: email,
    required: true,
  };

  const passwordInputProps: InputProps = {
    name: "password",
    onChange: (e) => {
      setPassword(e.target.value);
    },
    placeholder: "Ingrese su contraseña",
    type: "password",
    value: password,
    required: true,
    isSecure: true,
  };

  const confirmPasswordInputProps: InputProps = {
    name: "confirm-password",
    onChange: (e) => {
      setConfirmPassword(e.target.value);
    },
    placeholder: "Repita su contraseña",
    type: "password",
    value: confirmPassword,
    required: true,
    isSecure: true,
  };

  const isValidForSubmit = (): boolean => {
    const allFieldsComplete =
      name &&
      lastname &&
      phone &&
      adress &&
      email &&
      password &&
      confirmPassword;
    const passwordEqualsConfirmation = password === confirmPassword;
    return allFieldsComplete && passwordEqualsConfirmation;
  };
  const onSubmit = async (e: HandleFormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload: ICreateRegister = {
        adress: adress,
        email: email,
        lastNames: lastname,
        names: name,
        password: password,
        phone: phone,
      };
      const res = await http.post<SuccessRegisterResponse>(
        "/login/clientRegister",
        payload
      );
      LocalStorage.saveClient(res.data);
      setLoading(false);
    } catch (_) {
      setLoading(false);
    }
  };
  return {
    isValidForSubmit,
    loading,
    nameInputProps,
    lastnameInputProps,
    phoneInputProps,
    emailInputProps,
    adressInputProps,
    passwordInputProps,
    confirmPasswordInputProps,
    onSubmit,
  };
};
