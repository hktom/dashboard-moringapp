import { combineReducers, Action } from "redux";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// import { State } from "./store";
import { ILoginState, loginReducer } from "../store/login/reducer";
import { homeReducer, IHomeState } from "../store/home/reducer";
import { categoryReducer, ICategoryState } from "../store/category/reducer";
import { cityReducer, ICityState } from "../store/city/reducer";
import {
  conditionReducer,
  IConditionState,
} from "../store/condition/reducer";
import { IJobState, jobReducer } from "../store/jobs/reducer";
import { IPaymentState, paymentReducer } from "../store/payment/reducer";
import { IRoleState, roleReducer } from "../store/role/reducer";
import { IServiceState, serviceReducer } from "../store/service/reducer";
import { ITaskState, taskReducer } from "../store/task/reducer";
import { IUserState, userReducer } from "../store/user/reducer";
import { IImageState, imageReducer } from "../store/image/reducer";
import { countryReducer, ICountryState } from "../store/country/reducer";

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
