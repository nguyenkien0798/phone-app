import { createReducer } from "@reduxjs/toolkit";
import {
  PRODUCT_ACTION,
  AUTH_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
} from "../constants";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
  actionLoading: {
    createProduct: false,
    updateProduct: false,
    deleteProduct: false,
  },
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    if (more) {
      return {
        ...state,
        productList: {
          ...state.productList,
          data: [...state.productList.data, ...data],
          meta,
          loading: false,
          error: null,
        },
      };
    }
    return {
      ...state,
      productList: {
        ...state.productList,
        data: data,
        meta,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: false,
        error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {},
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: false,
        error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: false,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        createProduct: false,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        deleteProduct: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        deleteProduct: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        deleteProduct: false,
      },
    };
  },
});

export default productReducer;
