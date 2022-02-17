import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import { CART_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getCartListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get(
      "https://phone-store-app-api.herokuapp.com/carts?_expand=product&_expand=productOption",
      {
        params: {
          userId,
          _expand: "products",
        },
      }
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
      `https://phone-store-app-api.herokuapp.com/carts`,
      action.payload
    );
    yield put({
      type: REQUEST(CART_ACTION.GET_CART_LIST),
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
    yield axios.patch(`https://phone-store-app-api.herokuapp.com/carts/${data.id}`, {
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
    yield axios.delete(`https://phone-store-app-api.herokuapp.com/carts/${id}`);
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

export default function* categorySaga() {
  yield takeEvery(REQUEST(CART_ACTION.GET_CART_LIST), getCartListSaga);
  yield takeEvery(REQUEST(CART_ACTION.ADD_TO_CART), addToCartSaga);
  yield takeEvery(
    REQUEST(CART_ACTION.UPDATE_CART_PRODUCT),
    updateCartProductSaga
  );
  yield takeEvery(
    REQUEST(CART_ACTION.REMOVE_CART_PRODUCT),
    removeCartProductSaga
  );
}
