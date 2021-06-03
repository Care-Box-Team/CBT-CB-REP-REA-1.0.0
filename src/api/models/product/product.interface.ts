import { Category } from "../category/category.interface";

export interface Product {
  brand: string;
  description: string;
  idProduct: number;
  name: string;
  price: number;
  category: Category;
  url: string;
}
