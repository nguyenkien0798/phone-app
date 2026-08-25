import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_ACTION, SUCCESS, FAIL } from "../constants";

const initialState = {
  productList: { data: [], meta: {}, loading: false, error: null },
  productDetail: { data: {}, loading: false, error: null },
  actionLoading: { createProduct: false, updateProduct: false, deleteProduct: false },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductListAction: (state) => { state.productList.loading = true; },
    getProductDetailAction: (state) => { state.productDetail = { ...state.productDetail, data: {}, loading: true }; },
    createProductAction: (state) => { state.actionLoading.createProduct = true; },
    updateProductAction: (state) => { state.actionLoading.createProduct = true; },
    deleteProductAction: (state) => { state.actionLoading.deleteProduct = true; },
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
    [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state) => { state.actionLoading.createProduct = false; },
    [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state) => { state.actionLoading.createProduct = false; },
    [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state) => { state.actionLoading.deleteProduct = false; },
    [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state) => { state.actionLoading.deleteProduct = false; },
  },
});

export const { getProductListAction, getProductDetailAction, createProductAction, updateProductAction, deleteProductAction } = productSlice.actions;
export default productSlice.reducer;
