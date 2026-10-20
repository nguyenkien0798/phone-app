import { put, takeEvery } from "redux-saga/effects";

import { FAVORITE_ACTION, SUCCESS, FAIL } from "../constants";
import { getFavoriteListAction } from "../slices/favorite.slice";
import { getFavoriteListApi } from "../../services/favorite.service";

function* getFavoriteListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield getFavoriteListApi(userId);
    yield put({
      type: SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: { data: result.data },
    });
  } catch (e) {
    yield put({
      type: FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: { error: "Lấy danh sách yêu thích không thành công" },
    });
  }
}

export default function* favoriteSaga() {
  yield takeEvery(getFavoriteListAction.type, getFavoriteListSaga);
}
