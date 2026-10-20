import axios from "axios";
import type { Favorite } from "../types";

import { API_URL } from "../config/env";

export const getFavoriteListApi = (userId: string | number) => {
  return axios.get(`${API_URL}/favorites`, {
    params: {
      userId,
      _expand: "product",
      _sort: "id",
      _order: "desc",
    },
  });
};

export const addFavoriteApi = (data: Partial<Favorite>) => {
  return axios.post(`${API_URL}/favorites`, data);
};

export const removeFavoriteApi = (id: string | number) => {
  return axios.delete(`${API_URL}/favorites/${id}`);
};
