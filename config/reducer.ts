import { combineReducers, Action } from "redux";
import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// import { State } from "./store";
import { ILoginState, loginReducer } from "../reducer/login/reducer";
import { homeReducer, IHomeState } from "../reducer/home/reducer";

export interface IRootState {
  login: ILoginState;
  home: IHomeState;
}

export const appReducer = combineReducers<IRootState>({
  login: loginReducer,
  home: homeReducer,
});

export const rootReducer = (state: IRootState | undefined, action: Action) => {
  // if (action.type === HYDRATE) {
  //   // return appReducer(undefined, action);
  //   return { ...state, ...action.payload };
  // }
  return appReducer(state, action);
};

export type IStore = ReturnType<typeof appReducer>;
