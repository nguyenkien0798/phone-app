import { createAction } from "@reduxjs/toolkit";
import { COMMON_ACTION, REQUEST } from "../constants";

export const setThemeAction = createAction(COMMON_ACTION.SET_THEME);
export const toggleSidebarAction = createAction(COMMON_ACTION.TOGGLE_SIDEBAR);
export const getCityListAction = createAction(
  REQUEST(COMMON_ACTION.GET_CITY_LIST)
);
export const getDistrictListAction = createAction(
  REQUEST(COMMON_ACTION.GET_DISTRICT_LIST)
);
export const getWardListAction = createAction(
  REQUEST(COMMON_ACTION.GET_WARD_LIST)
);
