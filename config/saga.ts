import { fork, SimpleEffect } from "redux-saga/effects";
import { loginSagas } from "../reducer/login/saga";


export function* rootSaga(): IterableIterator<SimpleEffect<"FORK">> {
  yield fork(loginSagas);
}
