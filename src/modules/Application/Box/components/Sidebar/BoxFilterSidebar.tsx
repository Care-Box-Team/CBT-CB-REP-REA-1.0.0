import React, { useState } from "react";
import { Button } from "../../../../../shared/Button/Button";
import { Flex } from "../../../../../shared/Flex/Flex";
import { Input, InputProps } from "../../../../../shared/Input/Input";
import { IFilterParams } from "../../hooks/useFetchBox";
import "./BoxFilterSidebar.scss";

interface IProps {
  onFilterBox(params: IFilterParams): void;
}

export const BoxFilterSidebar: React.FC<IProps> = ({ onFilterBox }) => {
  const [nameFilter, setNameFilter] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const nameInputProps: InputProps = {
    name: "name-box",
    onChange: (e) => {
      setNameFilter(e.target.value);
    },
    placeholder: "Ingrese el nombre del box",
    type: "text",
    value: nameFilter,
  };

  const minPriceInputProps: InputProps = {
    name: "min-price",
    onChange: (e) => {
      setMinPrice(parseFloat(e.target.value));
    },
    placeholder: "0",
    type: "text",
    value: minPrice.toString(),
  };

  const maxPriceInputProps: InputProps = {
    name: "max-price",
    onChange: (e) => {
      setMaxPrice(parseFloat(e.target.value));
    },
    placeholder: "0",
    type: "text",
    value: maxPrice.toString(),
  };

  const fetchFilter = (): void => {
    onFilterBox({ name: nameFilter, priceMax: maxPrice, priceMin: minPrice });
  };

  return (
    <Flex direction="column" className="sidebar-filter">
      <Flex direction="column" className="field">
        <h4>FILTRAR POR NOMBRE</h4>
        <Input {...nameInputProps} />
      </Flex>
      <Flex className="filter-section" direction="column">
        <h4>FILTRO POR PRECIO</h4>
        <Flex className="field" alignItems="center">
          <label htmlFor="min-price">Precio mínimo</label>
          <Input {...minPriceInputProps} />
        </Flex>
        <Flex className="field" alignItems="center">
          <label htmlFor="max-price">Precio máximo</label>
          <Input {...maxPriceInputProps} />
        </Flex>
      </Flex>
      <Flex>
        <Button
          onClick={fetchFilter}
          loading={false}
          text="Filtrar"
          type={"button"}
        />
      </Flex>
    </Flex>
  );
};
