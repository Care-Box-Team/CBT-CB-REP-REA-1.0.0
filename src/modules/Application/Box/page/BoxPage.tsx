import React from "react";
import { Flex } from "../../../../shared/Flex/Flex";
import { BoxList } from "../components/BoxList/BoxList";
import { BoxFilterSidebar } from "../components/Sidebar/BoxFilterSidebar";
import { IFilterParams, useFetchBox } from "../hooks/useFetchBox";
import "./BoxPage.scss";

export const BoxPage: React.FC = () => {
  const { fetchProducts, boxes,savedBoxes } = useFetchBox();

  const onFilterBox = async (params: IFilterParams): Promise<void> => {
    try {
      await fetchProducts(params);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex className="box-container">
      <Flex className="box-container__sidebar">
        <BoxFilterSidebar onFilterBox={onFilterBox} />
      </Flex>
      <Flex className="box-container__list">
        <BoxList boxes={boxes} savedBoxes={savedBoxes} />
      </Flex>
    </Flex>
  );
};
