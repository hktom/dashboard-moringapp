import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { contentAction, contentActionSaga } from "./reducer";
import {
  addContentRequest,
  deleteContentRequest,
  updateContentRequest,
} from "./request";

export function* addContentSaga(action: any): SagaIterator {
  try {
    yield put(contentAction.activeContentAction());
    const res = yield call(addContentRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(contentAction.actionContentFailed(res.errors));
    } else {
      yield put(contentAction.addContentSuccess(res.data.createPage));
    }
  } catch (error: any) {
    yield put(contentAction.actionContentFailed(error?.toString()));
  }
}

export function* updateContentSaga(action: any): SagaIterator {
  try {
    yield put(contentAction.activeContentAction());
    const res = yield call(updateContentRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(contentAction.actionContentFailed(res.errors));
    } else {
      yield put(contentAction.updateContentSuccess(res.data.updatePage));
    }
  } catch (error: any) {
    yield put(contentAction.actionContentFailed(error?.toString()));
  }
}

export function* deleteContentSaga(action: any): SagaIterator {
  try {
    yield call(deleteContentRequest, action.payload);
  } catch (error) {
    console.error(error);
  } finally {
    window.location.href = "/page/content";
  }
}

export function* contentSagas(): Generator {
  yield takeEvery(contentActionSaga.ADD_ITEM!, addContentSaga);
  yield takeEvery(contentActionSaga.UPDATE_ITEM!, updateContentSaga);
  yield takeEvery(contentActionSaga.DELETE_ITEM!, deleteContentSaga);
}
