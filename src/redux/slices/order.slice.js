import { createSlice } from "@reduxjs/toolkit";
import { ORDER_ACTION, SUCCESS, FAIL } from "../constants";

const initialState = {
  orderList: { data: [], loading: false, error: null },
  orderInfo: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderListAction: (state) => { state.orderList.loading = true; },
    orderCartAction: () => {},
    setOrderInfoAction: (state, action) => { state.orderInfo = action.payload; },
  },
  extraReducers: {
    [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
      state.orderList = { data: Array.isArray(action.payload.data) ? action.payload.data : [], loading: false, error: null };
    },
    [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
      state.orderList.loading = false;
      state.orderList.error = action.payload.error;
    },
  },
});

export const { getOrderListAction, orderCartAction, setOrderInfoAction } = orderSlice.actions;
export default orderSlice.reducer;
