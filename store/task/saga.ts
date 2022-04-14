import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "./request";
import {
  addTaskFailure,
  addTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  getTask,
  getTaskFailure,
  getTaskList,
  getTaskListFailure,
  getTaskListSuccess,
  getTaskSuccess,
  updateTaskFailure,
  updateTaskSuccess,
} from "./action";
import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASK_LIST,
  UPDATE_TASK,
} from "./constants";

export function* getTaskListSaga(): SagaIterator {
  try {
    const res = yield call(getTaskList);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getTaskListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getTaskListSuccess(res.data?.tasks));
    }
  } catch (error) {
    yield put(getTaskListFailure(`${error}`));
  }
}

export function* getTaskSaga(action:any):SagaIterator{
  try{
    const res = yield call(getTask, action.data);
    if(res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")){
      yield put(getTaskFailure(res.data?.errors || res.errors));
    }else{
      yield put(getTaskSuccess(res.data?.tasks));
    }
  }catch(error){
    yield put(getTaskFailure(`${error}`));
  }
}

export function* addTaskSaga(action: any): SagaIterator {
  try {
    const res = yield call(addTaskRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addTaskFailure(res.errors));
    } else {
      yield put(addTaskSuccess(res.data.task));
    }
  } catch (error: any) {
    yield put(addTaskFailure(error?.toString()));
  }
}

export function* updateTaskSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateTaskRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateTaskFailure(res.errors));
    } else {
      yield put(updateTaskSuccess(res.data.task));
    }
  } catch (error: any) {
    yield put(updateTaskFailure(error?.toString()));
  }
}

export function* deleteTaskSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteTaskRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteTaskFailure(res.errors));
    } else {
      yield put(deleteTaskSuccess(res.data.task));
    }
  } catch (error: any) {
    yield put(deleteTaskFailure(error?.toString()));
  }
}

export function* taskSagas(): Generator {
  yield takeEvery(GET_TASK, getTaskSaga);
  yield takeEvery(GET_TASK_LIST, getTaskListSaga);
  yield takeEvery(ADD_TASK, addTaskSaga);
  yield takeEvery(UPDATE_TASK, updateTaskSaga);
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
}
