import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addCountryRequest, updateCountryRequest } from "./request";
import { countryAction, countryActionSaga } from "./reducer";

export function* addCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCountryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(countryAction.actionCountryFailure(res.errors));
    } else {
      yield put(countryAction.addCountrySuccess(res.data.createCountry));
    }
  } catch (error: any) {
    yield put(countryAction.actionCountryFailure(error?.toString()));
  }
}

export function* updateCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCountryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(countryAction.actionCountryFailure(res.errors));
    } else {
      yield put(countryAction.updateCountrySuccess(res.data.updateCountry));
    }
  } catch (error: any) {
    yield put(countryAction.actionCountryFailure(error?.toString()));
  }
}

export function* CountrySagas(): Generator {
  yield takeEvery(countryActionSaga.ADD_ITEM!, addCountrySaga);
  yield takeEvery(countryActionSaga.UPDATE_ITEM!, updateCountrySaga);
}
