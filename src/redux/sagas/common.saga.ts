import { put, takeEvery } from "redux-saga/effects";

import { COMMON_ACTION, SUCCESS, FAIL } from "../constants";
import { getCityListAction, getDistrictListAction, getWardListAction } from "../slices/common.slice";
import { getCityListApi, getDistrictListApi, getWardListApi } from "../../services/common.service";

function* getCityListSaga(action) {
  try {
    const result = yield getCityListApi();
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_CITY_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_CITY_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* getDistrictListSaga(action) {
  try {
    const result = yield getDistrictListApi();
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_DISTRICT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_DISTRICT_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* getWardListSaga(action) {
  try {
    const result = yield getWardListApi();
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_WARD_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_WARD_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

export default function* commonSaga() {
  yield takeEvery(getCityListAction.type, getCityListSaga);
  yield takeEvery(
    getDistrictListAction.type,
    getDistrictListSaga
  );
  yield takeEvery(getWardListAction.type, getWardListSaga);
}
