import React from "react";
import { Product } from "../../../../../api/models/product/product.interface";
import { BoxProductCard } from "../ProductCard/BoxProductCard";
import "./BoxProductList.scss";

interface IProps {
  products: Product[];
}
export const BoxProductList: React.FC<IProps> = ({ products }) => {
  return (
    <div className="box-products-include-container">
      {products.map((e) => (
        <BoxProductCard key={e.idProduct} product={e} />
      ))}
    </div>
  );
};
