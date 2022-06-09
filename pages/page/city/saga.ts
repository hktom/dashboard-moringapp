import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { addCityRequest, updateCityRequest } from "./request";
import { cityAction, cityActionSaga } from "./reducer";

export function* addCitySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCityRequest, action.payload);
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
    const res = yield call(updateCityRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(cityAction.actionCityFailure(res.errors));
    } else {
      yield put(cityAction.updateCitySuccess(res.data.updateCity));
    }
  } catch (error: any) {
    yield put(cityAction.actionCityFailure(error?.toString()));
  }
}

export function* CitySagas(): Generator {
  yield takeEvery(cityActionSaga.ADD_ITEM!, addCitySaga);
  yield takeEvery(cityActionSaga.UPDATE_ITEM!, updateCitySaga);
}
