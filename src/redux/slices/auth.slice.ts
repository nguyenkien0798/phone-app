import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_ACTION, SUCCESS, FAIL } from "../constants";
import type { User } from "../../types";

const initialState = {
  userInfo: { data: {} as User, loading: false },
  responseAction: {
    login: { loading: false, error: "" },
    register: { loading: false, error: "" },
    updateUser: { loading: false, error: "" },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserInfoAction: (state, _action: PayloadAction<any>) => { state.userInfo.loading = true; },
    loginAction: (state, _action: PayloadAction<any>) => { state.responseAction.login.loading = true; },
    registerAction: (state, _action: PayloadAction<any>) => { state.responseAction.register.loading = true; },
    logoutAction: () => initialState,
    changePasswordAction: (_state, _action: PayloadAction<any>) => {},
    updateUserAction: (state, _action: PayloadAction<any>) => { state.responseAction.updateUser.loading = true; },
  },
  extraReducers: {
    [SUCCESS(AUTH_ACTION.GET_USER_INFO)]: (state, action) => {
      state.userInfo = { data: action.payload.data, loading: false };
    },
    [FAIL(AUTH_ACTION.GET_USER_INFO)]: (state) => {
      state.userInfo = { data: {} as User, loading: false };
    },
    [SUCCESS(AUTH_ACTION.UPDATE_USER)]: (state, action) => {
      state.userInfo.data = { ...state.userInfo.data, ...action.payload.data };
      state.responseAction.updateUser = { loading: false, error: "" };
    },
    [FAIL(AUTH_ACTION.UPDATE_USER)]: (state, action) => {
      state.responseAction.updateUser = { loading: false, error: action.payload.error };
    },
    [SUCCESS(AUTH_ACTION.LOGIN)]: (state, action) => {
      state.userInfo.data = action.payload.data;
      state.responseAction.login = { loading: false, error: "" };
    },
    [FAIL(AUTH_ACTION.LOGIN)]: (state, action) => {
      state.responseAction.login = { loading: false, error: action.payload.error };
    },
    [SUCCESS(AUTH_ACTION.REGISTER)]: (state) => { state.responseAction.register = { loading: false, error: "" }; },
    [FAIL(AUTH_ACTION.REGISTER)]: (state, action) => {
      state.responseAction.register = { loading: false, error: action.payload.error };
    },
  },
});

export const { getUserInfoAction, loginAction, registerAction, logoutAction, changePasswordAction, updateUserAction } = authSlice.actions;
export default authSlice.reducer;
