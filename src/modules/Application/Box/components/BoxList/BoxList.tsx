import React from "react";
import { Box } from "../../../../../api/models/box/box.interface";
import { BoxCard } from "../BoxCard/BoxCard";
import "./BoxList.scss";

interface IProps {
  boxes: Box[];
  savedBoxes: Box[];
}

export const BoxList: React.FC<IProps> = ({ boxes, savedBoxes }) => {
  const isBoxSaved = (boxTarget: Box): boolean => {
    return savedBoxes.filter((c) => c.idBox === boxTarget.idBox).length > 0;
  };
  return (
    <div className="list-box-container">
      <h1>Box de Aseo Personal</h1>
      <p>8 Resultados</p>
      <div className="list-boxs">
        {boxes.map((e) => (
          <BoxCard isSaved={isBoxSaved(e)} box={e} key={e.idBox} />
        ))}
      </div>
    </div>
  );
};
