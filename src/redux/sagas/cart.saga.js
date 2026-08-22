import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import { CART_ACTION, SUCCESS, FAIL } from "../constants";
import { getCartListAction, addToCartAction, updateCartProductAction, removeCartProductAction } from "../slices/cart.slice";

const API_URL = process.env.REACT_APP_API_URL;

function* getCartListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get(
      `${API_URL}/carts?userId=${userId}&_expand=product&_expand=productOption`
    );
    yield put({
      type: SUCCESS(CART_ACTION.GET_CART_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CART_ACTION.GET_CART_LIST),
      payload: { error: "Lấy không được" },
    });
  }
}

function* addToCartSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.post(
      `${API_URL}/carts`,
      action.payload
    );
    yield put({
      type: getCartListAction.type,
      payload: {
        userId,
      },
    });
    yield put({
      type: SUCCESS(CART_ACTION.ADD_TO_CART),
      payload: {
        data: result.data,
      },
    });
    yield notification.success({
      message: "Thêm vào giỏ hàng thành công",
    });
  } catch (e) {
    yield put({
      type: FAIL(CART_ACTION.ADD_TO_CART),
      payload: { error: "Lấy không được" },
    });
  }
}

function* updateCartProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.patch(`${API_URL}/carts/${data.id}`, {
      quantity: data.quantity,
    });
    yield put({
      type: SUCCESS(CART_ACTION.UPDATE_CART_PRODUCT),
      payload: {
        data,
      },
    });
    if (callback?.showSuccess) callback.showSuccess();
  } catch (e) {
    yield put({
      type: FAIL(CART_ACTION.UPDATE_CART_PRODUCT),
      payload: { error: "Lấy không được" },
    });
  }
}

function* removeCartProductSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${API_URL}/carts/${id}`);
    yield put({
      type: SUCCESS(CART_ACTION.REMOVE_CART_PRODUCT),
      payload: {
        data: { id },
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CART_ACTION.REMOVE_CART_PRODUCT),
      payload: { error: "Lấy không được" },
    });
  }
}

export default function* cartSaga() {
  yield takeEvery(getCartListAction.type, getCartListSaga);
  yield takeEvery(addToCartAction.type, addToCartSaga);
  yield takeEvery(
    updateCartProductAction.type,
    updateCartProductSaga
  );
  yield takeEvery(
    removeCartProductAction.type,
    removeCartProductSaga
  );
}
