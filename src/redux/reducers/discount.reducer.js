import { createReducer } from "@reduxjs/toolkit";
import { DISCOUNT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  discountInfo: {
    data: {},
    loading: false,
    error: null,
  },
};

const discountReducer = createReducer(initialState, {
  [REQUEST(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
    return {
      ...state,
      discountInfo: {
        ...state.discountInfo,
        loading: true,
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      discountInfo: {
        data: data,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      discountInfo: {
        data: {},
        loading: false,
        error,
      },
    };
  },
});

export default discountReducer;
