import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addServiceRequest,
  deleteServiceRequest,
  updateServiceRequest,
} from "./request";
import {
  addServiceFailure,
  addServiceSuccess,
  deleteServiceFailure,
  deleteServiceSuccess,
  updateServiceFailure,
  updateServiceSuccess,
} from "./action";
import {
  ADD_SERVICE,
  DELETE_SERVICE,
  UPDATE_SERVICE,
} from "./constants";

export function* addServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(addServiceRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addServiceFailure(res.errors));
    } else {
      yield put(addServiceSuccess(res.data.Service));
    }
  } catch (error: any) {
    yield put(addServiceFailure(error?.toString()));
  }
}

export function* updateServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateServiceRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateServiceFailure(res.errors));
    } else {
      yield put(updateServiceSuccess(res.data.Service));
    }
  } catch (error: any) {
    yield put(updateServiceFailure(error?.toString()));
  }
}

export function* deleteServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteServiceRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteServiceFailure(res.errors));
    } else {
      yield put(deleteServiceSuccess(res.data.Service));
    }
  } catch (error: any) {
    yield put(deleteServiceFailure(error?.toString()));
  }
}

export function* ServiceSagas(): Generator {
  yield takeEvery(ADD_SERVICE, addServiceSaga);
  yield takeEvery(UPDATE_SERVICE, updateServiceSaga);
  yield takeEvery(DELETE_SERVICE, deleteServiceSaga);
}
