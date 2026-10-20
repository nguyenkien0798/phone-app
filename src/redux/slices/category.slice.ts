import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORY_ACTION, SUCCESS, FAIL } from "../constants";
import type { Category } from "../../types";

const initialState = {
  categoryList: { data: [] as Category[], loading: false, error: null as string | null },
  actionLoading: { createCategory: false, updateCategory: false, deleteCategory: false },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryListAction: (state) => { state.categoryList.loading = true; },
    createCategoryAction: (state, _action: PayloadAction<any>) => { state.actionLoading.createCategory = true; },
    updateCategoryAction: (state, _action: PayloadAction<any>) => { state.actionLoading.updateCategory = true; },
    deleteCategoryAction: (state, _action: PayloadAction<any>) => { state.actionLoading.deleteCategory = true; },
  },
  extraReducers: {
    [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
      const responseData = action.payload.data;
      const categories = Array.isArray(responseData)
        ? responseData
        : Array.isArray(responseData?.categories)
        ? responseData.categories
        : Array.isArray(responseData?.data)
        ? responseData.data
        : [];
      state.categoryList = { 
        data: categories,
        loading: false,
        error: null
      };
    },
    [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
      state.categoryList.loading = false;
      state.categoryList.error = action.payload.error;
    },
    [SUCCESS(CATEGORY_ACTION.CREATE_CATEGORY)]: (state) => { state.actionLoading.createCategory = false; },
    [FAIL(CATEGORY_ACTION.CREATE_CATEGORY)]: (state) => { state.actionLoading.createCategory = false; },
    [SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state) => { state.actionLoading.updateCategory = false; },
    [FAIL(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state) => { state.actionLoading.updateCategory = false; },
    [SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY)]: (state) => { state.actionLoading.deleteCategory = false; },
    [FAIL(CATEGORY_ACTION.DELETE_CATEGORY)]: (state) => { state.actionLoading.deleteCategory = false; },
  },
});

export const { getCategoryListAction, createCategoryAction, updateCategoryAction, deleteCategoryAction } = categorySlice.actions;
export default categorySlice.reducer;
