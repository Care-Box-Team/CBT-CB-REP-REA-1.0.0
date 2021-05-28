import { useEffect, useState } from "react";
import { http } from "../../../../api/api";

export interface IFilterParams {
  name: string;
  priceMax: number;
  priceMin: number;
}
export const useFetchBox = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  async function fetchProducts(params?: IFilterParams) {
    console.log("lleangod.");
    setLoading(true);
    setError(false);
    setSuccess(false);
    try {
      if (params.name && !(params.priceMax && params.priceMin)) {
        await http.get(`/boxes/listDefaultAndName?name=${params.name}`);
      } else if (params.name && params.priceMax && params.priceMin) {
        await http.get(
          `/boxes/listDefaultAndNameAndPriceMinAndPriceMax?name=${params.name}&priceMax=${params.priceMax}&priceMin=${params.priceMin}`
        );
      } else if (!params.name && params.priceMax && params.priceMin) {
        await http.get(
          `/boxes/listDefaultAndPriceMinAndPriceMax?priceMax=${params.priceMax}&priceMin=${params.priceMin}`
        );
      } else {
        await http.get("/boxes/listDefault");
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

  return { loading, error, success, fetchProducts };
};
