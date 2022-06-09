import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addConditionRequest, updateConditionRequest } from "./request";

import { conditionAction, conditionActionSaga } from "./reducer";

export function* addConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(addConditionRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(conditionAction.actionConditionFailure(res.errors));
    } else {
      yield put(conditionAction.addConditionSuccess(res.data.createCondition));
    }
  } catch (error: any) {
    yield put(conditionAction.actionConditionFailure(error?.toString()));
  }
}

export function* updateConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateConditionRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(conditionAction.actionConditionFailure(res.errors));
    } else {
      yield put(
        conditionAction.updateConditionSuccess(res.data.updateCondition)
      );
    }
  } catch (error: any) {
    yield put(conditionAction.actionConditionFailure(error?.toString()));
  }
}

export function* ConditionSagas(): Generator {
  yield takeEvery(conditionActionSaga.ADD_ITEM!, addConditionSaga);
  yield takeEvery(conditionActionSaga.UPDATE_ITEM!, updateConditionSaga);
}
