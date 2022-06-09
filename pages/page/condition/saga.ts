import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addConditionRequest,
  // deleteConditionRequest,
  // getConditionListRequest,
  // getConditionRequest,
  updateConditionRequest,
} from "./request";
// import {
//   addConditionFailure,
//   addConditionSuccess,
//   deleteConditionFailure,
//   deleteConditionSuccess,
//   getConditionFailure,
//   getConditionList,
//   getConditionListFailure,
//   getConditionListSuccess,
//   getConditionSuccess,
//   updateConditionFailure,
//   updateConditionSuccess,
// } from "./action";
// import {
//   ADD_CONDITION,
//   DELETE_CONDITION,
//   GET_CONDITION,
//   GET_CONDITION_LIST,
//   UPDATE_CONDITION,
// } from "./constants";
import { conditionAction, conditionActionSaga } from "./reducer";

// export function* getConditionListSaga(): SagaIterator {
//   try {
//     const res = yield call(getConditionListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getConditionListFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getConditionListSuccess(res.data?.conditions));
//     }
//   } catch (error) {
//     yield put(getConditionListFailure(`${error}`));
//   }
// }

// export function* getConditionSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getConditionRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getConditionFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getConditionSuccess(res.data?.condition));
//     }
//   } catch (error) {
//     yield put(getConditionFailure(`${error}`));
//   }
// }

export function* addConditionSaga(action: any): SagaIterator {
  try {
    const res = yield call(addConditionRequest, action.data);
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
    const res = yield call(updateConditionRequest, action.data);
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

// export function* deleteConditionSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(deleteConditionRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(deleteConditionFailure(res.errors));
//     } else {
//       yield put(deleteConditionSuccess(res.data.condition));
//     }
//   } catch (error: any) {
//     yield put(deleteConditionFailure(error?.toString()));
//   }
// }

export function* ConditionSagas(): Generator {
  // yield takeEvery(GET_CONDITION, getConditionSaga);
  // yield takeEvery(GET_CONDITION_LIST, getConditionListSaga);
  yield takeEvery(conditionActionSaga.ADD_ITEM!, addConditionSaga);
  yield takeEvery(conditionActionSaga.UPDATE_ITEM!, updateConditionSaga);
  // yield takeEvery(DELETE_CONDITION, deleteConditionSaga);
}
