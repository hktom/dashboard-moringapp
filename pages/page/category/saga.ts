import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addCategoryRequest,
  deleteCategoryRequest,
  // getCategoryListRequest,
  // getCategoryRequest,
  updateCategoryRequest,
} from "./request";
// import {
//   addCategoryFailure,
//   addCategorySuccess,
//   deleteCategoryFailure,
//   deleteCategorySuccess,
//   getCategory,
//   getCategoryFailure,
//   getCategoryList,
//   getCategoryListFailure,
//   getCategoryListSuccess,
//   getCategorySuccess,
//   updateCategoryFailure,
//   updateCategorySuccess,
// } from "./action";
// import {
//   ADD_CATEGORY,
//   DELETE_CATEGORY,
//   GET_CATEGORY,
//   GET_CATEGORY_LIST,
//   UPDATE_CATEGORY,
// } from "./constants";
import { categoryAction, categoryActionSaga } from "./reducer";

// export function* getCategoryListSaga(): SagaIterator {
//   try {
//     const res = yield call(getCategoryListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCategoryListFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCategoryListSuccess(res.data?.categories));
//     }
//   } catch (error) {
//     yield put(getCategoryListFailure(`${error}`));
//   }
// }

// export function* getCategorySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getCategoryRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getCategoryFailure(res.data?.errors || res.errors));
//     } else {
//       yield put(getCategorySuccess(res.data?.category));
//     }
//   } catch (error) {
//     yield put(getCategoryFailure(`${error}`));
//   }
// }

export function* addCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(addCategoryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(categoryAction.actionFailed(res.errors));
    } else {
      yield put(categoryAction.actionSuccessAdd(res.data.createCategory));
    }
  } catch (error: any) {
    yield put(categoryAction.actionFailed(error?.toString()));
  }
}

export function* updateCategorySaga(action: any): SagaIterator {
  try {
    const res = yield call(updateCategoryRequest, action.payload);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(categoryAction.failed(res.errors));
    } else {
      yield put(categoryAction.actionSuccessUpdate(res.data.updateCategory));
    }
  } catch (error: any) {
    console.error(error);
    yield put(categoryAction.actionFailed(error?.toString()));
  }
}

// export function* deleteCategorySaga(action: any): SagaIterator {
//   try {
//     const res = yield call(deleteCategoryRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(deleteCategoryFailure(res.errors));
//     } else {
//       yield put(deleteCategorySuccess(res.data.Category));
//     }
//   } catch (error: any) {
//     yield put(deleteCategoryFailure(error?.toString()));
//   }
// }

export function* CategorySagas(): Generator {
  // yield takeEvery(GET_CATEGORY_LIST, getCategoryListSaga);
  // yield takeEvery(GET_CATEGORY, getCategorySaga);
  yield takeEvery("CATEGORY_" + categoryActionSaga.ADD_ITEM!, addCategorySaga);
  yield takeEvery(
    "CATEGORY_" + categoryActionSaga.UPDATE_ITEM!,
    updateCategorySaga
  );
  // yield takeEvery(DELETE_CATEGORY, deleteCategorySaga);
}
