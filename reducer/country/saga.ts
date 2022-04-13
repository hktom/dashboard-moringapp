import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCountryRequest,
  deleteCountryRequest,
  updateCountryRequest,
} from "./request";
import {
  addCountryFailure,
  addCountrySuccess,
  deleteCountryFailure,
  deleteCountrySuccess,
  getCountryFailure,
  getCountryList,
  getCountryListFailure,
  getCountryListSuccess,
  getCountrySuccess,
  updateCountryFailure,
  updateCountrySuccess,
} from "./action";
import {
  ADD_COUNTRY,
  DELETE_COUNTRY,
  GET_COUNTRY,
  GET_COUNTRY_LIST,
  UPDATE_COUNTRY,
} from "./constants";

export function* getCountryListSaga(): SagaIterator {
  try {
    const res = yield call(getCountryList);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getCountryListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getCountryListSuccess(res.data?.countries));
    }
  } catch (error) {
    yield put(getCountryListFailure(`${error}`));
  }
}

export function* getCountry(action: any): SagaIterator {
  try {
    const res = yield call(getCountry, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getCountryFailure(res.data?.errors || res.errors));
    } else {
      yield put(getCountrySuccess(res.data?.countries));
    }
  } catch (error) {
    yield put(getCountryFailure(`${error}`));
  }
}

export function* addCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCountryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addCountryFailure(res.errors));
    } else {
      yield put(addCountrySuccess(res.data.Country));
    }
  } catch (error: any) {
    yield put(addCountryFailure(error?.toString()));
  }
}

export function* updateCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCountryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateCountryFailure(res.errors));
    } else {
      yield put(updateCountrySuccess(res.data.Country));
    }
  } catch (error: any) {
    yield put(updateCountryFailure(error?.toString()));
  }
}

export function* deleteCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteCountryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteCountryFailure(res.errors));
    } else {
      yield put(deleteCountrySuccess(res.data.Country));
    }
  } catch (error: any) {
    yield put(deleteCountryFailure(error?.toString()));
  }
}

export function* CountrySagas(): Generator {
  yield takeEvery(GET_COUNTRY, getCountry);
  yield takeEvery(GET_COUNTRY_LIST, getCountryList);
  yield takeEvery(ADD_COUNTRY, addCountrySaga);
  yield takeEvery(UPDATE_COUNTRY, updateCountrySaga);
  yield takeEvery(DELETE_COUNTRY, deleteCountrySaga);
}
