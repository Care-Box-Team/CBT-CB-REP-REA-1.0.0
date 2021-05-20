import React from "react";
import { HandleFormEvent } from "../../../../constant/dom-event";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { Input } from "../../../../shared/Input/Input";
import { useFetchRegister } from "../../hooks/useFetchRegister";
import "./RegisterForm.scss";

interface IProps {
  showSuccessPage(): void;
}

export const RegisterForm: React.FC<IProps> = ({ showSuccessPage }) => {
  const {
    adressInputProps,
    emailInputProps,
    lastnameInputProps,
    nameInputProps,
    confirmPasswordInputProps,
    passwordInputProps,
    phoneInputProps,
    isValidForSubmit,
    loading,
    onSubmit,
  } = useFetchRegister();

  const registerSubmit = async (e: HandleFormEvent): Promise<void> => {
    try {
      await onSubmit(e);
      showSuccessPage();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerSubmit} className="register-form">
        <Flex
          className="container-field"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex className="field" direction="column">
            <label htmlFor="name">Nombres</label>
            <Input {...nameInputProps} />
          </Flex>
          <Flex className="field" direction="column">
            <label htmlFor="lastname">Apellidos</label>
            <Input {...lastnameInputProps} />
          </Flex>
        </Flex>
        <Flex
          className="container-field"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex className="field" direction="column">
            <label htmlFor="lastname">Teléfono</label>
            <Input {...phoneInputProps} />
          </Flex>
          <Flex className="field" direction="column">
            <label htmlFor="lastname">Dirección</label>
            <Input {...adressInputProps} />
          </Flex>
        </Flex>
        <Flex className="container-field">
          <Flex className="field large" direction="column">
            <label htmlFor="lastname">Email</label>
            <Input {...emailInputProps} />
          </Flex>
        </Flex>
        <Flex
          className="container-field"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex className="field" direction="column">
            <label htmlFor="lastname">Contraseña</label>
            <Input {...passwordInputProps} />
          </Flex>
          <Flex className="field" direction="column">
            <label htmlFor="lastname">Confirmar contraseña</label>
            <Input {...confirmPasswordInputProps} />
          </Flex>
        </Flex>
        <Flex className="submit-button" justifyContent="center">
          <Button
            disable={!isValidForSubmit()}
            loading={loading}
            text="Registrar"
            type={"submit"}
          />
        </Flex>
      </form>
    </div>
  );
};
