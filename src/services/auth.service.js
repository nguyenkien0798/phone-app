import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const loginApi = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const registerApi = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const getUserInfoApi = (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

export const verifyPasswordApi = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const changePasswordApi = (id, newPassword) => {
  return axios.patch(`${API_URL}/users/${id}`, { password: newPassword });
};
