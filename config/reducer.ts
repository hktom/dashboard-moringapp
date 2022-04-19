import { combineReducers, Action } from "redux";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// import { State } from "./store";
import { ILoginState, loginReducer } from "../pages/auth/reducer";
import { homeReducer, IHomeState } from "../pages/page/home/reducer";
import {
  categoryReducer,
  ICategoryState,
} from "../pages/page/category/reducer";
import { cityReducer, ICityState } from "../pages/page/city/reducer";
import {
  conditionReducer,
  IConditionState,
} from "../pages/page/condition/reducer";
import { IJobState, jobReducer } from "../pages/page/job/reducer";
import { IPaymentState, paymentReducer } from "../pages/page/payment/reducer";
import { IRoleState, roleReducer } from "../pages/page/role/reducer";
import { IServiceState, serviceReducer } from "../pages/page/service/reducer";
import { ITaskState, taskReducer } from "../pages/page/task/reducer";
import { IUserState, userReducer } from "../pages/page/user/reducer";
import { IImageState, imageReducer } from "../components/imageUploader/reducer";
import { countryReducer, ICountryState } from "../pages/page/country/reducer";

export interface IRootState {
  login: ILoginState;
  home: IHomeState;
  category: ICategoryState;
  city: ICityState;
  country: ICountryState;
  condition: IConditionState;
  job: IJobState;
  payment: IPaymentState;
  role: IRoleState;
  service: IServiceState;
  task: ITaskState;
  user: IUserState;
  image: IImageState;
}

export const appReducer = combineReducers<IRootState>({
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

export const rootReducer = (state: IRootState | undefined, action: Action) => {
  // if (action.type === HYDRATE) {
  //   // return appReducer(undefined, action);
  //   return { ...state, ...action.payload };
  // }
  return appReducer(state, action);
};

export type IStore = ReturnType<typeof appReducer>;
