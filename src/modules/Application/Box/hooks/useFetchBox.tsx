import { useEffect, useState } from "react";
import { http } from "../../../../api/api";
import { Box } from "../../../../api/models/box/box.interface";
import { SuccessProductDefault } from "../../../../api/models/box/sucess-product-default.interface";

export interface IFilterParams {
  name: string;
  priceMax: number;
  priceMin: number;
}
export const useFetchBox = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [boxes, setBoxes] = useState<Box[]>([]);
  async function fetchProducts(params?: IFilterParams) {
    setLoading(true);
    setError(false);
    setSuccess(false);
    try {
      if (params === undefined) {
        const res = await http.get<SuccessProductDefault>("/boxes/listDefault");
        setBoxes(res.data.boxes);
      }
      if (params.name && !(params.priceMax && params.priceMin)) {
        const res = await http.get<SuccessProductDefault>(
          `/boxes/listDefaultAndName?name=${params.name}`
        );
        setBoxes(res.data.boxes);
      } else if (params.name && params.priceMax && params.priceMin) {
        const res = await http.get<SuccessProductDefault>(
          `/boxes/listDefaultAndNameAndPriceMinAndPriceMax?name=${params.name}&priceMax=${params.priceMax}&priceMin=${params.priceMin}`
        );
        setBoxes(res.data.boxes);
      } else if (!params.name && params.priceMax && params.priceMin) {
        const res = await http.get<SuccessProductDefault>(
          `/boxes/listDefaultAndPriceMinAndPriceMax?priceMax=${params.priceMax}&priceMin=${params.priceMin}`
        );
        setBoxes(res.data.boxes);
      }
      setSuccess(true);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, error, success, fetchProducts, boxes, setBoxes };
};
