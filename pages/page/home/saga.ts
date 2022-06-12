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
import { contentAction } from "../content/reducer";
import { forumAction } from "../forum/reducer";
import { chatAction } from "../chat/reducer";

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getUserProfileRequest);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(homeAction.actionFailed(res.data?.errors));
      console.error(res?.errors);
      return;
    }

    yield put(homeAction.getHomeItemsSuccess(res.data.me));
    yield put(
      serviceAction.getServiceItemsSuccess(
        res.data.services || res.data.services
      )
    );
    yield put(taskAction.getTaskItemsSuccess(res.data.tasks || res.data.tasks));
    yield put(
      forumAction.getForumItemsSuccess(res.data.questions || res.data.questions)
    );
    yield put(chatAction.getRoomItemsSuccess(res.data.rooms || res.data.rooms));

    if (res.data.me?.role?.value == 1) {
      yield put(roleAction.getRoleItemsSuccess(res.data.roles));
      yield put(categoryAction.getCategoryItemsSuccess(res.data.categories));
      yield put(conditionAction.getConditionItemsSuccess(res.data.conditions));
      yield put(countryAction.getCountryItemsSuccess(res.data.countries));
      yield put(cityAction.getCityItemsSuccess(res.data.cities));
      yield put(userAction.getUserItemsSuccess(res.data.users));
      yield put(contentAction.getContentItemsSuccess(res.data.pages));
    }
  } catch (error) {
    yield put(homeAction.actionHomeFailed(`${error}`));
    console.error(error);
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(homeActionSaga.GET_ITEM!, getClientProfileSaga);
}
