import { put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_CLIENT_PROFILE } from './constants';
import {
  getClientProfileActionSuccess,
  getClientProfileActionFail,
} from './actions';
import { getHomeRequest } from './requests';
import { signInActionFail } from 'pages/Login/actions';
import { COMMON } from 'utils/constant';
import { helper } from 'utils/helper';
import { routes } from 'utils/routes';
import {
  getCategorySuccess,
  getPriceList,
  setListAudiences,
  setListOffers,
} from 'pages/UploadVideo/actions';
import { setRoles } from 'pages/AccountSetup/actions';

export function* getClientProfileSaga(): SagaIterator {
  try {
    const res = yield call(getHomeRequest);
    if (res.data.hasOwnProperty('errors') || res.hasOwnProperty('errors')) {
      console.error(res?.errors);
    } else {
      yield put(getClientProfileActionSuccess(res?.data?.clientProfile));
      yield put(setListAudiences(res.data?.audience || []));
      yield put(setListOffers(res.data?.offer || []));
      yield put(getCategorySuccess(res.data?.category || []));
      yield put(setRoles(res.data?.roles || []));
      yield put(
        getPriceList(
          res.data?.prices?.sort((a: any, b: any) => a.amount - b.amount) || []
        )
      );
    }
  } catch (error) {
    console.error(error);
    helper.removeLocalStorage(COMMON.ACCESS_TOKEN);
    yield put(getClientProfileActionFail(error));
    window.location.href = routes.login;
  }
}

export function* homeSagas(): Generator {
  yield takeEvery(GET_CLIENT_PROFILE, getClientProfileSaga);
}
