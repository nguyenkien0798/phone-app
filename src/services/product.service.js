import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getProductListApi = ({ limit, page, priceFilter, keyword, sortFilter, categoryFilter, DEFAULT_PRICE_FILTER }) => {
  const categoryParam = categoryFilter?.length
    ? categoryFilter.map((filterItem) => `categoryId=${filterItem.id}`).join("&")
    : "";
  return axios.get(`${API_URL}/products?${categoryParam}`, {
    params: {
      _limit: limit,
      _page: page,
      ...(priceFilter &&
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

export const getProductDetailApi = (id) => {
  return axios.get(`${API_URL}/products/${id}?_embed=productOptions&_embed=favorites`);
};

export const createProductApi = (data) => {
  return axios.post(`${API_URL}/products`, data);
};

export const updateProductApi = (id, data) => {
  return axios.patch(`${API_URL}/products/${id}`, data);
};

export const deleteProductApi = (id) => {
  return axios.delete(`${API_URL}/products/${id}`);
};
