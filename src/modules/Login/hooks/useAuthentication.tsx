import { useState } from "react";

export const useAuthentication = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  setPassword("w");
  setEmail("w");
  return { email, password };
};
