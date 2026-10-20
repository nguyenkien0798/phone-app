import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DISCOUNT_ACTION, SUCCESS, FAIL } from "../constants";
import type { Discount } from "../../types";

const initialState = {
  discountInfo: { data: {} as Discount, loading: false, error: null },
  discountList: { data: [] as Discount[], loading: false, error: null as string | null },
  actionLoading: { createDiscount: false, updateDiscount: false, deleteDiscount: false },
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    checkDiscountAction: (state, _action: PayloadAction<any>) => { state.discountInfo.loading = true; },
    getDiscountListAction: (state) => { state.discountList.loading = true; },
    createDiscountAction: (state, _action: PayloadAction<any>) => { state.actionLoading.createDiscount = true; },
    updateDiscountAction: (state, _action: PayloadAction<any>) => { state.actionLoading.updateDiscount = true; },
    deleteDiscountAction: (state, _action: PayloadAction<any>) => { state.actionLoading.deleteDiscount = true; },
  },
  extraReducers: {
    [SUCCESS(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
      state.discountInfo = { data: action.payload.data, loading: false, error: null };
    },
    [FAIL(DISCOUNT_ACTION.CHECK_DISCOUNT)]: (state, action) => {
      state.discountInfo = { data: {} as Discount, loading: false, error: action.payload.error };
    },
    [SUCCESS(DISCOUNT_ACTION.GET_DISCOUNT_LIST)]: (state, action) => {
      state.discountList = {
        data: Array.isArray(action.payload.data) ? action.payload.data : [],
        loading: false,
        error: null,
      };
    },
    [FAIL(DISCOUNT_ACTION.GET_DISCOUNT_LIST)]: (state) => {
      state.discountList.loading = false;
    },
    [SUCCESS(DISCOUNT_ACTION.CREATE_DISCOUNT)]: (state) => { state.actionLoading.createDiscount = false; },
    [FAIL(DISCOUNT_ACTION.CREATE_DISCOUNT)]: (state) => { state.actionLoading.createDiscount = false; },
    [SUCCESS(DISCOUNT_ACTION.UPDATE_DISCOUNT)]: (state) => { state.actionLoading.updateDiscount = false; },
    [FAIL(DISCOUNT_ACTION.UPDATE_DISCOUNT)]: (state) => { state.actionLoading.updateDiscount = false; },
    [SUCCESS(DISCOUNT_ACTION.DELETE_DISCOUNT)]: (state) => { state.actionLoading.deleteDiscount = false; },
    [FAIL(DISCOUNT_ACTION.DELETE_DISCOUNT)]: (state) => { state.actionLoading.deleteDiscount = false; },
  },
});

export const {
  checkDiscountAction,
  getDiscountListAction,
  createDiscountAction,
  updateDiscountAction,
  deleteDiscountAction,
} = discountSlice.actions;
export default discountSlice.reducer;
