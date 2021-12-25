import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getOrderListSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`https://phone-store-app-api.herokuapp.com/orders`, {
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
    yield axios.post("https://phone-store-app-api.herokuapp.com/orders", data);
    yield data.products.forEach((productItem) => {
      axios.delete(`https://phone-store-app-api.herokuapp.com/carts/${productItem.cartId}`);
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

export default function* categorySaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.ORDER_CART), orderCartSaga);
}
