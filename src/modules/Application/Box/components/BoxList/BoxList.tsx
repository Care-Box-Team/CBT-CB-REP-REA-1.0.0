import React from "react";
import { BoxCard } from "../BoxCard/BoxCard";
import "./BoxList.scss";
const MOCK_BOX = [
  { name: "Box 1", id: 1, price: "S/.17,99" },
  { name: "Box 2", id: 2, price: "S/.17,99" },
  { name: "Box 3", id: 3, price: "S/.17,99" },
  { name: "Box 4", id: 4, price: "S/.17,99" },
  { name: "Box 5", id: 5, price: "S/.17,99" },
];

export const BoxList: React.FC = () => {
  return (
    <div className="list-box-container">
      <h1>Box de Aseo Personal</h1>
      <p>8 Resultados</p>
      <div className="list-boxs">
        {MOCK_BOX.map((e) => (
          <BoxCard name={e.name} id={e.id} price={e.price} key={e.id} />
        ))}
      </div>
    </div>
  );
};
