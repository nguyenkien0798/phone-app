import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getCityListApi = () => {
  return axios.get(`${API_URL}/cities`);
};

export const getDistrictListApi = () => {
  return axios.get(`${API_URL}/districts`);
};

export const getWardListApi = () => {
  return axios.get(`${API_URL}/wards`);
};
