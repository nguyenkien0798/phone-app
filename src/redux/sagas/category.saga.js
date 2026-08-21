import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { CATEGORY_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const API_URL = process.env.REACT_APP_API_URL;

function* getCategoryListSaga(action) {
  try {
    const result = yield axios.get(`${API_URL}/categories`);
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({ type: FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST), payload: { error: 'Lấy không được' } });
  }
}


export default function* categorySaga() {
  yield takeEvery(REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST), getCategoryListSaga);
}
