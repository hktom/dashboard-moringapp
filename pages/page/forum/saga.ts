import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { forumAction, forumActionSaga, replyActionSaga } from "./reducer";
import {
  addForumRequest,
  addReplyRequest,
  updateForumRequest,
  deleteReplyRequest,
  deleteQuestionRequest,
} from "./request";

export function* addForumSaga(action: any): SagaIterator {
  try {
    yield put(forumAction.activeForumAction());
    const res = yield call(addForumRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailed(res.errors));
    } else {
      yield put(forumAction.addForumSuccess(res.data.createQuestion));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailed(error?.toString()));
  }
}

export function* updateForumSaga(action: any): SagaIterator {
  try {
    yield put(forumAction.activeForumAction());
    const res = yield call(updateForumRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailed(res.errors));
    } else {
      yield put(forumAction.addForumSuccess(res.data.updateQuestion));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailed(error?.toString()));
  }
}

export function* addReplySaga(action: any): SagaIterator {
  try {
    yield put(forumAction.activeForumAction());
    const res = yield call(addReplyRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailed(res.errors));
    } else {
      yield put(forumAction.addReplySuccess(res.data.createReply));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailed(error?.toString()));
  }
}

export function* deleteQuestionSaga(action: any): SagaIterator {
  try {
    yield put(forumAction.activeForumAction());
    const res = yield call(deleteReplyRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailed(res.errors));
    } else {
      window.location.reload();
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailed(error?.toString()));
  }
}

export function* deleteReplySaga(action: any): SagaIterator {
  try {
    yield put(forumAction.activeForumAction());
    const res = yield call(deleteQuestionRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailed(res.errors));
    } else {
      yield put(forumAction.deleteReplySuccess(res.data.deleteReply));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailed(error?.toString()));
  }
}

export function* forumSagas(): Generator {
  yield takeEvery(forumActionSaga.ADD_ITEM!, addForumSaga);
  yield takeEvery(forumActionSaga.UPDATE_ITEM!, updateForumSaga);
  yield takeEvery(forumActionSaga.DELETE_ITEM!, deleteReplySaga);
  yield takeEvery(replyActionSaga.ADD_ITEM!, addReplySaga);
  yield takeEvery(replyActionSaga.DELETE_ITEM!, deleteReplySaga);
}
