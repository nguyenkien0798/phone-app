import axios, { AxiosRequestConfig } from "axios";
import type { AuthStorage } from "../types";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null") as AuthStorage | null;
    if (userInfo?.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${userInfo.accessToken}`,
      };
    }
  } catch (error) {
    // ignore broken localStorage
  }
  return config;
});
