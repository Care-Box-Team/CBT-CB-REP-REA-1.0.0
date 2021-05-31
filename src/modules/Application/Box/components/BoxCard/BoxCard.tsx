import React from "react";
import "./BoxCard.scss";
import BoxDefaulImage from "../../../../../assets/box-default.png";
import { Flex } from "../../../../../shared/Flex/Flex";
import { Box } from "../../../../../api/models/box/box.interface";
import { BoxSavedIcon } from "../../../../../shared/Icon/BoxSavedIcon";
import { useFetchSaveDefaultBox } from "../../hooks/useFetchBox";

interface IProps {
  box: Box;
  isSaved:boolean;
}
export const BoxCard: React.FC<IProps> = ({ box,isSaved }) => {
  const { saveDefaultBox } = useFetchSaveDefaultBox();

  const fetchSaveDefaultBox = () => {
    saveDefaultBox({ email: localStorage.getItem("email"), idBox: box.idBox });
  };
  return (
    <Flex
      justifyContent="space-between"
      direction="column"
      className="box-card-container"
    >
      <Flex className="image-container" justifyContent="center">
        <img src={BoxDefaulImage} alt="Default" />
      </Flex>
      <Flex
        alignItems="center"
        flexWrap="nowrap"
        justifyContent="space-between"
        className="description"
      >
        <Flex direction="column">
          <h4>{box.name} </h4>
          <p>S/.{box.price}</p>
        </Flex>
        <Flex onClick={fetchSaveDefaultBox} className="icon-container">
          <BoxSavedIcon isSaved={isSaved} height={24} width={24} />
        </Flex>
      </Flex>
    </Flex>
  );
};
