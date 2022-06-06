import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addRoleRequest,
  deleteRoleRequest,
  getRoleListRequest,
  getRoleRequest,
  updateRoleRequest,
} from "./request";
import {
  addRoleFailure,
  addRoleSuccess,
  deleteRoleFailure,
  deleteRoleSuccess,
  getRole,
  getRoleFailure,
  getRoleList,
  getRoleListFailure,
  getRoleListSuccess,
  getRoleSuccess,
  updateRoleFailure,
  updateRoleSuccess,
} from "./action";
import {
  ADD_ROLE,
  DELETE_ROLE,
  GET_ROLE,
  GET_ROLE_LIST,
  UPDATE_ROLE,
} from "./constants";

export function* getRoleListSaga(): SagaIterator {
  try {
    const res = yield call(getRoleListRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getRoleListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getRoleListSuccess(res.data?.roles));
    }
  } catch (error) {
    yield put(getRoleListFailure(`${error}`));
  }
}

export function* getRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(getRoleRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getRoleFailure(res.data?.errors || res.errors));
    } else {
      yield put(getRoleSuccess(res.data?.role));
    }
  } catch (error) {
    yield put(getRoleFailure(`${error}`));
  }
}

export function* addRoleSaga(action: any): SagaIterator {
  try {
    const res = yield call(addRoleRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addRoleFailure(res.errors));
    } else {
      yield put(addRoleSuccess(res.data.createRole));
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
      yield put(updateRoleSuccess(res.data.updateRole));
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
      yield put(deleteRoleSuccess(res.data.role));
    }
  } catch (error: any) {
    yield put(deleteRoleFailure(error?.toString()));
  }
}

export function* RoleSagas(): Generator {
  yield takeEvery(GET_ROLE, getRoleSaga);
  yield takeEvery(GET_ROLE_LIST, getRoleListSaga);
  yield takeEvery(ADD_ROLE, addRoleSaga);
  yield takeEvery(UPDATE_ROLE, updateRoleSaga);
  yield takeEvery(DELETE_ROLE, deleteRoleSaga);
}
