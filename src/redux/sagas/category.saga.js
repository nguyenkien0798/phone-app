import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";

import { CATEGORY_ACTION, SUCCESS, FAIL } from "../constants";
import { getCategoryListAction } from "../slices/category.slice";

const API_URL = process.env.REACT_APP_API_URL;

function* getCategoryListSaga(action) {
  try {
    const result = yield call(axios.get, `${API_URL}/categories`);
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
  yield takeEvery(getCategoryListAction.type, getCategoryListSaga);
}
