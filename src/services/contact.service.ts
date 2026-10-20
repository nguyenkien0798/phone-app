import axios from "axios";

import { API_URL } from "../config/env";

export const createContactApi = (data: Record<string, unknown>) => {
  return axios.post(`${API_URL}/contacts`, data);
};

export const createNewsletterApi = (data: Record<string, unknown>) => {
  return axios.post(`${API_URL}/newsletters`, data);
};
