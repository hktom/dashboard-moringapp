import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { deleteUserRequest, updateUserRequest } from "./request";
import { userAction, userActionSaga } from "./reducer";

export function* updateUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateUserRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(userAction.actionUserFailure(res.errors));
    } else {
      yield put(userAction.updateUserSuccess(res.data.user));
    }
  } catch (error: any) {
    yield put(userAction.actionUserFailure(error?.toString()));
  }
}

export function* UserSagas(): Generator {
  yield takeEvery(userActionSaga.UPDATE_ITEM!, updateUserSaga);
}
