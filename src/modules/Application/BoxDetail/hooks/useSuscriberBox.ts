import { useEffect, useState } from "react";
import { http } from "../../../../api/api";
import { ICreateSuscriptions } from "../../../../api/models/suscription/create-suscription.interface";
import { SuccessSuscriptions } from "../../../../api/models/suscription/success-suscription.interface";
import { Suscription } from "../../../../api/models/suscription/suscription.interface";
import { InputProps } from "../../../../shared/Input/Input";

export const useSuscribeBox = () => {
  const [creditCard, setCreditCard] = useState<string>("");
  const [ccv, setCCV] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");

  const creditCardInput: InputProps = {
    name: "credit-card",
    onChange: (e) => {
      setCreditCard(e.target.value);
    },
    placeholder: "1111 2222 3333 4444",
    type: "text",
    required: true,
    value: creditCard,
  };

  const ccvInput: InputProps = {
    name: "ccv",
    onChange: (e) => {
      setCCV(e.target.value);
    },
    placeholder: "123",
    required: true,
    type: "text",
    value: ccv,
  };

  const expiryDateInput: InputProps = {
    name: "expiry-date",
    onChange: (e) => {
      setExpiryDate(e.target.value);
    },
    required: true,
    placeholder: "mm/yy",
    type: "text",
    value: expiryDate,
  };

  const createSuscriptions = async (suscription: ICreateSuscriptions) => {
    try {
      await http.post("/subscriptions/create", suscription);
    } catch (error) {
      console.error(error);
    }
  };

  return { expiryDateInput, ccvInput, creditCardInput, createSuscriptions };
};

export const useFetchSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Suscription[]>([]);
  const [successSubscriptions, setSuccessSubscriptions] = useState<boolean>(
    false
  );
  useEffect(() => {
    async function fetchSuscriptions() {
      try {
        const res = await http.get<SuccessSuscriptions>(
          `/subscriptions/listByEmail?email=${localStorage.getItem("email")}`
        );

        setSubscriptions(res.data.subscriptions);
        setSuccessSubscriptions(true);
      } catch (error) {}
    }
    fetchSuscriptions();
  }, []);

  return { subscriptions, successSubscriptions };
};

export const useFetchUnsubscribe = () => {
  const fetchUnsubscribe = async (idSubscription: number): Promise<void> => {
    try {
      await http.delete(
        `/subscriptions/cancel?idSubscription=${idSubscription}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchUnsubscribe };
};
