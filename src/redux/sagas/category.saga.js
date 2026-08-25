import { put, takeEvery, call } from "redux-saga/effects";

import { CATEGORY_ACTION, SUCCESS, FAIL } from "../constants";
import { getCategoryListAction } from "../slices/category.slice";
import { getCategoryListApi } from "../../services/category.service";

function* getCategoryListSaga(action) {
  try {
    const result = yield call(getCategoryListApi);
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({ type: FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST), payload: { error: 'Lấy dữ liệu không thành công' } });
  }
}


export default function* categorySaga() {
  yield takeEvery(getCategoryListAction.type, getCategoryListSaga);
}
