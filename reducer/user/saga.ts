import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addUserRequest,
  deleteUserRequest,
  updateUserRequest,
} from "./request";
import {
  addUserFailure,
  addUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  updateUserFailure,
  updateUserSuccess,
} from "./action";
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./constants";

export function* addUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(addUserRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addUserFailure(res.errors));
    } else {
      yield put(addUserSuccess(res.data.User));
    }
  } catch (error: any) {
    yield put(addUserFailure(error?.toString()));
  }
}

export function* updateUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateUserRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateUserFailure(res.errors));
    } else {
      yield put(updateUserSuccess(res.data.User));
    }
  } catch (error: any) {
    yield put(updateUserFailure(error?.toString()));
  }
}

export function* deleteUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteUserRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteUserFailure(res.errors));
    } else {
      yield put(deleteUserSuccess(res.data.User));
    }
  } catch (error: any) {
    yield put(deleteUserFailure(error?.toString()));
  }
}

export function* UserSagas(): Generator {
  yield takeEvery(ADD_USER, addUserSaga);
  yield takeEvery(UPDATE_USER, updateUserSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga);
}
