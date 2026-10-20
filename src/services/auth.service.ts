import axios from "axios";
import type { User } from "../types";

import { API_URL } from "../config/env";

export const loginApi = (data: { email: string; password: string }) => {
  return axios.post(`${API_URL}/login`, data);
};

export const registerApi = (data: Partial<User> & { email: string; password: string }) => {
  return axios.post(`${API_URL}/register`, data);
};

export const getUserInfoApi = (id: string | number) => {
  return axios.get(`${API_URL}/users/${id}`);
};

export const verifyPasswordApi = (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const changePasswordApi = (id: string | number, newPassword: string) => {
  return axios.patch(`${API_URL}/users/${id}`, { password: newPassword });
};

export const updateUserApi = (id: string | number, data: Partial<User>) => {
  return axios.patch(`${API_URL}/users/${id}`, data);
};
