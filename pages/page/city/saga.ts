import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCityRequest,
  deleteCityRequest,
  getCityListRequest,
  getCityRequest,
  updateCityRequest,
} from "./request";
import {
  addCityFailure,
  addCitySuccess,
  deleteCityFailure,
  deleteCitySuccess,
  getCity,
  getCityFailure,
  getCityList,
  getCityListFailure,
  getCityListSuccess,
  getCitySuccess,
  updateCityFailure,
  updateCitySuccess,
} from "./action";
import {
  ADD_CITY,
  DELETE_CITY,
  GET_CITY,
  GET_CITY_LIST,
  UPDATE_CITY,
} from "./constants";

export function* getCityListSaga(): SagaIterator {
  try {
    const res = yield call(getCityListRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getCityListFailure(res.data?.errors || res.errors));
    } else {
      yield put(getCityListSuccess(res.data?.cities));
    }
  } catch (error) {
    yield put(getCityListFailure(`${error}`));
  }
}

export function* getCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(getCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getCityFailure(res.data?.errors || res.errors));
    } else {
      yield put(getCitySuccess(res.data?.city));
    }
  } catch (error) {
    yield put(getCityFailure(`${error}`));
  }
}

export function* addCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addCityFailure(res.errors));
    } else {
      yield put(addCitySuccess(res.data.createCity));
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
      yield put(updateCitySuccess(res.data.updateCity));
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
  yield takeEvery(GET_CITY, getCitySaga);
  yield takeEvery(GET_CITY_LIST, getCityListSaga);
  yield takeEvery(ADD_CITY, addCitySaga);
  yield takeEvery(UPDATE_CITY, updateCitySaga);
  yield takeEvery(DELETE_CITY, deleteCitySaga);
}
