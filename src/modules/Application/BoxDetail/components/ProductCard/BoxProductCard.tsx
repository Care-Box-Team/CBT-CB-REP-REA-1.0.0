import React from "react";
import { Product } from "../../../../../api/models/product/product.interface";
import { Flex } from "../../../../../shared/Flex/Flex";
import "./BoxProductCard.scss";

interface IProps {
  product: Product;
}

export const BoxProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="box-product-card">
      <Flex
        alignItems="center"
        justifyContent="center"
        className="image-container"
      >
        <img src={product.url} alt={product.brand} />
      </Flex>
      <p className="product-name">{product.name}</p>
      <p className="brand-name">{product.brand}</p>
    </div>
  );
};
