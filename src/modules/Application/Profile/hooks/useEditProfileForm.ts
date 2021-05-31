import { useEffect, useState } from "react";
import { http } from "../../../../api/api";
import { SuccessRegisterResponse } from "../../../../api/models/register/sucess-register.interface";
import { HandleFormEvent } from "../../../../constant/dom-event";
import { InputProps } from "../../../../shared/Input/Input";
import { LocalStorage } from "../../../../utils/LocalStorage";

export const useEditProfileForm = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [addres, setAddres] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setLastname(localStorage.getItem("lastname"));
    setPhone(localStorage.getItem("phone"));
    setAddres(localStorage.getItem("address"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const nameInputProps: InputProps = {
    name: "name",
    onChange: (e) => {
      setName(e.target.value);
    },
    placeholder: "Nombre",
    type: "text",
    value: name,
  };

  const lastnameInputProps: InputProps = {
    name: "lastname",
    onChange: (e) => {
      setLastname(e.target.value);
    },
    placeholder: "Apellidos",
    type: "text",
    value: lastname,
  };

  const phoneInputProps: InputProps = {
    name: "phone",
    onChange: (e) => {
      setPhone(e.target.value);
    },
    placeholder: "Telefono",
    type: "text",
    value: phone,
  };

  const addressInputsProps: InputProps = {
    name: "address",
    onChange: (e) => {
      setAddres(e.target.value);
    },
    placeholder: "Direccion",
    type: "text",
    value: addres,
  };

  const emailInputProps: InputProps = {
    name: "email",
    onChange: (e) => {
      setEmail(e.target.value);
    },
    placeholder: "Email",
    type: "text",
    value: email,
  };

  const onSubmit = async (e: HandleFormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        adress: addres,
        email: email,
        lastNames: lastname,
        names: name,
        phone: phone,
      };
      const res = await http.put<SuccessRegisterResponse>(
        "/clients/updateProfile",
        body
      );
      LocalStorage.saveClient(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    nameInputProps,
    lastnameInputProps,
    addressInputsProps,
    phoneInputProps,
    emailInputProps,
    onSubmit,
    loading,
  };
};
