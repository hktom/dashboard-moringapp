import { fork, SimpleEffect } from "redux-saga/effects";
import { CategorySagas } from "../reducer/category/saga";
import { CitySagas } from "../reducer/city/saga";
import { ConditionSagas } from "../reducer/condition/saga";
import { CountrySagas } from "../reducer/country/saga";
import { homeSagas } from "../reducer/home/saga";
import { imageSagas } from "../reducer/image/saga";
import { JobSagas } from "../reducer/jobs/saga";
import { loginSagas } from "../reducer/login/saga";
import { PaymentSagas } from "../reducer/payment/saga";
import { RoleSagas } from "../reducer/role/saga";
import { ServiceSagas } from "../reducer/service/saga";
import { taskSagas } from "../reducer/task/saga";
import { UserSagas } from "../reducer/user/saga";

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
