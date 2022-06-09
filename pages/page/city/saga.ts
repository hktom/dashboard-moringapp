import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCityRequest,
  deleteCityRequest,
  getCityListRequest,
  getCityRequest,
  updateCityRequest,
} from "./request";
// import {
//   // cityAction.actionCityFailure,
//   addCitySuccess,
//   deleteCityFailure,
//   deleteCitySuccess,
//   getCity,
//   getCityFailure,
//   getCityList,
//   getCityListFailure,
//   getCityListSuccess,
//   getCitySuccess,
//   updateCityFailure,
//   updateCitySuccess,
// } from "./action";
import {
  ADD_CITY,
  DELETE_CITY,
  GET_CITY,
  GET_CITY_LIST,
  UPDATE_CITY,
} from "./constants";
import { cityAction, cityActionSaga } from "./reducer";

// export function* getCityListSaga(): SagaIterator {
//   try {
//     const res = yield call(getCityListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCityListFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCityListSuccess(res.data?.cities));
//     }
//   } catch (error) {
//     yield put(getCityListFailure(`${error}`));
//   }
// }

// export function* getCitySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getCityRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCityFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCitySuccess(res.data?.city));
//     }
//   } catch (error) {
//     yield put(getCityFailure(`${error}`));
//   }
// }

export function* addCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(cityAction.actionCityFailure(res.errors));
    } else {
      yield put(cityAction.addCitySuccess(res.data.createCity));
    }
  } catch (error: any) {
    yield put(cityAction.actionCityFailure(error?.toString()));
  }
}

export function* updateCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCityRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(cityAction.actionCityFailure(res.errors));
    } else {
      yield put(cityAction.updateCitySuccess(res.data.updateCity));
    }
  } catch (error: any) {
    yield put(cityAction.actionCityFailure(error?.toString()));
  }
}

// export function* deleteCitySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(deleteCityRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(deleteCityFailure(res.errors));
//     } else {
//       yield put(deleteCitySuccess(res.data.City));
//     }
//   } catch (error: any) {
//     yield put(deleteCityFailure(error?.toString()));
//   }
// }

export function* CitySagas(): Generator {
  // yield takeEvery(GET_CITY, getCitySaga);
  // yield takeEvery(GET_CITY_LIST, getCityListSaga);
  // yield takeEvery(DELETE_CITY, deleteCitySaga);
  yield takeEvery(cityActionSaga.ADD_ITEM!, addCitySaga);
  yield takeEvery(cityActionSaga.UPDATE_ITEM!, updateCitySaga);
}
