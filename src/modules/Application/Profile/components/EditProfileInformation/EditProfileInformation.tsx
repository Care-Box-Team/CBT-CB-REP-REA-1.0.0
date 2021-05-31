import React from "react";
import { HandleFormEvent } from "../../../../../constant/dom-event";
import { Button } from "../../../../../shared/Button/Button";
import { Flex } from "../../../../../shared/Flex/Flex";
import { Input } from "../../../../../shared/Input/Input";
import { useEditProfileForm } from "../../hooks/useEditProfileForm";
import "./EditProfileInformation.scss";

export const EditProfileInformation: React.FC = () => {
  const {
    addressInputsProps,
    lastnameInputProps,
    nameInputProps,
    phoneInputProps,
    onSubmit,
    loading,
  } = useEditProfileForm();

  const updateProfile = async (e: HandleFormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await onSubmit(e);
      window.location.reload();
    } catch (error) {
      console.error("");
    }
  };
  return (
    <form onSubmit={updateProfile} className="form-container-edit-user">
      <Flex
        className="field-group"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Flex direction="column" className="field">
          <label htmlFor="name">Nombres</label>
          <Input {...nameInputProps} />
        </Flex>
        <Flex direction="column" className="field rigth-field">
          <label htmlFor="lastname">Apellidos</label>
          <Input {...lastnameInputProps} />
        </Flex>
      </Flex>
      <Flex
        className="field-group"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Flex direction="column" className="field">
          <label htmlFor="phone">Teléfono</label>
          <Input {...phoneInputProps} />
        </Flex>
        <Flex direction="column" className="field rigth-field">
          <label htmlFor="address">Dirección</label>
          <Input {...addressInputsProps} />
        </Flex>
      </Flex>
      <Flex
        className="field-group"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Flex direction="column" className="field">
          <p className="label">Email</p>
          <p>{localStorage.getItem("email")}</p>
        </Flex>
        <Flex direction="column" className="field rigth-field">
          <p className="label">Contraseña</p>
          <p>*****</p>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Button loading={loading} text={"Guardar Cambios"} type={"submit"} />
      </Flex>
    </form>
  );
};
