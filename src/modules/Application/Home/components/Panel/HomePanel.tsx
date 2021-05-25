import React from "react";
import "./HomePanel.scss";
import Image from "../../../../../assets/FirstSection.svg";

export const HomePanel: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div>
          <h2>Carebox</h2>
          <p>
            Encuentra los mejores de productos de aseos en Box y te lo llevamos
            a tu domicilio
          </p>
          <button>Ir a la página</button>
        </div>
        <div>
          <img src={Image} alt="Carebox" />
        </div>
      </div>
    </section>
  );
};
