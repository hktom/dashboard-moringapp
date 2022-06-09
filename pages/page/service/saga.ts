import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addServiceRequest,
  deleteServiceRequest,
  updateServiceRequest,
} from "./request";
import { serviceAction, serviceActionSaga } from "./reducer";

export function* addServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(addServiceRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(serviceAction.actionServiceFailure(res.errors));
    } else {
      yield put(serviceAction.addServiceSuccess(res.data.createService));
    }
  } catch (error: any) {
    yield put(serviceAction.actionServiceFailure(error?.toString()));
  }
}

export function* updateServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateServiceRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(serviceAction.actionServiceFailure(res.errors));
    } else {
      yield put(serviceAction.updateServiceSuccess(res.data.updateService));
    }
  } catch (error: any) {
    yield put(serviceAction.actionServiceFailure(error?.toString()));
  }
}

export function* ServiceSagas(): Generator {
  yield takeEvery(serviceActionSaga.ADD_ITEM!, addServiceSaga);
  yield takeEvery(serviceActionSaga.UPDATE_ITEM!, updateServiceSaga);
}
