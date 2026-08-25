import { put, takeEvery } from "redux-saga/effects";

import { PRODUCT_ACTION, SUCCESS, FAIL } from "../constants";
import { DEFAULT_PRICE_FILTER } from "../../pages/Product/constants";
import { getProductListAction, getProductDetailAction, createProductAction, updateProductAction, deleteProductAction } from "../slices/product.slice";
import { getProductListApi, getProductDetailApi, createProductApi, updateProductApi, deleteProductApi } from "../../services/product.service";

function* getProductListSaga(action) {
  // Gọi API lấy danh sách sản phẩm từ server
  try {
    const {
      limit,
      page,
      priceFilter,
      keyword,
      sortFilter,
      more,
      categoryFilter,
    } = action.payload;

    const result = yield getProductListApi({ limit, page, priceFilter, keyword, sortFilter, categoryFilter, DEFAULT_PRICE_FILTER });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        data: result.data,
        meta: {
          page,
          total: parseInt(result.headers["x-total-count"]),
        },
        more,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield getProductDetailApi(id);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { data: result.data },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield createProductApi(data);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
    });
    yield callback.goBackList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* updateProductSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield updateProductApi(id, data);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT),
    });
    yield callback.goBackList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

function* deleteProductSaga(action) {
  try {
    const { id } = action.payload;
    yield deleteProductApi(id);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT),
    });
    yield put({
      type: getProductListAction.type,
      payload: { limit: 10, page: 1 },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: { error: "Lấy dữ liệu không thành công" },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(getProductListAction.type, getProductListSaga);
  yield takeEvery(
    getProductDetailAction.type,
    getProductDetailSaga
  );
  yield takeEvery(createProductAction.type, createProductSaga);
  yield takeEvery(updateProductAction.type, updateProductSaga);
  yield takeEvery(deleteProductAction.type, deleteProductSaga);
}
