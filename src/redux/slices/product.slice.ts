import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCT_ACTION, SUCCESS, FAIL } from "../constants";
import type { PaginationMeta, Product } from "../../types";

const initialState = {
  productList: { data: [] as Product[], meta: {} as PaginationMeta, loading: false, error: null },
  productDetail: { data: {} as Product, loading: false, error: null },
  actionLoading: { createProduct: false, updateProduct: false, deleteProduct: false },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductListAction: (state, _action: PayloadAction<any>) => { state.productList.loading = true; },
    getProductDetailAction: (state, _action: PayloadAction<any>) => { state.productDetail = { ...state.productDetail, data: {} as Product, loading: true }; },
    createProductAction: (state, _action: PayloadAction<any>) => { state.actionLoading.createProduct = true; },
    updateProductAction: (state, _action: PayloadAction<any>) => { state.actionLoading.updateProduct = true; },
    deleteProductAction: (state, _action: PayloadAction<any>) => { state.actionLoading.deleteProduct = true; },
    toggleFavoriteAction: (_state, _action: PayloadAction<any>) => {},
  },
  extraReducers: {
    [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
      const { data, meta, more } = action.payload;
      const products = Array.isArray(data)
        ? data
        : Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data?.data)
        ? data.data
        : [];
      state.productList = { ...state.productList, data: more ? [...state.productList.data, ...products] : products, meta, loading: false, error: null };
    },
    [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => { state.productList.loading = false; state.productList.error = action.payload.error; },
    [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
      const responseData = action.payload.data;
      const product = responseData && typeof responseData === "object" && !Array.isArray(responseData)
        ? responseData
        : {};
      state.productDetail = {
        data: {
          ...product,
          productOptions: Array.isArray(product.productOptions) ? product.productOptions : [],
          favorites: Array.isArray(product.favorites) ? product.favorites : [],
        },
        loading: false,
        error: null,
      };
    },
    [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => { state.productDetail.loading = false; state.productDetail.error = action.payload.error; },
    [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state) => { state.actionLoading.createProduct = false; },
    [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state) => { state.actionLoading.createProduct = false; },
    [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state) => { state.actionLoading.updateProduct = false; },
    [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state) => { state.actionLoading.updateProduct = false; },
    [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state) => { state.actionLoading.deleteProduct = false; },
    [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state) => { state.actionLoading.deleteProduct = false; },
    [SUCCESS(PRODUCT_ACTION.TOGGLE_FAVORITE)]: (state, action) => {
      const { type, data, favoriteId } = action.payload;
      const favorites = Array.isArray(state.productDetail.data.favorites)
        ? state.productDetail.data.favorites
        : [];
      state.productDetail.data.favorites =
        type === "remove"
          ? favorites.filter((item) => item.id !== favoriteId)
          : [...favorites, data];
    },
  },
});

export const { getProductListAction, getProductDetailAction, createProductAction, updateProductAction, deleteProductAction, toggleFavoriteAction } = productSlice.actions;
export default productSlice.reducer;
