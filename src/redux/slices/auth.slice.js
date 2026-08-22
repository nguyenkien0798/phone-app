import { createSlice } from "@reduxjs/toolkit";
import { AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  userInfo: { data: {}, loading: false },
  responseAction: {
    login: { loading: false, error: "" },
    register: { loading: false, error: "" },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserInfoAction: () => {},
    loginAction: (state) => { state.responseAction.login.loading = true; },
    registerAction: (state) => { state.responseAction.register.loading = true; },
    logoutAction: () => initialState,
    changePasswordAction: () => {},
  },
  extraReducers: {
    [SUCCESS(AUTH_ACTION.GET_USER_INFO)]: (state, action) => { state.userInfo.data = action.payload.data; },
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

export const { getUserInfoAction, loginAction, registerAction, logoutAction, changePasswordAction } = authSlice.actions;
export default authSlice.reducer;
