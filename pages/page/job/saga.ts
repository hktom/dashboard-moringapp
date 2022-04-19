import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addJobRequest, deleteJobRequest, updateJobRequest } from "./request";
import {
  addJobFailure,
  addJobSuccess,
  deleteJobFailure,
  deleteJobSuccess,
  getJob,
  getJobFailure,
  getJobList,
  getJobListFailure,
  getJobListSuccess,
  getJobSuccess,
  updateJobFailure,
  updateJobSuccess,
} from "./action";
import {
  ADD_JOB,
  DELETE_JOB,
  GET_JOB,
  GET_JOB_LIST,
  UPDATE_JOB,
} from "./constants";

export function* getJobListSaga(): SagaIterator {
  try {
    const res = yield call(getJobList);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getJobListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getJobListSuccess(res.data?.jobs));
    }
  } catch (error) {
    yield put(getJobListFailure(`${error}`));
  }
}

export function* getJobSaga(action: any): SagaIterator {
  try {
    const res = yield call(getJob, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getJobFailure(res.data?.errors || res.errors));
    } else {
      yield put(getJobSuccess(res.data?.jobs));
    }
  } catch (error) {
    yield put(getJobFailure(`${error}`));
  }
}

export function* addJobSaga(action: any): SagaIterator {
  try {
    const res = yield call(addJobRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addJobFailure(res.errors));
    } else {
      yield put(addJobSuccess(res.data.Job));
    }
  } catch (error: any) {
    yield put(addJobFailure(error?.toString()));
  }
}

export function* updateJobSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateJobRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateJobFailure(res.errors));
    } else {
      yield put(updateJobSuccess(res.data.Job));
    }
  } catch (error: any) {
    yield put(updateJobFailure(error?.toString()));
  }
}

export function* deleteJobSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteJobRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteJobFailure(res.errors));
    } else {
      yield put(deleteJobSuccess(res.data.Job));
    }
  } catch (error: any) {
    yield put(deleteJobFailure(error?.toString()));
  }
}

export function* JobSagas(): Generator {
  yield takeEvery(GET_JOB, getJobSaga);
  yield takeEvery(GET_JOB_LIST, getJobListSaga);
  yield takeEvery(ADD_JOB, addJobSaga);
  yield takeEvery(UPDATE_JOB, updateJobSaga);
  yield takeEvery(DELETE_JOB, deleteJobSaga);
}
