import React from "react";
import { Flex } from "../../../../../shared/Flex/Flex";
import { Input } from "../../../../../shared/Input/Input";
import { Button } from "../../../../../shared/Button/Button";
import CardImage from "../../../../../assets/credit-card.png";
import { useSuscribeBox } from "../../hooks/useSuscriberBox";
import "./ModalSuscriber.scss";
import { HandleFormEvent } from "../../../../../constant/dom-event";
import { ICreateSuscriptions } from "../../../../../api/models/suscription/create-suscription.interface";
import { Box } from "../../../../../api/models/box/box.interface";

interface IProps {
  box: Box;
}
export const ModalSuscriber: React.FC<IProps> = ({ box }) => {
  const {
    ccvInput,
    createSuscriptions,
    creditCardInput,
    expiryDateInput,
  } = useSuscribeBox();

  const onSubmit = async (e: HandleFormEvent) => {
    e.preventDefault();
    try {
      const suscription: ICreateSuscriptions = {
        adress: localStorage.getItem("address"),
        deliveryDate: new Date().toString(),
        email: localStorage.getItem("email"),
        idBox: box.idBox,
        price: box.price,
      };
      await createSuscriptions(suscription);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className="modal-suscriber-container"
    >
      <Flex className="card" alignItems="center" direction="column">
        <img width={94} src={CardImage} alt="" />
        <div>
          <h2>Realiza tu compra</h2>
          <p className="title-description">
            Completa todos los campos para proceder el pago.
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <Flex direction="column" className="field">
            <label htmlFor="credit-card">Tarjeta de Crédito</label>
            <Input {...creditCardInput} />
          </Flex>
          <Flex
            justifyContent="space-between"
            flexWrap="nowrap"
            className="field-group"
          >
            <Flex className="field" direction="column">
              <label htmlFor="ccv">CCV</label>
              <Input {...ccvInput} />
            </Flex>
            <Flex className="field" direction="column">
              <label htmlFor="expiry-date">Fecha de caducidad</label>
              <Input {...expiryDateInput} />
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Button
              className="submit-btn"
              type="submit"
              text="Pagar"
              loading={false}
            />
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
