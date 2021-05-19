import React, { useState } from "react";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { Input } from "../../../../shared/Input/Input";
import "./LoginForm.scss";
export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form className="login-form-container">
      <Flex direction="column" className="field">
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ingrese su correo electrónico"
          type="text"
          value={email}
        />
      </Flex>
      <Flex direction="column" className="field">
        <label htmlFor="password">Contraseña</label>
        <Input
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Ingrese su contraseña"
          type="password"
          isSecure={true}
          value={password}
        />
      </Flex>
      <Flex className="submit-btn">
        <Button loading={false} text={"Ingresar"} type={"submit"} />
      </Flex>
    </form>
  );
};
