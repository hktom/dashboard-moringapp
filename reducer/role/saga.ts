import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addRoleRequest,
  deleteRoleRequest,
  updateRoleRequest,
} from "./request";
import {
  addRoleFailure,
  addRoleSuccess,
  deleteRoleFailure,
  deleteRoleSuccess,
  updateRoleFailure,
  updateRoleSuccess,
} from "./action";
import {
  ADD_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE,
} from "./constants";

export function* addRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(addRoleRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addRoleFailure(res.errors));
    } else {
      yield put(addRoleSuccess(res.data.Role));
    }
  } catch (error: any) {
    yield put(addRoleFailure(error?.toString()));
  }
}

export function* updateRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateRoleRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateRoleFailure(res.errors));
    } else {
      yield put(updateRoleSuccess(res.data.Role));
    }
  } catch (error: any) {
    yield put(updateRoleFailure(error?.toString()));
  }
}

export function* deleteRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteRoleRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteRoleFailure(res.errors));
    } else {
      yield put(deleteRoleSuccess(res.data.Role));
    }
  } catch (error: any) {
    yield put(deleteRoleFailure(error?.toString()));
  }
}

export function* RoleSagas(): Generator {
  yield takeEvery(ADD_ROLE, addRoleSaga);
  yield takeEvery(UPDATE_ROLE, updateRoleSaga);
  yield takeEvery(DELETE_ROLE, deleteRoleSaga);
}
