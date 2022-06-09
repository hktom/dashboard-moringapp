import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addTaskRequest, updateTaskRequest } from "./request";

import { taskAction, taskActionSaga } from "./reducer";

export function* addTaskSaga(action: any): SagaIterator {
  try {
    const res = yield call(addTaskRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(taskAction.actionTaskFailure(res.errors));
    } else {
      yield put(taskAction.addTaskSuccess(res.data.createTask));
    }
  } catch (error: any) {
    yield put(taskAction.actionTaskFailure(error?.toString()));
  }
}

export function* updateTaskSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateTaskRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(taskAction.actionTaskFailure(res.errors));
    } else {
      yield put(taskAction.updateTaskSuccess(res.data.updateTask));
    }
  } catch (error: any) {
    yield put(taskAction.actionTaskFailure(error?.toString()));
  }
}

export function* taskSagas(): Generator {
  yield takeEvery(taskActionSaga.ADD_ITEM!, addTaskSaga);
  yield takeEvery(taskActionSaga.UPDATE_ITEM!, updateTaskSaga);
}
