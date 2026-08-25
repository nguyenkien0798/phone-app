import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getOrderListApi = (userId) => {
  return axios.get(`${API_URL}/orders`, {
    params: {
      userId,
      _order: "desc",
      _sort: "createdAt",
    },
  });
};

export const createOrderApi = (data) => {
  return axios.post(`${API_URL}/orders`, data);
};

export const deleteCartItemApi = (cartId) => {
  return axios.delete(`${API_URL}/carts/${cartId}`);
};
