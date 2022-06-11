import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { contentAction, contentActionSaga } from "./reducer";
import { addContentRequest, updateContentRequest } from "./request";

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

export function* contentSagas(): Generator {
  yield takeEvery(contentActionSaga.ADD_ITEM!, addContentSaga);
  yield takeEvery(contentActionSaga.UPDATE_ITEM!, updateContentSaga);
}
