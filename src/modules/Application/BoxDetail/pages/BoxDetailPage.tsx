import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../../../../api/models/box/box.interface";
import { Flex } from "../../../../shared/Flex/Flex";
import { useFetchBox } from "../../Box/hooks/useFetchBox";
import TruckLogo from "../../../../assets/Truck.svg";
import "./BoxDetailPage.scss";
import { Button } from "../../../../shared/Button/Button";
import { BoxProductList } from "../components/ProdutList/BoxProductList";

export const BoxDetailPage: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const { boxes } = useFetchBox();
  const [box, setBox] = useState<Box>();
  useEffect(() => {
    const targetBox = boxes.find((e) => e.idBox.toString() === id);
    setBox(targetBox);
  }, [id, boxes]);
  if (box) {
    return (
      <Flex flexWrap="nowrap" className="box-detail-container">
        <div className="left-column">
          <div>
            <h2 className="title-box">{box.name}</h2>
            <p className="price-box">S/. {box.price}</p>
          </div>
          <div>
            <h4 className="suscription-title">SUSCRIPCIÓN</h4>
            <Flex
              className="suscription-container"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="nowrap"
            >
              <img src={TruckLogo} alt="carebox" />
              <div>
                <h3>Súscribete a este Box</h3>
                <p>
                  Gracias a la suscripción podrás obtener este box mensualmente
                  en la puerta de tu casa
                </p>
                <Button loading={false} text="Suscribirme" type="button" />
              </div>
            </Flex>
          </div>
        </div>
        <Flex justifyContent="center" className="right-column">
          <BoxProductList products={box.products} />
        </Flex>
      </Flex>
    );
  }
  return <p>Cargando...</p>;
};
