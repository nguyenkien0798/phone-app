import { put, takeEvery } from "redux-saga/effects";

import { ORDER_ACTION, SUCCESS, FAIL } from "../constants";
import { getOrderListAction, orderCartAction } from "../slices/order.slice";
import { getOrderListApi, createOrderApi, deleteCartItemApi } from "../../services/order.service";

function* getOrderListSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield getOrderListApi(id);
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* orderCartSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield createOrderApi(data);
    yield data.products.forEach((productItem) => {
      deleteCartItemApi(productItem.cartId);
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
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(getOrderListAction.type, getOrderListSaga);
  yield takeEvery(orderCartAction.type, orderCartSaga);
}
