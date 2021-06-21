import { Suscription } from "./suscription.interface";

export interface SuccessSuscriptions {
  status: number;
  message: string;
  subscriptions: Suscription[];
}
