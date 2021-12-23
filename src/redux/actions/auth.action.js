import { createAction } from "@reduxjs/toolkit";
import { AUTH_ACTION, REQUEST } from "../constants";

export const getUserInfoAction = createAction(
  REQUEST(AUTH_ACTION.GET_USER_INFO)
);
export const loginAction = createAction(REQUEST(AUTH_ACTION.LOGIN));
export const registerAction = createAction(REQUEST(AUTH_ACTION.REGISTER));
export const logoutAction = createAction(REQUEST(AUTH_ACTION.LOGOUT));
export const changePasswordAction = createAction(
  REQUEST(AUTH_ACTION.CHANGE_PASSWORD)
);
