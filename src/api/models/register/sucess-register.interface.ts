import { IClient } from "../client/client.interface";

export interface SuccessRegisterResponse {
  client: IClient;
  message: string;
  status: number;
}
