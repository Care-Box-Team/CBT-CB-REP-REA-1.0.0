import React from "react";
import { Flex } from "../../../../../shared/Flex/Flex";
import "./ProfileInformation.scss";
export const ProfileInformation: React.FC = () => {
  return (
    <Flex className="profile-information-container" direction="column">
      <Flex
        className="field-group"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Flex direction="column" className="field">
          <p className="label">Nombres</p>
          <p>{localStorage.getItem("name")}</p>
        </Flex>
        <Flex direction="column" className="field rigth-field">
          <p className="label">Apellidos</p>
          <p>{localStorage.getItem("lastname")}</p>
        </Flex>
      </Flex>
      <Flex
        className="field-group"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Flex direction="column" className="field">
          <p className="label">Teléfono</p>
          <p>{localStorage.getItem("phone")}</p>
        </Flex>
        <Flex direction="column" className="field rigth-field">
          <p className="label">Dirección</p>
          <p>{localStorage.getItem("address")}</p>
        </Flex>
      </Flex>
      <Flex
        className="field-group"
        justifyContent="space-between"
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
    </Flex>
  );
};
