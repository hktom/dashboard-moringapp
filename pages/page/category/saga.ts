import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCategoryRequest,
  deleteCategoryRequest,
  updateCategoryRequest,
} from "./request";

import { categoryAction, categoryActionSaga } from "./reducer";

export function* addCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCategoryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(categoryAction.actionCategoryFailed(res.errors));
    } else {
      yield put(categoryAction.addCategorySuccess(res.data.createCategory));
    }
  } catch (error: any) {
    yield put(categoryAction.actionCategoryFailed(error?.toString()));
  }
}

export function* updateCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCategoryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(categoryAction.actionCategoryFailed(res.errors));
    } else {
      yield put(categoryAction.updateCategorySuccess(res.data.updateCategory));
    }
  } catch (error: any) {
    console.error(error);
    yield put(categoryAction.actionCategoryFailed(error?.toString()));
  }
}

export function* CategorySagas(): Generator {
  yield takeEvery(categoryActionSaga.ADD_ITEM!, addCategorySaga);
  yield takeEvery(categoryActionSaga.UPDATE_ITEM!, updateCategorySaga);
}
