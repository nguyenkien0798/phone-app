import { put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";
import moment from "moment";

import { DISCOUNT_ACTION, SUCCESS, FAIL } from "../constants";
import { checkDiscountAction } from "../slices/discount.slice";
import { checkDiscountApi } from "../../services/discount.service";

function* checkDiscountSaga(action) {
  try {
    const { code } = action.payload;
    const result = yield checkDiscountApi(code);
    if (result.data.length > 0) {
      if (result.data[0].endDate > moment().valueOf()) {
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

export default function* discountSaga() {
  yield takeEvery(checkDiscountAction.type, checkDiscountSaga);
}
