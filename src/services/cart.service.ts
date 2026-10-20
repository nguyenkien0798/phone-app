import axios from "axios";
import type { CartItem } from "../types";

import { API_URL } from "../config/env";

export const getCartListApi = (userId: string | number) => {
  return axios.get(`${API_URL}/carts?userId=${userId}&_expand=product&_expand=productOption`);
};

export const addToCartApi = (data: Partial<CartItem>) => {
  return axios.post(`${API_URL}/carts`, data);
};

export const updateCartProductApi = (id: string | number, quantity: number) => {
  return axios.patch(`${API_URL}/carts/${id}`, { quantity });
};

export const removeCartProductApi = (id: string | number) => {
  return axios.delete(`${API_URL}/carts/${id}`);
};
