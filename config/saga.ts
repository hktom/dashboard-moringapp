import { fork, SimpleEffect } from "redux-saga/effects";
import { homeSagas } from "../reducer/home/saga";
import { loginSagas } from "../reducer/login/saga";


export function* rootSaga(): IterableIterator<SimpleEffect<"FORK">> {
  yield fork(loginSagas);
  yield fork(homeSagas);
}
