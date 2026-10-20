import axios from "axios";

import { API_URL } from "../config/env";

export const getCityListApi = () => {
  return axios.get(`${API_URL}/cities`);
};

export const getDistrictListApi = () => {
  return axios.get(`${API_URL}/districts`);
};

export const getWardListApi = () => {
  return axios.get(`${API_URL}/wards`);
};
