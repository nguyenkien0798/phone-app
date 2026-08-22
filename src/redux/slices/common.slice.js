import { createSlice } from "@reduxjs/toolkit";
import { COMMON_ACTION, SUCCESS, FAIL } from "../constants";

const listState = { data: [], loading: false, error: null };
const initialState = {
  theme: "light",
  isShowSidebar: true,
  cityList: { ...listState },
  districtList: { ...listState },
  wardList: { ...listState },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setThemeAction: (state, action) => { state.theme = action.payload; },
    toggleSidebarAction: (state) => { state.isShowSidebar = !state.isShowSidebar; },
    getCityListAction: () => {},
    getDistrictListAction: () => {},
    getWardListAction: () => {},
  },
  extraReducers: {
    [SUCCESS(COMMON_ACTION.GET_CITY_LIST)]: (state, action) => { state.cityList = { data: action.payload.data, loading: false, error: null }; },
    [SUCCESS(COMMON_ACTION.GET_DISTRICT_LIST)]: (state, action) => { state.districtList = { data: action.payload.data, loading: false, error: null }; },
    [SUCCESS(COMMON_ACTION.GET_WARD_LIST)]: (state, action) => { state.wardList = { data: action.payload.data, loading: false, error: null }; },
    [FAIL(COMMON_ACTION.GET_CITY_LIST)]: (state, action) => { state.cityList.error = action.payload.error; },
    [FAIL(COMMON_ACTION.GET_DISTRICT_LIST)]: (state, action) => { state.districtList.error = action.payload.error; },
    [FAIL(COMMON_ACTION.GET_WARD_LIST)]: (state, action) => { state.wardList.error = action.payload.error; },
  },
});

export const { setThemeAction, toggleSidebarAction, getCityListAction, getDistrictListAction, getWardListAction } = commonSlice.actions;
export default commonSlice.reducer;
