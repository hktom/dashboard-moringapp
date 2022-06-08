import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getUserProfileRequest } from "./request";
import { userAction } from "../user/reducer";
import { serviceAction } from "../service/reducer";
import { taskAction } from "../task/reducer";
import { roleAction } from "../role/reducer";
import { categoryAction } from "../category/reducer";
import { conditionAction } from "../condition/reducer";
import { countryAction } from "../country/reducer";
import { cityAction } from "../city/reducer";
import { homeAction, homeActionSaga } from "./reducer";

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getUserProfileRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(homeAction.actionFailed(res.data?.errors));
      console.error(res?.errors);
      return;
    }

    yield put(homeAction.getItemsSuccess(res.data.me));
    yield put(
      serviceAction.getItemsSuccess(res.data.services || res.data.services)
    );
    yield put(taskAction.getItemsSuccess(res.data.tasks || res.data.tasks));

    if (res.data.me?.role?.value == 1) {
      yield put(roleAction.getItemsSuccess(res.data.roles));
      yield put(categoryAction.getItemsSuccess(res.data.categories));
      yield put(conditionAction.getItemsSuccess(res.data.conditions));
      yield put(countryAction.getItemsSuccess(res.data.countries));
      yield put(cityAction.getItemsSuccess(res.data.cities));
      yield put(userAction.getItemsSuccess(res.data.users));
    }
  } catch (error) {
    yield put(homeAction.actionFailed(`${error}`));
    console.error(error);
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(homeActionSaga.GET_ITEM!, getClientProfileSaga);
}
