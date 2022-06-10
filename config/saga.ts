import { fork, SimpleEffect } from "redux-saga/effects";
import { CategorySagas } from "../pages/page/category/saga";
import { CitySagas } from "../pages/page/city/saga";
import { ConditionSagas } from "../pages/page/condition/saga";
import { CountrySagas } from "../pages/page/country/saga";
import { homeSagas } from "../pages/page/home/saga";
import { imageSagas } from "../components/imageUploader/saga";
import { JobSagas } from "../pages/page/job/saga";
import { loginSagas } from "../pages/auth/saga";
import { PaymentSagas } from "../pages/page/payment/saga";
import { RoleSagas } from "../pages/page/role/saga";
import { ServiceSagas } from "../pages/page/service/saga";
import { taskSagas } from "../pages/page/task/saga";
import { UserSagas } from "../pages/page/user/saga";
import { forumSagas } from "../pages/page/forum/saga";
import { chatSagas } from "../pages/page/chat/saga";
import { contentSagas } from "../pages/page/content/saga";

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
  yield fork(forumSagas);
  yield fork(chatSagas)
  yield fork(contentSagas);
}
