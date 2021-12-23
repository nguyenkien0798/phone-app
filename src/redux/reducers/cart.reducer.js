import { createReducer } from "@reduxjs/toolkit";
import {
  CART_ACTION,
  ORDER_ACTION,
  AUTH_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
} from "../constants";

const initialState = {
  cartList: {
    data: [],
    loading: false,
    error: null,
  },
  selectedCarts: [],
  actionLoading: {
    addToCart: false,
  },
};

const cartReducer = createReducer(initialState, {
  [REQUEST(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: true,
      },
    };
  },
  [SUCCESS(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: data,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: false,
        error,
      },
    };
  },

  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        addToCart: true,
      },
    };
  },
  [SUCCESS(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        addToCart: false,
      },
    };
  },
  [FAIL(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    return {
      ...state,
      actionLoading: {
        ...state.actionLoading,
        addToCart: false,
      },
    };
  },

  [SUCCESS(CART_ACTION.UPDATE_CART_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    const newCartList = [...state.cartList.data];
    const productIndex = newCartList.findIndex(
      (product) => product.id === data.id
    );
    newCartList.splice(productIndex, 1, {
      ...state.cartList.data[productIndex],
      quantity: data.quantity,
    });
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
      },
    };
  },

  [SUCCESS(CART_ACTION.REMOVE_CART_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    const newCartList = [...state.cartList.data];
    const productIndex = newCartList.findIndex(
      (product) => product.id === data.id
    );
    newCartList.splice(productIndex, 1);
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
      },
    };
  },

  [REQUEST(CART_ACTION.SET_SELECTED_CARTS)]: (state, action) => {
    return {
      ...state,
      selectedCarts: [...action.payload],
    };
  },

  [SUCCESS(ORDER_ACTION.ORDER_CART)]: (state, action) => {
    const { cartIds } = action.payload;
    const newCartList = state.cartList.data.filter(
      (cartItem) => !cartIds.includes(cartItem.id)
    );
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
      },
      selectedCarts: [],
    };
  },

  [REQUEST(AUTH_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      cartList: {
        data: [],
        loading: false,
        error: null,
      },
      selectedCarts: [],
    };
  },
});

export default cartReducer;
