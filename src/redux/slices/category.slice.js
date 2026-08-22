import { createSlice } from "@reduxjs/toolkit";
import { CATEGORY_ACTION, SUCCESS, FAIL } from "../constants";

const initialState = { categoryList: { data: [], loading: false, error: null } };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryListAction: (state) => { state.categoryList.loading = true; },
  },
  extraReducers: {
    [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
      state.categoryList = { 
        data: action.payload.data,
        loading: false,
        error: null
      };
    },
    [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
      state.categoryList.loading = false;
      state.categoryList.error = action.payload.error;
    },
  },
});

export const { getCategoryListAction } = categorySlice.actions;
export default categorySlice.reducer;
