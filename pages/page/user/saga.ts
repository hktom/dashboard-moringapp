import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  // addUserRequest,
  deleteUserRequest,
  // getUserListRequest,
  // getUserRequest,
  updateUserRequest,
} from "./request";
import {
  // addUserFailure,
  // addUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  // getUser,
  // getUserFailure,
  // getUserList,
  // getUserListFailure,
  // getUserListSuccess,
  // getUserSuccess,
  updateUserFailure,
  updateUserSuccess,
} from "./action";
import {
  ADD_USER,
  DELETE_USER,
  GET_USER,
  GET_USER_LIST,
  UPDATE_USER,
} from "./constants";

// export function* getUserListSaga(): SagaIterator {
//   try {
//     const res = yield call(getUserListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getUserListFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getUserListSuccess(res.data?.users));
//     }
//   } catch (error) {
//     yield put(getUserListFailure(`${error}`));
//   }
// }

// export function* getUserSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getUserRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getUserFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getUserSuccess(res.data?.user));
//     }
//   } catch (error) {
//     yield put(getUserFailure(`${error}`));
//   }
// }

// export function* addUserSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(addUserRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(addUserFailure(res.errors));
//     } else {
//       yield put(addUserSuccess(res.data.User));
//     }
//   } catch (error: any) {
//     yield put(addUserFailure(error?.toString()));
//   }
// }

export function* updateUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateUserRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateUserFailure(res.errors));
    } else {
      yield put(updateUserSuccess(res.data.user));
    }
  } catch (error: any) {
    yield put(updateUserFailure(error?.toString()));
  }
}

export function* deleteUserSaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteUserRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteUserFailure(res.errors));
    } else {
      yield put(deleteUserSuccess(res.data.user));
    }
  } catch (error: any) {
    yield put(deleteUserFailure(error?.toString()));
  }
}

export function* UserSagas(): Generator {
  // yield takeEvery(GET_USER, getUserSaga);
  // yield takeEvery(GET_USER_LIST, getUserListSaga);
  // yield takeEvery(ADD_USER, addUserSaga);
  yield takeEvery(UPDATE_USER, updateUserSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga);
}
