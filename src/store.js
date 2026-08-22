import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import commonReducer from "./redux/slices/common.slice";
import productReducer from "./redux/slices/product.slice";
import authReducer from "./redux/slices/auth.slice";
import categoryReducer from "./redux/slices/category.slice";
import commentReducer from "./redux/slices/comment.slice";
import cartReducer from "./redux/slices/cart.slice";
import orderReducer from "./redux/slices/order.slice";
import discountReducer from "./redux/slices/discount.slice";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    commonReducer,
    productReducer,
    authReducer,
    categoryReducer,
    commentReducer,
    cartReducer,
    orderReducer,
    discountReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
