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
    const res = yield call(loginUserRequest, action.data);
    if (!res.data?.login?.token) {
      yield put(authAction.loginUserFail("credentials not found or invalid"));
    } else {
      yield put(authAction.loginUserSuccess(res.data?.login?.token));
    }
  } catch (error) {
    yield put(authAction.loginUserFail(`${error}`));
  }
}

function* logoutUserSaga(): SagaIterator {
  try {
    yield call(logoutUserRequest);
  } catch (error) {
    console.log(error);
  } finally {
    Cookies.remove("token");
    window.location.href = "/";
  }
}

function* registerUser(action: any): SagaIterator {
  try {
    const res = yield call(registerUserRequest, action.data);
    if (!res.data?.register?.token) {
      yield put(
        userAction.actionUserFailure("credentials not found or invalid")
      );
    } else {
      yield put(userAction.actionUserSuccess());
      window.location.reload();
    }
  } catch (error) {
    yield put(userAction.actionUserFailure(`${error}`));
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
  yield takeEvery(authActionSaga.LOGIN!, loginUserSaga);
  yield takeEvery(authActionSaga.LOGOUT!, logoutUserSaga);
  yield takeEvery(userActionSaga.ADD_ITEM!, registerUser);
  yield takeEvery(userActionSaga.UPDATE_PASSWORD!, updatePassword);
}
