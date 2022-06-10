import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { contentAction, contentActionSaga } from "./reducer";
import { addContentRequest, updateContentRequest } from "./request";
// import { addContentRequest, updateContentRequest } from "./request";

// import { ContentAction, ContentActionSaga } from "./reducer";

export function* addContentSaga(action: any): SagaIterator {
  try {
    const res = yield call(addContentRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(contentAction.actionContentFailure(res.errors));
    } else {
      yield put(contentAction.addContentSuccess(res.data.createContent));
    }
  } catch (error: any) {
    yield put(contentAction.actionContentFailure(error?.toString()));
  }
}

export function* updateContentSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateContentRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(contentAction.actionContentFailure(res.errors));
    } else {
      yield put(contentAction.updateContentSuccess(res.data.updateContent));
    }
  } catch (error: any) {
    yield put(contentAction.actionContentFailure(error?.toString()));
  }
}

export function* contentSagas(): Generator {
  yield takeEvery(contentActionSaga.ADD_ITEM!, addContentSaga);
  yield takeEvery(contentActionSaga.UPDATE_ITEM!, updateContentSaga);
}
