import axios from "axios";
import type { Comment } from "../types";

import { API_URL } from "../config/env";

export const getCommentListApi = (productId: string | number) => {
  return axios.get(`${API_URL}/comments`, {
    params: {
      productId,
      _expand: "user",
      _order: "desc",
      _sort: "id",
    },
  });
};

export const postCommentApi = (data: Partial<Comment>) => {
  return axios.post(`${API_URL}/comments`, data);
};
