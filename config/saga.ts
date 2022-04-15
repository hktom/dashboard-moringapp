import { fork, SimpleEffect } from "redux-saga/effects";
import { CategorySagas } from "../store/category/saga";
import { CitySagas } from "../store/city/saga";
import { ConditionSagas } from "../store/condition/saga";
import { CountrySagas } from "../store/country/saga";
import { homeSagas } from "../store/home/saga";
import { imageSagas } from "../store/image/saga";
import { JobSagas } from "../store/jobs/saga";
import { loginSagas } from "../store/auth/saga";
import { PaymentSagas } from "../store/payment/saga";
import { RoleSagas } from "../store/role/saga";
import { ServiceSagas } from "../store/service/saga";
import { taskSagas } from "../store/task/saga";
import { UserSagas } from "../store/user/saga";

export function* rootSaga(): IterableIterator<SimpleEffect<"FORK">> {
  yield fork(loginSagas);
  yield fork(homeSagas);
  yield fork(taskSagas);
  yield fork(CategorySagas);
  yield fork(UserSagas);
  yield fork(ServiceSagas);
  yield fork(CitySagas);
  yield fork(CountrySagas);
  yield fork(ConditionSagas);
  yield fork(JobSagas);
  yield fork(PaymentSagas);
  yield fork(RoleSagas);
  yield fork(UserSagas);
  yield fork(imageSagas);
}
