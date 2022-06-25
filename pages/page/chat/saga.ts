import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { chatAction, chatActionSaga } from "./reducer";
import { addChatRequest, addRoomRequest } from "./request";

export function* addRoomSaga(action: any): SagaIterator {
  try {
    yield call(addRoomRequest, action.payload);
  } catch (error: any) {
    yield put(chatAction.actionChatFailed(error?.toString()));
    console.error(error);
  }
}

export function* addChatSaga(action: any): SagaIterator {
  try {
    yield call(addChatRequest, action.payload);
  } catch (error: any) {
    yield put(chatAction.actionChatFailed(error?.toString()));
    console.error(error);
  }
}

export function* chatSagas(): Generator {
  yield takeEvery(chatActionSaga.ADD_ITEM!, addRoomSaga);
  yield takeEvery(chatActionSaga.UPDATE_ITEM!, addChatSaga);
}
