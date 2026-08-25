import { put, takeEvery } from "redux-saga/effects";

import { AUTH_ACTION, SUCCESS, FAIL } from "../constants";
import { loginAction, registerAction, getUserInfoAction, changePasswordAction } from "../slices/auth.slice";
import { loginApi, registerApi, getUserInfoApi, verifyPasswordApi, changePasswordApi } from "../../services/auth.service";

function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield loginApi(data);
    yield localStorage.setItem(
      "userInfo",
      JSON.stringify({
        accessToken: result.data.accessToken,
        role: result.data.user.role,
      })
    );
    yield put({
      type: SUCCESS(AUTH_ACTION.LOGIN),
      payload: {
        data: result.data.user,
      },
    });
    if (result.data.user.role === "admin") {
      yield callback.redirectDashboard();
    } else {
      yield callback.redirectHome();
    }
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.LOGIN),
      payload: {
        error:
          (e.response.data === "Cannot find user" ||
            e.response.data === "Incorrect password") &&
          "Đăng nhập thất bại",
      },
    });
  }
}

function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield registerApi(data);
    yield put({ type: SUCCESS(AUTH_ACTION.REGISTER) });
    yield callback.goBackLogin();
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.REGISTER),
      payload: {
        error:
          e.response.data === "Email already exists"
            ? "Email đã tồn tại"
            : "Đăng ký không thành công",
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield getUserInfoApi(id);
    yield put({
      type: SUCCESS(AUTH_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.GET_USER_INFO),
      payload: {
        error: "Lấy dữ liệu không thành công",
      },
    });
  }
}

function* changePasswordSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield verifyPasswordApi(data.email, data.oldPassword);
    yield changePasswordApi(id, data.newPassword);
    yield callback.clearForm();
    yield put({
      type: SUCCESS(AUTH_ACTION.CHANGE_PASSWORD),
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.CHANGE_PASSWORD),
      payload: {
        error: "Đổi mật khẩu không thành công",
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(loginAction.type, loginSaga);
  yield takeEvery(registerAction.type, registerSaga);
  yield takeEvery(getUserInfoAction.type, getUserInfoSaga);
  yield takeEvery(changePasswordAction.type, changePasswordSaga);
}
