import { fork } from "redux-saga/effects";

import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import categorySaga from "./category.saga";
import commentSaga from "./comment.saga";
import cartSaga from "./cart.saga";
import orderSaga from "./order.saga";
import discountSaga from "./discount.saga";
import commonSaga from "./common.saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(categorySaga);
  yield fork(commentSaga);
  yield fork(cartSaga);
  yield fork(orderSaga);
  yield fork(discountSaga);
  yield fork(commonSaga);
}
