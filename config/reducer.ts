import { combineReducers, Action } from "redux";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// import { State } from "./store";
import { ILoginState, loginReducer } from "../reducer/login/reducer";
import { homeReducer, IHomeState } from "../reducer/home/reducer";
import { categoryReducer, ICategoryState } from "../reducer/category/reducer";
import { cityReducer, ICityState } from "../reducer/city/reducer";
import {
  conditionReducer,
  IConditionState,
} from "../reducer/condition/reducer";
import { IJobState, jobReducer } from "../reducer/jobs/reducer";
import { IPaymentState, paymentReducer } from "../reducer/payment/reducer";
import { IRoleState, roleReducer } from "../reducer/role/reducer";
import { IServiceState, serviceReducer } from "../reducer/service/reducer";
import { ITaskState, taskReducer } from "../reducer/task/reducer";
import { IUserState, userReducer } from "../reducer/user/reducer";

export interface IRootState {
  login: ILoginState;
  home: IHomeState;
  category: ICategoryState;
  city: ICityState;
  condition: IConditionState;
  job: IJobState;
  payment: IPaymentState;
  role: IRoleState;
  service: IServiceState;
  task: ITaskState;
  user: IUserState;
}

export const appReducer = combineReducers<IRootState>({
  login: loginReducer,
  home: homeReducer,
  category: categoryReducer,
  city: cityReducer,
  condition: conditionReducer,
  job: jobReducer,
  payment: paymentReducer,
  role: roleReducer,
  service: serviceReducer,
  task: taskReducer,
  user: userReducer,
});

export const rootReducer = (state: IRootState | undefined, action: Action) => {
  // if (action.type === HYDRATE) {
  //   // return appReducer(undefined, action);
  //   return { ...state, ...action.payload };
  // }
  return appReducer(state, action);
};

export type IStore = ReturnType<typeof appReducer>;
