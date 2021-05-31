import React from "react";
import "./BoxCard.scss";
import BoxDefaulImage from "../../../../../assets/box-default.png";
import { Flex } from "../../../../../shared/Flex/Flex";
import { Box } from "../../../../../api/models/box/box.interface";

interface IProps {
  box: Box;
}
export const BoxCard: React.FC<IProps> = ({ box }) => {
  return (
    <Flex
      justifyContent="space-between"
      direction="column"
      className="box-card-container"
    >
      <Flex className="image-container" justifyContent="center">
        <img src={BoxDefaulImage} alt="Default" />
      </Flex>
      <Flex className="description" direction="column">
        <h4>{box.name} </h4>
        <p>S/.{box.price}</p>
      </Flex>
    </Flex>
  );
};
