import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addConditionRequest,
  deleteConditionRequest,
  updateConditionRequest,
} from "./request";
import {
  addConditionFailure,
  addConditionSuccess,
  deleteConditionFailure,
  deleteConditionSuccess,
  updateConditionFailure,
  updateConditionSuccess,
} from "./action";
import {
  ADD_CONDITION,
  DELETE_CONDITION,
  UPDATE_CONDITION,
} from "./constants";

export function* addConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(addConditionRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addConditionFailure(res.errors));
    } else {
      yield put(addConditionSuccess(res.data.Condition));
    }
  } catch (error: any) {
    yield put(addConditionFailure(error?.toString()));
  }
}

export function* updateConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateConditionRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateConditionFailure(res.errors));
    } else {
      yield put(updateConditionSuccess(res.data.Condition));
    }
  } catch (error: any) {
    yield put(updateConditionFailure(error?.toString()));
  }
}

export function* deleteConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteConditionRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteConditionFailure(res.errors));
    } else {
      yield put(deleteConditionSuccess(res.data.Condition));
    }
  } catch (error: any) {
    yield put(deleteConditionFailure(error?.toString()));
  }
}

export function* ConditionSagas(): Generator {
  yield takeEvery(ADD_CONDITION, addConditionSaga);
  yield takeEvery(UPDATE_CONDITION, updateConditionSaga);
  yield takeEvery(DELETE_CONDITION, deleteConditionSaga);
}
