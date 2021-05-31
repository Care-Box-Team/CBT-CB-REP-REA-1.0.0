import React, { useState } from "react";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { EditProfileInformation } from "../components/EditProfileInformation/EditProfileInformation";
import { ProfileInformation } from "../components/ProfileInformation/ProfileInformation";
import "./ProfilePage.scss";

export const ProfilePage: React.FC = () => {
  const [isEditingMode, setEditingMode] = useState<boolean>(false);

  const changeEditionMode = (): void => {
    setEditingMode((prev) => !prev);
  };

  return (
    <Flex direction="column" className="profile-container">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className="profile-header"
      >
        <h2>Perfil</h2>
        {!isEditingMode && (
          <Button
            loading={false}
            onClick={changeEditionMode}
            text="Editar"
            type={"button"}
          />
        )}
        {isEditingMode && (
          <div aria-hidden="true" onClick={changeEditionMode}>
            <p className="view-information-btn">Cancelar</p>
          </div>
        )}
      </Flex>
      {!isEditingMode && <ProfileInformation />}
      {isEditingMode && <EditProfileInformation />}
    </Flex>
  );
};
