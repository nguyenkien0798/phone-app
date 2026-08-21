import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { COMMON_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

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

export default function* categorySaga() {
  yield takeEvery(REQUEST(COMMON_ACTION.GET_CITY_LIST), getCityListSaga);
  yield takeEvery(
    REQUEST(COMMON_ACTION.GET_DISTRICT_LIST),
    getDistrictListSaga
  );
  yield takeEvery(REQUEST(COMMON_ACTION.GET_WARD_LIST), getWardListSaga);
}
