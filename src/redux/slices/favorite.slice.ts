import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FAVORITE_ACTION, SUCCESS, FAIL } from "../constants";
import type { Favorite } from "../../types";

const initialState = {
  favoriteList: { data: [] as Favorite[], loading: false, error: null as string | null },
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    getFavoriteListAction: (state, _action: PayloadAction<any>) => {
      state.favoriteList.loading = true;
    },
  },
  extraReducers: {
    [SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
      state.favoriteList = {
        data: Array.isArray(action.payload.data) ? action.payload.data : [],
        loading: false,
        error: null,
      };
    },
    [FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
      state.favoriteList.loading = false;
      state.favoriteList.error = action.payload.error;
    },
  },
});

export const { getFavoriteListAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;
