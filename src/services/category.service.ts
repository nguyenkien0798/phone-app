import axios from "axios";
import type { Category } from "../types";

import { API_URL } from "../config/env";

export const getCategoryListApi = () => {
  return axios.get(`${API_URL}/categories`);
};

export const createCategoryApi = (data: Partial<Category>) => {
  return axios.post(`${API_URL}/categories`, data);
};

export const updateCategoryApi = (id: string | number, data: Partial<Category>) => {
  return axios.patch(`${API_URL}/categories/${id}`, data);
};

export const deleteCategoryApi = (id: string | number) => {
  return axios.delete(`${API_URL}/categories/${id}`);
};
