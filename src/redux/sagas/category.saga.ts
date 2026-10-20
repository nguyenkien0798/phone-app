import { put, takeEvery, call } from "redux-saga/effects";
import { notification } from "antd";

import { CATEGORY_ACTION, SUCCESS, FAIL } from "../constants";
import { getCategoryListAction, createCategoryAction, updateCategoryAction, deleteCategoryAction } from "../slices/category.slice";
import { getCategoryListApi, createCategoryApi, updateCategoryApi, deleteCategoryApi } from "../../services/category.service";

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


function* createCategorySaga(action) {
  try {
    const { data, callback } = action.payload;
    yield createCategoryApi(data);
    yield put({ type: SUCCESS(CATEGORY_ACTION.CREATE_CATEGORY) });
    yield put({ type: getCategoryListAction.type });
    notification.success({ message: "Thêm danh mục thành công" });
    if (callback?.success) callback.success();
  } catch (e) {
    notification.error({ message: "Thêm danh mục không thành công" });
    yield put({ type: FAIL(CATEGORY_ACTION.CREATE_CATEGORY) });
  }
}

function* updateCategorySaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield updateCategoryApi(id, data);
    yield put({ type: SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY) });
    yield put({ type: getCategoryListAction.type });
    notification.success({ message: "Cập nhật danh mục thành công" });
    if (callback?.success) callback.success();
  } catch (e) {
    notification.error({ message: "Cập nhật danh mục không thành công" });
    yield put({ type: FAIL(CATEGORY_ACTION.UPDATE_CATEGORY) });
  }
}

function* deleteCategorySaga(action) {
  try {
    const { id } = action.payload;
    yield deleteCategoryApi(id);
    yield put({ type: SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY) });
    yield put({ type: getCategoryListAction.type });
    notification.success({ message: "Đã xóa danh mục" });
  } catch (e) {
    notification.error({ message: "Xóa danh mục không thành công" });
    yield put({ type: FAIL(CATEGORY_ACTION.DELETE_CATEGORY) });
  }
}

export default function* categorySaga() {
  yield takeEvery(getCategoryListAction.type, getCategoryListSaga);
  yield takeEvery(createCategoryAction.type, createCategorySaga);
  yield takeEvery(updateCategoryAction.type, updateCategorySaga);
  yield takeEvery(deleteCategoryAction.type, deleteCategorySaga);
}
