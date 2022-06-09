import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import { UPLOAD_IMAGE } from "./constants";
import { uploadImageFailure, uploadImageSuccess } from "./actions";
import { uploadImageRequest } from "./request";
import { imageAction, imageActionSaga } from "./reducer";

export function* uploadImageSaga(action: any): SagaIterator {
  try {
    const res = yield call(uploadImageRequest, action.payload);
    if (res.data) {
      yield put(imageAction.uploadSuccess(res.data));
    } else {
      yield put(
        imageAction.uploadFailure("Could not upload image, try with an other")
      );
    }
  } catch (error) {
    yield put(imageAction.uploadFailure(`${error}`));
    // console.error(error);
  }
}

export function* imageSagas(): Generator {
  yield takeEvery(imageActionSaga.ADD_ITEM!, uploadImageSaga);
}
