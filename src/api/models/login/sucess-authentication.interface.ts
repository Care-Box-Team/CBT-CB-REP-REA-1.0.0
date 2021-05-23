import { IClient } from "../client/client.interface";

export interface SuccessAuthenticationResponse {
  client?: IClient;
  message: string;
  status: number;
}
