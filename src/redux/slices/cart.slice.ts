import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CART_ACTION, ORDER_ACTION, SUCCESS, FAIL } from "../constants";
import { logoutAction } from "./auth.slice";
import type { CartItem } from "../../types";

const initialState = {
  cartList: { data: [] as CartItem[], loading: false, error: null as string | null },
  selectedCarts: [] as CartItem[],
  actionLoading: { addToCart: false },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartListAction: (state, _action: PayloadAction<any>) => { state.cartList.loading = true; },
    addToCartAction: (state, _action: PayloadAction<any>) => { state.actionLoading.addToCart = true; },
    removeCartProductAction: (_state, _action: PayloadAction<any>) => {},
    updateCartProductAction: (_state, _action: PayloadAction<any>) => {},
    setSelectedCartsAction: (state, action: PayloadAction<any>) => { state.selectedCarts = action.payload; },
  },
  extraReducers: {
    [SUCCESS(CART_ACTION.GET_CART_LIST)]: (state, action) => {
      const responseData = action.payload.data;
      const carts = Array.isArray(responseData)
        ? responseData
        : Array.isArray(responseData?.carts)
        ? responseData.carts
        : Array.isArray(responseData?.data)
        ? responseData.data
        : [];
      state.cartList = { ...state.cartList, data: carts, loading: false, error: null };
    },
    [FAIL(CART_ACTION.GET_CART_LIST)]: (state, action) => { state.cartList.loading = false; state.cartList.error = action.payload.error; },
    [SUCCESS(CART_ACTION.ADD_TO_CART)]: (state, action) => { state.cartList.data.push(action.payload.data); state.actionLoading.addToCart = false; },
    [FAIL(CART_ACTION.ADD_TO_CART)]: (state, action) => { state.actionLoading.addToCart = false; state.cartList.error = action.payload.error; },
    [SUCCESS(CART_ACTION.UPDATE_CART_PRODUCT)]: (state, action) => {
      const item = state.cartList.data.find((product) => product.id === action.payload.data.id);
      if (item) item.quantity = action.payload.data.quantity;
    },
    [SUCCESS(CART_ACTION.REMOVE_CART_PRODUCT)]: (state, action) => { state.cartList.data = state.cartList.data.filter((product) => product.id !== action.payload.data.id); },
    [SUCCESS(ORDER_ACTION.ORDER_CART)]: (state, action) => {
      state.cartList.data = state.cartList.data.filter((item) => !action.payload.cartIds.includes(item.id));
      state.selectedCarts = [];
    },
    [FAIL(CART_ACTION.UPDATE_CART_PRODUCT)]: (state, action) => { state.cartList.error = action.payload.error; },
    [FAIL(CART_ACTION.REMOVE_CART_PRODUCT)]: (state, action) => { state.cartList.error = action.payload.error; },
    [logoutAction.type]: () => initialState,
  },
});

export const { getCartListAction, addToCartAction, removeCartProductAction, updateCartProductAction, setSelectedCartsAction } = cartSlice.actions;
export default cartSlice.reducer;
