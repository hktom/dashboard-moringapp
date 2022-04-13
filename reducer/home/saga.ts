import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { GET_USER_PROFILE } from "./constants";
import { getUserProfile, getUserProfileSuccess } from "./actions";
import { getUserProfileRequest } from "./request";
import { getServiceListSuccess } from "../service/action";
import { getRoleListSuccess } from "../role/action";
import { getCategoryListSuccess } from "../category/action";
import { getConditionListSuccess } from "../condition/action";
import { getCountryListSuccess } from "../country/action";
import { getCityListSuccess } from "../city/action";

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getUserProfileRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      console.error(res?.errors);
    } else {
      yield put(getUserProfileSuccess(res.data.me));
      yield put(getServiceListSuccess(res.data.services));
      yield put(getRoleListSuccess(res.data.roles));
      yield put(getCategoryListSuccess(res.data.categories));
      yield put(getConditionListSuccess(res.data.conditions));
      yield put(getCountryListSuccess(res.data.countries));
      yield put(getCityListSuccess(res.data.cities));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(GET_USER_PROFILE, getClientProfileSaga);
}
