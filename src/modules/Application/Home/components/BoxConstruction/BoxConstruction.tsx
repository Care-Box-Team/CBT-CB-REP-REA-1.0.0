import React from "react";
import Imagen from "../../../../../assets/SecondSection.png";
import "./BoxConstruction.scss";
export const BoxContrusction: React.FC = () => {
  return (
    <section className="boxContainer">
      <div>
        <img src={Imagen} alt="Carebox" />
      </div>
      <div className="description">
        <h2>Arma tu box</h2>
        <p>Complemento con elementos y personaliza tu box</p>
      </div>
    </section>
  );
};
