import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import {
  loginUserRequest,
  logoutUserRequest,
  registerUserRequest,
  updatePasswordRequest,
} from "./request";
import { updatePasswordFail, updatePasswordSuccess } from "./actions";
import Cookies from "js-cookie";
import { authAction, authActionSaga } from "./reducer";
import { userAction, userActionSaga } from "../page/user/reducer";

function* loginUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(loginUserRequest, action.payload);
    if (!res.data?.login?.token) {
      yield put(authAction.loginFailure("credentials not found or invalid"));
    } else {
      yield put(authAction.loginSuccess(res.data?.login?.token));
      Cookies.set("token", res.data?.login?.token, { expires: 7 });
      window.location.href = "/page/home";
    }
  } catch (error) {
    yield put(authAction.loginFailure(`${error}`));
  }
}

function* logoutUserSaga(): SagaIterator {
  try {
    yield call(logoutUserRequest);
  } catch (error) {
  } finally {
    Cookies.remove("token");
    window.location.href = "/auth/login";
  }
}

function* registerUser(action: any): SagaIterator {
  try {
    const res = yield call(registerUserRequest, action.payload);
    if (!res.data?.register?.token) {
      yield put(
        userAction.actionUserFailure("credentials not found or invalid")
      );
    } else {
      yield put(userAction.addUserSuccess());
      window.location.reload();
    }
  } catch (error) {
    yield put(userAction.actionUserFailure(`${error}`));
  }
}

function* updatePassword(action: any): SagaIterator {
  try {
    yield put(userAction.activePasswordAction());
    const res = yield call(updatePasswordRequest, action.payload);
    if (!res.data?.updatePassword?.token) {
      yield put(userAction.passwordFailed("credentials not found or invalid"));
    } else {
      yield put(userAction.passwordSuccess());
    }
  } catch (error) {
    yield put(userAction.passwordFailed(`${error}`));
  }
}

export function* loginSagas(): Generator {
  yield takeEvery(authActionSaga.LOGIN!, loginUserSaga);
  yield takeEvery(authActionSaga.LOGOUT!, logoutUserSaga);
  yield takeEvery(userActionSaga.ADD_ITEM!, registerUser);
  yield takeEvery(userActionSaga.UPDATE_PASSWORD!, updatePassword);
}
