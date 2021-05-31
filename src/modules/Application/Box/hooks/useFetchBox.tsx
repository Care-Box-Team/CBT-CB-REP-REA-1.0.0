import { useEffect, useState } from "react";
import { http } from "../../../../api/api";
import { Box } from "../../../../api/models/box/box.interface";
import { RequestSaveProductDefault } from "../../../../api/models/box/request-save-product-default.interface";
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
  const [savedBoxes, setSavedBoxes] = useState<Box[]>([]);

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

  const fetchGetSavedBoxes = async (email: string): Promise<void> => {
    try {
      const res = await http.get<SuccessProductDefault>(
        `/boxes/listSavedBoxes?email=${email}`
      );
      setSavedBoxes(res.data.boxes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchGetSavedBoxes(localStorage.getItem("email"));
  }, []);

  return {
    loading,
    error,
    success,
    fetchProducts,
    boxes,
    setBoxes,
    savedBoxes,
  };
};

export const useFetchSaveDefaultBox = () => {
  const saveDefaultBox = async (
    params: RequestSaveProductDefault
  ): Promise<void> => {
    try {
      http.put("/boxes/saveDefaultBox", params);
    } catch (error) {
      console.error(error);
    }
  };

  return { saveDefaultBox };
};
