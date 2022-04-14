import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import { UPLOAD_IMAGE } from "./constants";
import { uploadImageFailure, uploadImageSuccess } from "./actions";
import { uploadImageRequest } from "./request";

export function* uploadImageSaga(action: any): SagaIterator {
  try {
    const res = yield call(uploadImageRequest, action.data);
    if (res.data) {
      yield put(uploadImageSuccess(res.data));
    } else {
      yield put(
        uploadImageFailure("Could not upload image, try with an other")
      );
    }
  } catch (error) {
    yield put(uploadImageFailure(`${error}`));
    console.error(error);
  }
}

export function* imageSagas(): Generator {
  yield takeEvery(UPLOAD_IMAGE, uploadImageSaga);
}
