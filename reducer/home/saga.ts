import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { GET_USER_PROFILE } from "./constants";
import { getUserProfile, getUserProfileSuccess } from "./actions";
import { getUserProfileRequest } from "./request";

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getUserProfileRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      console.error(res?.errors);
    } else {
      yield put(getUserProfileSuccess(res.data.me));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(GET_USER_PROFILE, getClientProfileSaga);
}
