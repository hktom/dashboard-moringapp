import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCountryRequest,
  deleteCountryRequest,
  getCountryListRequest,
  getCountryRequest,
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
import { countryAction, countryActionSaga } from "./reducer";

// export function* getCountryListSaga(): SagaIterator {
//   try {
//     const res = yield call(getCountryListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCountryListFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCountryListSuccess(res.data?.countries));
//     }
//   } catch (error) {
//     yield put(getCountryListFailure(`${error}`));
//   }
// }

// export function* getCountrySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getCountryRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCountryFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCountrySuccess(res.data?.country));
//     }
//   } catch (error) {
//     yield put(getCountryFailure(`${error}`));
//   }
// }

export function* addCountrySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCountryRequest, action.data);
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
    const res = yield call(updateCountryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(countryAction.actionCountryFailure(res.errors));
    } else {
      yield put(countryAction.updateCountrySuccess(res.data.updateCountry));
    }
  } catch (error: any) {
    yield put(countryAction.actionCountryFailure(error?.toString()));
  }
}

// export function* deleteCountrySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(deleteCountryRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(deleteCountryFailure(res.errors));
//     } else {
//       yield put(deleteCountrySuccess(res.data.Country));
//     }
//   } catch (error: any) {
//     yield put(deleteCountryFailure(error?.toString()));
//   }
// }

export function* CountrySagas(): Generator {
  // yield takeEvery(GET_COUNTRY, getCountrySaga);
  // yield takeEvery(GET_COUNTRY_LIST, getCountryListSaga);
  yield takeEvery(countryActionSaga.ADD_ITEM!, addCountrySaga);
  yield takeEvery(countryActionSaga.UPDATE_ITEM!, updateCountrySaga);
  // yield takeEvery(DELETE_COUNTRY, deleteCountrySaga);
}
