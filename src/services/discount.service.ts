import axios from "axios";
import type { Discount } from "../types";

import { API_URL } from "../config/env";

export const checkDiscountApi = (code: string) => {
  return axios.get(`${API_URL}/discounts?code=${code}`);
};

export const getDiscountListApi = () => {
  return axios.get(`${API_URL}/discounts`, {
    params: { _sort: "id", _order: "desc" },
  });
};

export const createDiscountApi = (data: Partial<Discount>) => {
  return axios.post(`${API_URL}/discounts`, data);
};

export const updateDiscountApi = (id: string | number, data: Partial<Discount>) => {
  return axios.patch(`${API_URL}/discounts/${id}`, data);
};

export const deleteDiscountApi = (id: string | number) => {
  return axios.delete(`${API_URL}/discounts/${id}`);
};
