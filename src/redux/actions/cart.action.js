import { createAction } from "@reduxjs/toolkit";
import { CART_ACTION, REQUEST } from "../constants";

export const getCartListAction = createAction(
  REQUEST(CART_ACTION.GET_CART_LIST)
);
export const addToCartAction = createAction(REQUEST(CART_ACTION.ADD_TO_CART));
export const removeCartProductAction = createAction(
  REQUEST(CART_ACTION.REMOVE_CART_PRODUCT)
);
export const updateCartProductAction = createAction(
  REQUEST(CART_ACTION.UPDATE_CART_PRODUCT)
);
export const setSelectedCartsAction = createAction(
  REQUEST(CART_ACTION.SET_SELECTED_CARTS)
);
export const orderCartAction = createAction(REQUEST(CART_ACTION.ORDER_CART));
