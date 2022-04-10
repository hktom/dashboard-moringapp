import { combineReducers, Action } from "redux";

import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { State } from "./store";

/*
export interface IRootState {
  home: IHomeState;
  account: IAccountState;
  signUp: ISignUpState;
  signIn: ISignInState;
  forgotPassword: forgotPasswordState;
  resetPassword: resetPasswordState;
  profile: IProfileState;
  myVideo: IMyVideosState;
  uploadVideo: IUploadVideoState;
  uploader: IUploaderState;
  order: IOrderState;
  notification: INotificationState;
  contact: IcontactState;
}

export const appReducer = combineReducers({
  home: homeReducer,
  account: AccountReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  profile: ProfileReducer,
  myVideo: MyVideoReducer,
  uploadVideo: uploadVideoReducer,
  uploader: uploaderReducer,
  order: orderReducer,
  notification: notificationReducer,
  contact: contactReducer,
});
*/

// export const rootReducer = (state: IRootState | undefined, action: Action) => {
//   if (action.type === 'RESET_APP') {
//     return appReducer(undefined, action);
//   }

//   return appReducer(state, action);
// };

// export type IStore = ReturnType<typeof appReducer>;

// create your reducer
export const reducer = (state: State = { tick: "init" }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};
