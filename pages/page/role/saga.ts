import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addRoleRequest, updateRoleRequest } from "./request";

import { roleAction, roleActionSaga } from "./reducer";

export function* addRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(addRoleRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(roleAction.actionRoleFailed(res.errors));
    } else {
      yield put(roleAction.addRoleSuccess(res.data.createRole));
    }
  } catch (error: any) {
    yield put(roleAction.actionRoleFailed(error?.toString()));
  }
}

export function* updateRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateRoleRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(roleAction.actionRoleFailed(res.errors));
    } else {
      yield put(roleAction.updateRoleSuccess(res.data.updateRole));
    }
  } catch (error: any) {
    yield put(roleAction.actionRoleFailed(error?.toString()));
  }
}

export function* RoleSagas(): Generator {
  yield takeEvery(roleActionSaga.ADD_ITEM!, addRoleSaga);
  yield takeEvery(roleActionSaga.UPDATE_ITEM!, updateRoleSaga);
}
