import axios from "axios";
import type { ProductOption } from "../types";

import { API_URL } from "../config/env";

export const getProductOptionsApi = (productId: string | number) => {
  return axios.get(`${API_URL}/productOptions`, {
    params: { productId },
  });
};

export const createProductOptionApi = (data: Partial<ProductOption>) => {
  return axios.post(`${API_URL}/productOptions`, data);
};

export const updateProductOptionApi = (id: string | number, data: Partial<ProductOption>) => {
  return axios.patch(`${API_URL}/productOptions/${id}`, data);
};

export const deleteProductOptionApi = (id: string | number) => {
  return axios.delete(`${API_URL}/productOptions/${id}`);
};
