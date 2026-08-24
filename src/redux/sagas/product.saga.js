import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_ACTION, SUCCESS, FAIL } from "../constants";
import { DEFAULT_PRICE_FILTER } from "../../pages/Product/constants";
import { getProductListAction, getProductDetailAction, createProductAction, updateProductAction, deleteProductAction } from "../slices/product.slice";

const API_URL = process.env.REACT_APP_API_URL;

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
    const categoryParam = categoryFilter?.length
      ? categoryFilter.map((filterItem) => `categoryId=${filterItem.id}`).join("&")
      : "";
    const result = yield axios.get(
      `${API_URL}/products?${categoryParam}`,
      {
        params: {
          _limit: limit,
          _page: page,
          ...(priceFilter &&
            (priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
              priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && {
              price_gte: priceFilter[0],
              price_lte: priceFilter[1],
            }),
          ...(keyword && { q: keyword }),
          _expand: "category",
          ...(sortFilter && { _sort: "price", _order: sortFilter }),
        },
      }
    );
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
      payload: { error: "Lấy không được" },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(
      `${API_URL}/products/${id}?_embed=productOptions&_embed=favorites`
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { data: result.data },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { error: "Lấy không được" },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post(`${API_URL}/products`, data);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
    });
    yield callback.goBackList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: { error: "Lấy không được" },
    });
  }
}

function* updateProductSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield axios.patch(`${API_URL}/products/${id}`, data);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT),
    });
    yield callback.goBackList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: { error: "Lấy không được" },
    });
  }
}

function* deleteProductSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${API_URL}/products/${id}`);
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
      payload: { error: "Lấy không được" },
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
