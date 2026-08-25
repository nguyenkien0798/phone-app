import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getCommentListApi = (productId) => {
  return axios.get(`${API_URL}/comments`, {
    params: {
      productId,
      _expand: "user",
      _order: "desc",
      _sort: "id",
    },
  });
};

export const postCommentApi = (data) => {
  return axios.post(`${API_URL}/comments`, data);
};
