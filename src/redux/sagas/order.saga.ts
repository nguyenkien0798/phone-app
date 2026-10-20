import { put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import { ORDER_ACTION, SUCCESS, FAIL } from "../constants";
import { getOrderListAction, getAllOrdersAction, orderCartAction, updateOrderAction } from "../slices/order.slice";
import { getCartListAction } from "../slices/cart.slice";
import { getOrderListApi, getAllOrdersApi, createOrderApi, updateOrderApi, deleteCartItemApi } from "../../services/order.service";

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

function* getAllOrdersSaga() {
  try {
    const result = yield getAllOrdersApi();
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ALL_ORDERS),
      payload: { data: result.data },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ALL_ORDERS),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* orderCartSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield createOrderApi(data);
    for (const productItem of data.products) {
      if (productItem.cartId) {
        yield deleteCartItemApi(productItem.cartId);
      }
    }
    if (data.userId) {
      yield put({
        type: getCartListAction.type,
        payload: { userId: data.userId },
      });
    }
    yield callback.success();
    yield put({
      type: SUCCESS(ORDER_ACTION.ORDER_CART),
      payload: {
        cartIds: data.products.map((productItem) => productItem.cartId),
      },
    });
  } catch (e) {
    notification.error({
      message: e.response?.data?.message || "Đặt hàng không thành công",
    });
    yield put({
      type: FAIL(ORDER_ACTION.ORDER_CART),
      payload: { error: "Đặt hàng không thành công" },
    });
  }
}

function* updateOrderSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    const result = yield updateOrderApi(id, data);
    yield put({
      type: SUCCESS(ORDER_ACTION.UPDATE_ORDER),
      payload: { data: result.data },
    });
    notification.success({ message: "Cập nhật đơn hàng thành công" });
    if (callback?.success) callback.success();
  } catch (e) {
    notification.error({ message: "Cập nhật đơn hàng không thành công" });
    yield put({
      type: FAIL(ORDER_ACTION.UPDATE_ORDER),
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(getOrderListAction.type, getOrderListSaga);
  yield takeEvery(getAllOrdersAction.type, getAllOrdersSaga);
  yield takeEvery(orderCartAction.type, orderCartSaga);
  yield takeEvery(updateOrderAction.type, updateOrderSaga);
}
