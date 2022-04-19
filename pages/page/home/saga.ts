import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { GET_USER_PROFILE } from "./constants";
import { getUserProfile, getUserProfileFail, getUserProfileSuccess } from "./actions";
import { getUserProfileRequest } from "./request";
import { getServiceListSuccess } from "../service/action";
import { getRoleListSuccess } from "../role/action";
import { getCategoryListSuccess } from "../category/action";
import { getConditionListSuccess } from "../condition/action";
import { getCountryListSuccess } from "../country/action";
import { getCityListSuccess } from "../city/action";
import { getTaskListSuccess } from "../task/action";
import { getUserListSuccess } from "../user/action";

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getUserProfileRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(getUserProfileFail(res.data?.errors));
      console.error(res?.errors);
    } else {
      yield put(getUserProfileSuccess(res.data.me));
      yield put(getServiceListSuccess(res.data.services));
      yield put(getRoleListSuccess(res.data.roles));
      yield put(getCategoryListSuccess(res.data.categories));
      yield put(getConditionListSuccess(res.data.conditions));
      yield put(getCountryListSuccess(res.data.countries));
      yield put(getCityListSuccess(res.data.cities));
      yield put(getTaskListSuccess(res.data.tasks));
      yield put(getUserListSuccess(res.data.users));
    }
  } catch (error) {
    yield put(getUserProfileFail(`${error}`));
    console.error(error);
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(GET_USER_PROFILE, getClientProfileSaga);
}
