import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../../../../api/models/box/box.interface";
import { Flex } from "../../../../shared/Flex/Flex";
import { useFetchBox } from "../../Box/hooks/useFetchBox";
import TruckLogo from "../../../../assets/Truck.svg";
import BoxProductLogo from "../../../../assets/box-product.png";
import "./BoxDetailPage.scss";
import { Button } from "../../../../shared/Button/Button";
import { BoxProductList } from "../components/ProdutList/BoxProductList";
import { ModalSuscriber } from "../components/Modal/ModalSuscriber";
import {
  useFetchSubscriptions,
  useFetchUnsubscribe,
} from "../hooks/useSuscriberBox";

export const BoxDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { boxes } = useFetchBox();
  const [box, setBox] = useState<Box>();
  const [showSuscriberModal, setShowSuscriberModal] = useState<boolean>(false);
  const { subscriptions, successSubscriptions } = useFetchSubscriptions();
  // const [isBoxSubscribed, setIsBoxSubscribed] = useState<boolean>(false);
  const { fetchUnsubscribe } = useFetchUnsubscribe();

  useEffect(() => {
    const targetBox = boxes.find((e) => e.idBox.toString() === id);
    setBox(targetBox);

    // const s =
    //   subscriptions.filter((subs) => subs.box.idBox === box.idBox).length > 0;
    // setIsBoxSubscribed(s);
  }, [id, boxes]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPressEscape);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPressEscape);
    };
  }, []);

  const handleUserKeyPressEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowSuscriberModal(false);
    }
  };

  const unsubscribe = (): void => {
    const actualSubscription = subscriptions.find(
      (subs) => subs.box.idBox === box.idBox
    );

    fetchUnsubscribe(actualSubscription.idSubscription).then(() => {
      window.location.reload();
    });
  };

  const suscriberModal = (): void => {
    setShowSuscriberModal(true);
  };

  const isBoxSubscribed = (): boolean => {
    return (
      subscriptions !== undefined &&
      subscriptions.filter((subs) => subs.box.idBox === box.idBox).length > 0
    );
  };

  if (box && successSubscriptions) {
    return (
      <>
        {showSuscriberModal && <ModalSuscriber box={box} />}
        <Flex flexWrap="nowrap" className="box-detail-container">
          <div className="left-column">
            <div>
              <h2 className="title-box">{box.name}</h2>
              <p className="price-box">S/. {box.price}</p>
            </div>
            <div>
              <Flex
                alignItems="center"
                className="sub"
                justifyContent="space-between"
              >
                <h4 className="suscription-title">SUSCRIPCIÓN</h4>
                {isBoxSubscribed() && (
                  <Button
                    onClick={unsubscribe}
                    loading={false}
                    text="Cancelar suscripción"
                    type="button"
                    className="button-unsubscribe"
                  />
                )}
              </Flex>
              <Flex
                className="suscription-container"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                {!isBoxSubscribed() ? (
                  <>
                    <img src={TruckLogo} alt="carebox" />
                    <div>
                      <h3>Súscribete a este Box</h3>
                      <p>
                        Gracias a la suscripción podrás obtener este box
                        mensualmente en la puerta de tu casa
                      </p>
                      <Button
                        onClick={suscriberModal}
                        loading={false}
                        text="Suscribirme"
                        type="button"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <img src={BoxProductLogo} alt="carebox" />
                    <Flex direction="column">
                      <h3>Enhorabuena</h3>
                      <p>Actualmente estás sucrito a este box</p>
                    </Flex>
                  </>
                )}
              </Flex>
            </div>
          </div>
          <Flex justifyContent="center" className="right-column">
            <BoxProductList products={box.products} />
          </Flex>
        </Flex>
      </>
    );
  }
  return <p>Cargando...</p>;
};
