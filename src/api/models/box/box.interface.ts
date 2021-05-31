import { Product } from "../product/product.interface";

export interface Box {
  idBox: number;
  name: string;
  personalized: boolean;
  price: number;
  products: Product[];
}
