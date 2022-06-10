import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { chatAction, chatActionSaga } from "./reducer";
import { addChatRequest, addRoomRequest } from "./request";
// import { addChatRequest, updateChatRequest } from "./request";

// import { ChatAction, ChatActionSaga } from "./reducer";

export function* addChatSaga(action: any): SagaIterator {
  try {
    const res = yield call(addChatRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(chatAction.actionChatFailure(res.errors));
    } else {
      yield put(chatAction.addChatSuccess(res.data.createChat));
    }
  } catch (error: any) {
    yield put(chatAction.actionChatFailure(error?.toString()));
  }
}

export function* addRoomSaga(action: any): SagaIterator {
  try {
    const res = yield call(addRoomRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(chatAction.actionChatFailure(res.errors));
    } else {
      yield put(chatAction.updateChatSuccess(res.data.updateChat));
    }
  } catch (error: any) {
    yield put(chatAction.actionChatFailure(error?.toString()));
  }
}

export function* chatSagas(): Generator {
  yield takeEvery(chatActionSaga.ADD_ITEM!, addRoomSaga);
  yield takeEvery(chatActionSaga.UPDATE_ITEM!, addChatSaga);
}
