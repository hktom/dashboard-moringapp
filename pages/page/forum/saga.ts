import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { forumAction, forumActionSaga } from "./reducer";
import { addForumRequest, addReplyRequest } from "./request";
// import { addForumRequest, updateForumRequest } from "./request";

// import { ForumAction, ForumActionSaga } from "./reducer";

export function* addForumSaga(action: any): SagaIterator {
  try {
    const res = yield call(addForumRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailure(res.errors));
    } else {
      yield put(forumAction.addForumSuccess(res.data.createForum));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailure(error?.toString()));
  }
}

export function* addReplySaga(action: any): SagaIterator {
  try {
    const res = yield call(addReplyRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(forumAction.actionForumFailure(res.errors));
    } else {
      yield put(forumAction.updateForumSuccess(res.data.updateForum));
    }
  } catch (error: any) {
    yield put(forumAction.actionForumFailure(error?.toString()));
  }
}

export function* forumSagas(): Generator {
  yield takeEvery(forumActionSaga.ADD_ITEM!, addForumSaga);
  yield takeEvery(forumActionSaga.UPDATE_ITEM!, addReplySaga);
}
