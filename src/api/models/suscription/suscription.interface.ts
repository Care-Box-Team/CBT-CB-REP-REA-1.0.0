import { Box } from "../box/box.interface";

export interface Suscription {
  idSubscription: number;
  deliveryDate: string;
  deliveredThisMonth: boolean;
  deliveries: number;
  adress: string;
  price: number;
  box: Box;
}
