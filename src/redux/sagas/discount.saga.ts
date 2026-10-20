import { put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";
import moment from "moment";

import { DISCOUNT_ACTION, SUCCESS, FAIL } from "../constants";
import {
  checkDiscountAction,
  getDiscountListAction,
  createDiscountAction,
  updateDiscountAction,
  deleteDiscountAction,
} from "../slices/discount.slice";
import {
  checkDiscountApi,
  getDiscountListApi,
  createDiscountApi,
  updateDiscountApi,
  deleteDiscountApi,
} from "../../services/discount.service";

function* checkDiscountSaga(action) {
  try {
    const { code } = action.payload;
    const result = yield checkDiscountApi(code);
    if (result.data.length > 0) {
      if (result.data[0].endDate > moment().valueOf()) {
        notification.success({
          message: `Áp dụng mã ${result.data[0].code} thành công`,
        });
        yield put({
          type: SUCCESS(DISCOUNT_ACTION.CHECK_DISCOUNT),
          payload: {
            data: {
              name: result.data[0].name,
              code: result.data[0].code,
              discountValue: result.data[0].discountValue,
              discountType: result.data[0].discountType,
            },
          },
        });
      } else {
        notification.error({
          message: "Mã giảm giá đã hết hạn",
        });
        yield put({
          type: FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT),
        });
      }
    } else {
      notification.error({
        message: "Mã giảm giá không hợp lệ",
      });
      yield put({
        type: FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT),
      });
    }
  } catch (e) {
    yield put({
      type: FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT),
    });
  }
}

function* getDiscountListSaga() {
  try {
    const result = yield getDiscountListApi();
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.GET_DISCOUNT_LIST),
      payload: { data: result.data },
    });
  } catch (e) {
    yield put({ type: FAIL(DISCOUNT_ACTION.GET_DISCOUNT_LIST) });
  }
}

function* createDiscountSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield createDiscountApi(data);
    yield put({ type: SUCCESS(DISCOUNT_ACTION.CREATE_DISCOUNT) });
    yield put({ type: getDiscountListAction.type });
    notification.success({ message: "Thêm mã giảm giá thành công" });
    if (callback?.success) callback.success();
  } catch (e) {
    notification.error({ message: "Thêm mã giảm giá không thành công" });
    yield put({ type: FAIL(DISCOUNT_ACTION.CREATE_DISCOUNT) });
  }
}

function* updateDiscountSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield updateDiscountApi(id, data);
    yield put({ type: SUCCESS(DISCOUNT_ACTION.UPDATE_DISCOUNT) });
    yield put({ type: getDiscountListAction.type });
    notification.success({ message: "Cập nhật mã giảm giá thành công" });
    if (callback?.success) callback.success();
  } catch (e) {
    notification.error({ message: "Cập nhật mã giảm giá không thành công" });
    yield put({ type: FAIL(DISCOUNT_ACTION.UPDATE_DISCOUNT) });
  }
}

function* deleteDiscountSaga(action) {
  try {
    const { id } = action.payload;
    yield deleteDiscountApi(id);
    yield put({ type: SUCCESS(DISCOUNT_ACTION.DELETE_DISCOUNT) });
    yield put({ type: getDiscountListAction.type });
    notification.success({ message: "Đã xóa mã giảm giá" });
  } catch (e) {
    notification.error({ message: "Xóa mã giảm giá không thành công" });
    yield put({ type: FAIL(DISCOUNT_ACTION.DELETE_DISCOUNT) });
  }
}

export default function* discountSaga() {
  yield takeEvery(checkDiscountAction.type, checkDiscountSaga);
  yield takeEvery(getDiscountListAction.type, getDiscountListSaga);
  yield takeEvery(createDiscountAction.type, createDiscountSaga);
  yield takeEvery(updateDiscountAction.type, updateDiscountSaga);
  yield takeEvery(deleteDiscountAction.type, deleteDiscountSaga);
}
