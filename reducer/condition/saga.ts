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
  getConditionFailure,
  getConditionList,
  getConditionListFailure,
  getConditionListSuccess,
  getConditionSuccess,
  updateConditionFailure,
  updateConditionSuccess,
} from "./action";
import {
  ADD_CONDITION,
  DELETE_CONDITION,
  GET_CONDITION,
  GET_CONDITION_LIST,
  UPDATE_CONDITION,
} from "./constants";

export function* getConditionListSaga(): SagaIterator {
  try {
    const res = yield call(getConditionList);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getConditionListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getConditionListSuccess(res.data?.conditions));
    }
  } catch (error) {
    yield put(getConditionListFailure(`${error}`));
  }
}

export function* getCondition(action: any): SagaIterator {
  try {
    const res = yield call(getCondition, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getConditionFailure(res.data?.errors || res.errors));
    } else {
      yield put(getConditionSuccess(res.data?.conditions));
    }
  } catch (error) {
    yield put(getConditionFailure(`${error}`));
  }
}

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
  yield takeEvery(GET_CONDITION, getCondition);
  yield takeEvery(GET_CONDITION_LIST, getConditionList);
  yield takeEvery(ADD_CONDITION, addConditionSaga);
  yield takeEvery(UPDATE_CONDITION, updateConditionSaga);
  yield takeEvery(DELETE_CONDITION, deleteConditionSaga);
}
