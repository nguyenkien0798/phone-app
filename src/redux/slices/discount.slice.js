import { createSlice } from "@reduxjs/toolkit";
import { DISCOUNT_ACTION, SUCCESS, FAIL } from "../constants";

const initialState = { discountInfo: { data: {}, loading: false, error: null } };

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    checkDiscountAction: (state) => { state.discountInfo.loading = true; },
  },
  extraReducers: {
    [SUCCESS(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
      state.discountInfo = { data: action.payload.data, loading: false, error: null };
    },
    [FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
      state.discountInfo = { data: {}, loading: false, error: action.payload.error };
    },
  },
});

export const { checkDiscountAction } = discountSlice.actions;
export default discountSlice.reducer;
