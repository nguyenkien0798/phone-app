import axios from "axios";
import type { Order } from "../types";

import { API_URL } from "../config/env";

export const getOrderListApi = (userId: string | number) => {
  return axios.get(`${API_URL}/orders`, {
    params: {
      userId,
      _order: "desc",
      _sort: "createdAt",
    },
  });
};

export const getAllOrdersApi = () => {
  return axios.get(`${API_URL}/orders`, {
    params: {
      _sort: "createdAt",
      _order: "desc",
    },
  });
};

export const createOrderApi = (data: Partial<Order>) => {
  return axios.post(`${API_URL}/orders`, data);
};

export const updateOrderApi = (id: string | number, data: Partial<Order>) => {
  return axios.patch(`${API_URL}/orders/${id}`, data);
};

export const deleteCartItemApi = (cartId: string | number) => {
  return axios.delete(`${API_URL}/carts/${cartId}`);
};
