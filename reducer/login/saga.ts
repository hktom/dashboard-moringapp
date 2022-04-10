import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { LOGIN_USER } from "./constants";
import { loginUserRequest } from "./request";
import { loginUserFail, loginUserSuccess } from "./actions";

function* loginUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(loginUserRequest, action.data);
    if (res.data.hasOwnProperty("errors")) {
      yield put(loginUserFail(res.data.errors));
    } else {
      yield put(loginUserSuccess(true));
    }
  } catch (error) {
    yield put(loginUserFail(`${error}`));
  }
}

export function* loginSagas(): Generator {
  yield takeEvery(LOGIN_USER, loginUserSaga);
}
