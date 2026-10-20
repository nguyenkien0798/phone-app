import { put, takeEvery } from "redux-saga/effects";

import { PRODUCT_ACTION, SUCCESS, FAIL } from "../constants";
import { DEFAULT_PRICE_FILTER } from "../../pages/Product/constants";
import { getProductListAction, getProductDetailAction, createProductAction, updateProductAction, deleteProductAction, toggleFavoriteAction } from "../slices/product.slice";
import { getProductListApi, getProductDetailApi, createProductApi, updateProductApi, deleteProductApi } from "../../services/product.service";
import { getProductOptionsApi, createProductOptionApi, updateProductOptionApi, deleteProductOptionApi } from "../../services/productOption.service";
import { addFavoriteApi, removeFavoriteApi } from "../../services/favorite.service";
import { getFavoriteListAction } from "../slices/favorite.slice";
import type { ProductOption } from "../../types";

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

function* syncProductOptions(productId, options: Partial<ProductOption>[] = []) {
  const current = yield getProductOptionsApi(productId);
  const currentOptions = Array.isArray(current.data) ? current.data : [];
  const incoming = Array.isArray(options)
    ? options.filter((item) => (item.name || "").trim())
    : [];
  const incomingIds = incoming.map((item) => item.id).filter(Boolean);

  for (const option of currentOptions) {
    if (!incomingIds.includes(option.id)) {
      yield deleteProductOptionApi(option.id);
    }
  }

  for (const option of incoming) {
    const payload = {
      productId,
      name: (option.name || "").trim(),
      price: Number(option.price || 0),
    };
    if (option.id) {
      yield updateProductOptionApi(option.id, payload);
    } else {
      yield createProductOptionApi(payload);
    }
  }
}

function* createProductSaga(action) {
  try {
    const { data, options, callback } = action.payload;
    const result = yield createProductApi(data);
    yield syncProductOptions(result.data.id, options);
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
    const { id, data, options, callback } = action.payload;
    yield updateProductApi(id, data);
    yield syncProductOptions(id, options);
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
    const { id, callback } = action.payload;
    yield deleteProductApi(id);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT),
    });
    if (callback?.refreshList) {
      yield callback.refreshList();
    } else {
      yield put({
        type: getProductListAction.type,
        payload: { limit: 10, page: 1 },
      });
    }
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: { error: "Xóa sản phẩm không thành công" },
    });
  }
}

function* toggleFavoriteSaga(action) {
  try {
    const { userId, productId, favoriteId } = action.payload;
    if (favoriteId) {
      yield removeFavoriteApi(favoriteId);
      yield put({
        type: SUCCESS(PRODUCT_ACTION.TOGGLE_FAVORITE),
        payload: { type: "remove", favoriteId },
      });
    } else {
      const result = yield addFavoriteApi({ userId, productId });
      yield put({
        type: SUCCESS(PRODUCT_ACTION.TOGGLE_FAVORITE),
        payload: { type: "add", data: result.data },
      });
    }
    yield put({
      type: getFavoriteListAction.type,
      payload: { userId },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.TOGGLE_FAVORITE),
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
  yield takeEvery(toggleFavoriteAction.type, toggleFavoriteSaga);
}
