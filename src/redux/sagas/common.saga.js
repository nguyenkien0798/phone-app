import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { COMMON_ACTION, SUCCESS, FAIL } from "../constants";
import { getCityListAction, getDistrictListAction, getWardListAction } from "../slices/common.slice";

const API_URL = process.env.REACT_APP_API_URL;

function* getCityListSaga(action) {
  try {
    const result = yield axios.get(`${API_URL}/cities`);
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_CITY_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_CITY_LIST),
      payload: { error: "Lấy không được" },
    });
  }
}

function* getDistrictListSaga(action) {
  try {
    const result = yield axios.get(`${API_URL}/districts`);
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_DISTRICT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_DISTRICT_LIST),
      payload: { error: "Lấy không được" },
    });
  }
}

function* getWardListSaga(action) {
  try {
    const result = yield axios.get(`${API_URL}/wards`);
    yield put({
      type: SUCCESS(COMMON_ACTION.GET_WARD_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMON_ACTION.GET_WARD_LIST),
      payload: { error: "Lấy không được" },
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
