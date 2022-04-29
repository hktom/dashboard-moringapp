import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  RESET_PASSWORD,
  SSO_LOGIN,
  UPDATE_PASSWORD,
} from "./constants";
import {
  getTokenRequest,
  loginUserRequest,
  logoutUserRequest,
  registerUserRequest,
  resetPasswordRequest,
  resetTokenRequest,
  sendResetMailRequest,
  updatePasswordRequest,
} from "./request";
import {
  loginUserFail,
  loginUserSuccess,
  logoutUserFail,
  registerUserFail,
  registerUserSuccess,
  resetPasswordFail,
  resetPasswordSuccess,
  sendResetMailFail,
  sendResetMailSuccess,
  updatePasswordFail,
  updatePasswordSuccess,
} from "./actions";
import Cookies from "js-cookie";

function* loginUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(loginUserRequest, action.data);
    if (!res.data?.login?.token) {
      yield put(loginUserFail("credentials not found or invalid"));
    } else {
      yield put(loginUserSuccess(res.data?.login?.token));
    }
  } catch (error) {
    yield put(loginUserFail(`${error}`));
  }
}

function* ssoLoginSaga(action: any): SagaIterator {
  try {
    const res = yield call(getTokenRequest, action.data);
    if (
      !res.data?.getToken?.reset_token ||
      res.data?.getToken?.reset_token?.length == 0
    ) {
      yield put(loginUserFail("an unknown error occurred"));
    } else {
      yield call(resetTokenRequest, res.data?.getToken?.id);
      yield put(loginUserSuccess(res.data?.getToken?.reset_token));
    }
  } catch (error) {
    yield put(loginUserFail(`${error}`));
  }
}

function* logoutUserSaga(): SagaIterator {
  try {
    yield call(logoutUserRequest);
  } catch (error) {
    yield put(logoutUserFail(`${error}`));
  } finally {
    Cookies.remove("token");
    window.location.href = "/";
  }
}

function* registerUser(action: any): SagaIterator {
  try {
    const res = yield call(registerUserRequest, action.data);
    if (!res.data?.register?.token) {
      yield put(registerUserFail("credentials not found or invalid"));
    } else {
      yield put(registerUserSuccess());
    }
  } catch (error) {
    yield put(registerUserFail(`${error}`));
  }
}

function* resetPassword(action: any): SagaIterator {
  try {
    const res = yield call(resetPasswordRequest, action.data);
    if (!res.data?.resetPassword?.token) {
      yield put(resetPasswordFail("credentials not found or invalid"));
    } else {
      yield put(resetPasswordSuccess());
    }
  } catch (error) {
    yield put(resetPasswordFail(`${error}`));
  }
}

function* sendResetMail(action: any): SagaIterator {
  try {
    const res = yield call(sendResetMailRequest, action.data);
    if (!res.data?.sendResetMail?.token) {
      yield put(sendResetMailFail("Email not found"));
    } else {
      yield put(sendResetMailSuccess());
    }
  } catch (error) {
    yield put(sendResetMailFail(`${error}`));
  }
}

function* updatePassword(action: any): SagaIterator {
  try {
    const res = yield call(updatePasswordRequest, action.data);
    if (!res.data?.updatePassword?.token) {
      yield put(updatePasswordFail("credentials not found or invalid"));
    } else {
      yield put(updatePasswordSuccess());
    }
  } catch (error) {
    yield put(updatePasswordFail(`${error}`));
  }
}

export function* loginSagas(): Generator {
  yield takeEvery(SSO_LOGIN, ssoLoginSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
  yield takeEvery(REGISTER_USER, registerUser);
  yield takeEvery(RESET_PASSWORD, resetPassword);
  yield takeEvery(UPDATE_PASSWORD, updatePassword);
}
