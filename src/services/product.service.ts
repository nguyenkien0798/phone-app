import axios from "axios";
import type { Category, Product } from "../types";

import { API_URL } from "../config/env";

type GetProductListParams = {
  limit?: number;
  page?: number;
  priceFilter?: number[];
  keyword?: string;
  sortFilter?: string;
  categoryFilter?: Category[];
  DEFAULT_PRICE_FILTER?: number[];
};

export const getProductListApi = ({
  limit,
  page,
  priceFilter,
  keyword,
  sortFilter,
  categoryFilter,
  DEFAULT_PRICE_FILTER,
}: GetProductListParams) => {
  const categoryParam = categoryFilter?.length
    ? categoryFilter.map((filterItem) => `categoryId=${filterItem.id}`).join("&")
    : "";
  return axios.get(`${API_URL}/products?${categoryParam}`, {
    params: {
      _limit: limit,
      _page: page,
      ...(priceFilter &&
        DEFAULT_PRICE_FILTER &&
        (priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
          priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && {
          price_gte: priceFilter[0],
          price_lte: priceFilter[1],
        }),
      ...(keyword && { q: keyword }),
      _expand: "category",
      ...(sortFilter && { _sort: "price", _order: sortFilter }),
    },
  });
};

export const getProductDetailApi = (id: string | number) => {
  return axios.get(`${API_URL}/products/${id}?_embed=productOptions&_embed=favorites`);
};

export const createProductApi = (data: Partial<Product>) => {
  return axios.post(`${API_URL}/products`, data);
};

export const updateProductApi = (id: string | number, data: Partial<Product>) => {
  return axios.patch(`${API_URL}/products/${id}`, data);
};

export const deleteProductApi = (id: string | number) => {
  return axios.delete(`${API_URL}/products/${id}`);
};
