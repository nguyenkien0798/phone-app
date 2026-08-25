import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getCartListApi = (userId) => {
  return axios.get(`${API_URL}/carts?userId=${userId}&_expand=product&_expand=productOption`);
};

export const addToCartApi = (data) => {
  return axios.post(`${API_URL}/carts`, data);
};

export const updateCartProductApi = (id, quantity) => {
  return axios.patch(`${API_URL}/carts/${id}`, { quantity });
};

export const removeCartProductApi = (id) => {
  return axios.delete(`${API_URL}/carts/${id}`);
};
