import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addPaymentRequest,
  deletePaymentRequest,
  updatePaymentRequest,
} from "./request";
import {
  addPaymentFailure,
  addPaymentSuccess,
  deletePaymentFailure,
  deletePaymentSuccess,
  updatePaymentFailure,
  updatePaymentSuccess,
} from "./action";
import {
  ADD_PAYMENT,
  DELETE_PAYMENT,
  UPDATE_PAYMENT,
} from "./constants";

export function* addPaymentSaga(action: any): SagaIterator {
  try {
    const res = yield call(addPaymentRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addPaymentFailure(res.errors));
    } else {
      yield put(addPaymentSuccess(res.data.Payment));
    }
  } catch (error: any) {
    yield put(addPaymentFailure(error?.toString()));
  }
}

export function* updatePaymentSaga(action: any): SagaIterator {
  try {
    const res = yield call(updatePaymentRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updatePaymentFailure(res.errors));
    } else {
      yield put(updatePaymentSuccess(res.data.Payment));
    }
  } catch (error: any) {
    yield put(updatePaymentFailure(error?.toString()));
  }
}

export function* deletePaymentSaga(action: any): SagaIterator {
  try {
    const res = yield call(deletePaymentRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deletePaymentFailure(res.errors));
    } else {
      yield put(deletePaymentSuccess(res.data.Payment));
    }
  } catch (error: any) {
    yield put(deletePaymentFailure(error?.toString()));
  }
}

export function* PaymentSagas(): Generator {
  yield takeEvery(ADD_PAYMENT, addPaymentSaga);
  yield takeEvery(UPDATE_PAYMENT, updatePaymentSaga);
  yield takeEvery(DELETE_PAYMENT, deletePaymentSaga);
}
