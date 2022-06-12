import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../config/hooks";
import { ILoginActions } from "./actions";

interface IProcess {
  loading?: boolean | undefined;
  error?: string | undefined;
  success?: boolean | undefined;
  token?: string | undefined;
  sso?: boolean | undefined;
}

export interface ILoginState {
  login: IProcess;
  logout: IProcess;
  resetPassword: IProcess;
  resetMail: IProcess;
  updatePassword: IProcess;
  register: IProcess;
}

export const initialState: ILoginState = {
  login: {},
  updatePassword: {},
  resetPassword: {},
  resetMail: {},
  register: {},
  logout: {},
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: any) => {
      state.login = { loading: true };
    },
    loginSuccess: (state, action: any) => {
      state.login = { success: true, token: action.payload };
    },
    loginFailure: (state, action: any) => {
      state.login = { error: action.payload };
    },
  },
});

export const authActionSaga: IActionSaga = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export const authAction: any = authReducer.actions;

export default authReducer.reducer;