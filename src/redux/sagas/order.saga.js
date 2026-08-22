import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { ORDER_ACTION, SUCCESS, FAIL } from "../constants";
import { getOrderListAction, orderCartAction } from "../slices/order.slice";

const API_URL = process.env.REACT_APP_API_URL;

function* getOrderListSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`${API_URL}/orders`, {
      params: {
        userId: id,
        _order: "desc",
        _sort: "createdAt",
      },
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: { error: "Lấy không được" },
    });
  }
}

function* orderCartSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post(`${API_URL}/orders`, data);
    yield data.products.forEach((productItem) => {
      axios.delete(`${API_URL}/carts/${productItem.cartId}`);
    });

    yield callback.success();
    yield put({
      type: SUCCESS(ORDER_ACTION.ORDER_CART),
      payload: {
        cartIds: data.products.map((productItem) => productItem.cartId),
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.ORDER_CART),
      payload: { error: "Lấy không được" },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(getOrderListAction.type, getOrderListSaga);
  yield takeEvery(orderCartAction.type, orderCartSaga);
}
