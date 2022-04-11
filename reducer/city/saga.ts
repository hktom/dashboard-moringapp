import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCityRequest,
  deleteCityRequest,
  updateCityRequest,
} from "./request";
import {
  addCityFailure,
  addCitySuccess,
  deleteCityFailure,
  deleteCitySuccess,
  updateCityFailure,
  updateCitySuccess,
} from "./action";
import {
  ADD_CITY,
  DELETE_CITY,
  UPDATE_CITY,
} from "./constants";

export function* addCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addCityFailure(res.errors));
    } else {
      yield put(addCitySuccess(res.data.City));
    }
  } catch (error: any) {
    yield put(addCityFailure(error?.toString()));
  }
}

export function* updateCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateCityFailure(res.errors));
    } else {
      yield put(updateCitySuccess(res.data.City));
    }
  } catch (error: any) {
    yield put(updateCityFailure(error?.toString()));
  }
}

export function* deleteCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteCityFailure(res.errors));
    } else {
      yield put(deleteCitySuccess(res.data.City));
    }
  } catch (error: any) {
    yield put(deleteCityFailure(error?.toString()));
  }
}

export function* CitySagas(): Generator {
  yield takeEvery(ADD_CITY, addCitySaga);
  yield takeEvery(UPDATE_CITY, updateCitySaga);
  yield takeEvery(DELETE_CITY, deleteCitySaga);
}
