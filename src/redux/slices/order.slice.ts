import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ORDER_ACTION, SUCCESS, FAIL } from "../constants";
import type { Order } from "../../types";

const initialState = {
  orderList: { data: [] as Order[], loading: false, error: null as string | null },
  allOrders: { data: [] as Order[], loading: false, error: null as string | null },
  orderInfo: {} as Record<string, any>,
  actionLoading: { updateOrder: false },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderListAction: (state, _action: PayloadAction<any>) => { state.orderList.loading = true; },
    getAllOrdersAction: (state) => { state.allOrders.loading = true; },
    orderCartAction: (_state, _action: PayloadAction<any>) => {},
    setOrderInfoAction: (state, action: PayloadAction<any>) => { state.orderInfo = action.payload; },
    updateOrderAction: (state, _action: PayloadAction<any>) => { state.actionLoading.updateOrder = true; },
  },
  extraReducers: {
    [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
      state.orderList = { data: Array.isArray(action.payload.data) ? action.payload.data : [], loading: false, error: null };
    },
    [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
      state.orderList.loading = false;
      state.orderList.error = action.payload.error;
    },
    [SUCCESS(ORDER_ACTION.GET_ALL_ORDERS)]: (state, action) => {
      state.allOrders = { data: Array.isArray(action.payload.data) ? action.payload.data : [], loading: false, error: null };
    },
    [FAIL(ORDER_ACTION.GET_ALL_ORDERS)]: (state, action) => {
      state.allOrders.loading = false;
      state.allOrders.error = action.payload.error;
    },
    [SUCCESS(ORDER_ACTION.UPDATE_ORDER)]: (state, action) => {
      state.actionLoading.updateOrder = false;
      const updated = action.payload.data;
      state.orderList.data = state.orderList.data.map((item) =>
        item.id === updated.id ? { ...item, ...updated } : item
      );
      state.allOrders.data = state.allOrders.data.map((item) =>
        item.id === updated.id ? { ...item, ...updated } : item
      );
    },
    [FAIL(ORDER_ACTION.UPDATE_ORDER)]: (state) => {
      state.actionLoading.updateOrder = false;
    },
  },
});

export const { getOrderListAction, getAllOrdersAction, orderCartAction, setOrderInfoAction, updateOrderAction } = orderSlice.actions;
export default orderSlice.reducer;
