import { put, takeEvery } from "redux-saga/effects";

import { COMMENT_ACTION, SUCCESS, FAIL } from "../constants";
import { getCommentListAction, postCommentAction } from "../slices/comment.slice";
import { getCommentListApi, postCommentApi } from "../../services/comment.service";

function* getCommentListSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield getCommentListApi(productId);
    yield put({
      type: SUCCESS(COMMENT_ACTION.GET_COMMENT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMENT_ACTION.GET_COMMENT_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* postCommentSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield postCommentApi(action.payload);
    yield put({
      type: getCommentListAction.type,
      payload: {
        productId,
      },
    });
    yield put({
      type: SUCCESS(COMMENT_ACTION.POST_COMMENT),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COMMENT_ACTION.POST_COMMENT),
    });
  }
}

export default function* commentSaga() {
  yield takeEvery(getCommentListAction.type, getCommentListSaga);
  yield takeEvery(postCommentAction.type, postCommentSaga);
}
