import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCategoryRequest,
  deleteCategoryRequest,
  updateCategoryRequest,
} from "./request";
import {
  addCategoryFailure,
  addCategorySuccess,
  deleteCategoryFailure,
  deleteCategorySuccess,
  updateCategoryFailure,
  updateCategorySuccess,
} from "./action";
import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "./constants";

export function* addCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCategoryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(addCategoryFailure(res.errors));
    } else {
      yield put(addCategorySuccess(res.data.Category));
    }
  } catch (error: any) {
    yield put(addCategoryFailure(error?.toString()));
  }
}

export function* updateCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCategoryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(updateCategoryFailure(res.errors));
    } else {
      yield put(updateCategorySuccess(res.data.Category));
    }
  } catch (error: any) {
    yield put(updateCategoryFailure(error?.toString()));
  }
}

export function* deleteCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(deleteCategoryRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(deleteCategoryFailure(res.errors));
    } else {
      yield put(deleteCategorySuccess(res.data.Category));
    }
  } catch (error: any) {
    yield put(deleteCategoryFailure(error?.toString()));
  }
}

export function* CategorySagas(): Generator {
  yield takeEvery(ADD_CATEGORY, addCategorySaga);
  yield takeEvery(UPDATE_CATEGORY, updateCategorySaga);
  yield takeEvery(DELETE_CATEGORY, deleteCategorySaga);
}
