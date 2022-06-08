// import { combineReducers, Action } from "redux";
// import { AnyAction } from "redux";
// import { HYDRATE } from "next-redux-wrapper";
// import { State } from "./store";
import { ILoginState, loginReducer } from "../pages/auth/reducer";
import { homeReducer, IHomeState } from "../pages/page/home/reducer";
import {
  categoryReducer,
  // ICategoryState,
} from "../pages/page/category/reducer";
import { cityReducer, ICityState } from "../pages/page/city/reducer";
import {
  conditionReducer,
  // IConditionState,
} from "../pages/page/condition/reducer";
import { IJobState, jobReducer } from "../pages/page/job/reducer";
import { IPaymentState, paymentReducer } from "../pages/page/payment/reducer";
import { IRoleState, roleReducer } from "../pages/page/role/reducer";
import { IServiceState, serviceReducer } from "../pages/page/service/reducer";
import { ITaskState, taskReducer } from "../pages/page/task/reducer";
import { IUserState, userReducer } from "../pages/page/user/reducer";
import { IImageState, imageReducer } from "../components/imageUploader/reducer";
import { countryReducer, ICountryState } from "../pages/page/country/reducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  category: categoryReducer,
  city: cityReducer,
  country: countryReducer,
  condition: conditionReducer,
  job: jobReducer,
  payment: paymentReducer,
  role: roleReducer,
  service: serviceReducer,
  task: taskReducer,
  user: userReducer,
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
