import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  addServiceRequest,
  deleteServiceRequest,
  // getServiceListRequest,
  // getServiceRequest,
  updateServiceRequest,
} from "./request";
import {
  addServiceFailure,
  addServiceSuccess,
  deleteServiceFailure,
  deleteServiceSuccess,
  // getServiceFailure,
  // getServiceListFailure,
  // getServiceListSuccess,
  // getServiceSuccess,
  updateServiceFailure,
  updateServiceSuccess,
} from "./action";
import {
  ADD_SERVICE,
  DELETE_SERVICE,
  GET_SERVICE,
  GET_SERVICE_LIST,
  UPDATE_SERVICE,
} from "./constants";
import { serviceAction, serviceActionSaga } from "./reducer";

// export function* getServiceListSaga(): SagaIterator {
//   try {
//     const res = yield call(getServiceListRequest);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getServiceListFailure(res.errors));
//     } else {
//       yield put(getServiceListSuccess(res.data.services));
//     }
//   } catch (error: any) {
//     yield put(getServiceListFailure(error?.toString()));
//   }
// }

// export function* getServiceSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(getServiceRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(getServiceFailure(res.errors));
//     } else {
//       yield put(getServiceSuccess(res.data.service));
//     }
//   } catch (error: any) {
//     yield put(getServiceFailure(error?.toString()));
//   }
// }

export function* addServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(addServiceRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(serviceAction.actionServiceFailure(res.errors));
    } else {
      yield put(serviceAction.addServiceSuccess(res.data.createService));
    }
  } catch (error: any) {
    yield put(serviceAction.actionServiceFailure(error?.toString()));
  }
}

export function* updateServiceSaga(action: any): SagaIterator {
  try {
    const res = yield call(updateServiceRequest, action.data);
    if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
      yield put(serviceAction.actionServiceFailure(res.errors));
    } else {
      yield put(serviceAction.updateServiceSuccess(res.data.updateService));
    }
  } catch (error: any) {
    yield put(serviceAction.actionServiceFailure(error?.toString()));
  }
}

// export function* deleteServiceSaga(action: any): SagaIterator {
//   try {
//     const res = yield call(deleteServiceRequest, action.data);
//     if (res.data?.hasOwnProperty("errors") || res.hasOwnProperty("errors")) {
//       yield put(deleteServiceFailure(res.errors));
//     } else {
//       yield put(deleteServiceSuccess(res.data.service));
//     }
//   } catch (error: any) {
//     yield put(deleteServiceFailure(error?.toString()));
//   }
// }

export function* ServiceSagas(): Generator {
  yield takeEvery(serviceActionSaga.ADD_ITEM!, addServiceSaga);
  yield takeEvery(serviceActionSaga.UPDATE_ITEM!, updateServiceSaga);
  // yield takeEvery(GET_SERVICE_LIST, getServiceListSaga);
  // yield takeEvery(GET_SERVICE, getServiceSaga);
  // yield takeEvery(DELETE_SERVICE, deleteServiceSaga);
}
