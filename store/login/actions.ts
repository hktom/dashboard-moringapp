import { Action } from "redux";
import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from "./constants";

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginUser extends Action<"login/LOGIN_USER"> {
  data: any;
}

export const loginUser = (data: ILoginData): ILoginUser => ({
  type: LOGIN_USER,
  data,
});

export interface ILoginUserSuccess extends Action<"login/LOGIN_USER_SUCCESS"> {
  data: any;
}

export const loginUserSuccess = (data: any): ILoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  data,
});

export interface ILoginUserFail extends Action<"login/LOGIN_USER_FAILURE"> {
  error: string;
}

export const loginUserFail = (error: string): ILoginUserFail => ({
  type: LOGIN_USER_FAILURE,
  error,
});

export type ILoginActions = ILoginUser | ILoginUserSuccess | ILoginUserFail;
