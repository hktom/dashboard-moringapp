import { Action } from "redux";
import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  SEND_RESET_MAIL,
  SEND_RESET_MAIL_SUCCESS,
  SEND_RESET_MAIL_FAILURE,
} from "./constants";

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginUser extends Action<"auth/LOGIN_USER"> {
  data: any;
}

export const loginUser = (data: ILoginData): ILoginUser => ({
  type: LOGIN_USER,
  data,
});

export interface ILoginUserSuccess extends Action<"auth/LOGIN_USER_SUCCESS"> {
  data: any;
}

export const loginUserSuccess = (data: any): ILoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  data,
});

export interface ILoginUserFail extends Action<"auth/LOGIN_USER_FAILURE"> {
  error: string;
}

export const loginUserFail = (error: string): ILoginUserFail => ({
  type: LOGIN_USER_FAILURE,
  error,
});

export interface ILogoutUser extends Action<"auth/LOGOUT_USER"> {}

export const logoutUser = (): ILogoutUser => ({
  type: LOGOUT_USER,
});

export interface ILogoutUserSuccess
  extends Action<"auth/LOGOUT_USER_SUCCESS"> {}

export const logoutUserSuccess = (): ILogoutUserSuccess => ({
  type: LOGOUT_USER_SUCCESS,
});

export interface ILogoutUserFail extends Action<"auth/LOGOUT_USER_FAILURE"> {
  error: string;
}

export const logoutUserFail = (error: string): ILogoutUserFail => ({
  type: LOGOUT_USER_FAILURE,
  error,
});

export interface IResetPasswordProps {
  email: string;
  reset_token: string;
  password: string;
  confirmPassword: string;
}

export interface IResetPassword extends Action<"auth/RESET_PASSWORD"> {
  data: any;
}

export const resetPassword = (data: IResetPasswordProps): IResetPassword => ({
  type: RESET_PASSWORD,
  data,
});

export interface IResetPasswordSuccess
  extends Action<"auth/RESET_PASSWORD_SUCCESS"> {}

export const resetPasswordSuccess = (): IResetPasswordSuccess => ({
  type: RESET_PASSWORD_SUCCESS,
});

export interface IResetPasswordFail
  extends Action<"auth/RESET_PASSWORD_FAILURE"> {
  error: string;
}

export const resetPasswordFail = (error: string): IResetPasswordFail => ({
  type: RESET_PASSWORD_FAILURE,
  error,
});

export interface IRegisterUserProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: any;
  condition: any;
  auth: string;
  confirm_password: string;
}

export interface IRegisterUser extends Action<"auth/REGISTER_USER"> {
  data: any;
}

export const registerUser = (data: IRegisterUserProps): IRegisterUser => ({
  type: REGISTER_USER,
  data,
});

export interface IRegisterUserSuccess
  extends Action<"auth/REGISTER_USER_SUCCESS"> {}

export const registerUserSuccess = (): IRegisterUserSuccess => ({
  type: REGISTER_USER_SUCCESS,
});

export interface IRegisterUserFail
  extends Action<"auth/REGISTER_USER_FAILURE"> {
  error: string;
}

export const registerUserFail = (error: string): IRegisterUserFail => ({
  type: REGISTER_USER_FAILURE,
  error,
});

export interface IUpdatePasswordProps {
  email: string;
  password: string;
  newPassword?: string;
  confirmNewPassword: string;
}

export interface IUpdatePassword extends Action<"auth/UPDATE_PASSWORD"> {
  data: any;
}

export const updatePassword = (
  data: IUpdatePasswordProps
): IUpdatePassword => ({
  type: UPDATE_PASSWORD,
  data,
});

export interface IUpdatePasswordSuccess
  extends Action<"auth/UPDATE_PASSWORD_SUCCESS"> {}

export const updatePasswordSuccess = (): IUpdatePasswordSuccess => ({
  type: UPDATE_PASSWORD_SUCCESS,
});

export interface IUpdatePasswordFail
  extends Action<"auth/UPDATE_PASSWORD_FAILURE"> {
  error: string;
}

export const updatePasswordFail = (error: string): IUpdatePasswordFail => ({
  type: UPDATE_PASSWORD_FAILURE,
  error,
});

export interface ISendResetMailProps {
  email: string;
}

export interface ISendResetMail extends Action<"auth/SEND_RESET_MAIL"> {}

export const sendResetMail = (): ISendResetMail => ({
  type: SEND_RESET_MAIL,
});

export interface ISendResetMailSuccess
  extends Action<"auth/SEND_RESET_MAIL_SUCCESS"> {}

export const sendResetMailSuccess = (): ISendResetMailSuccess => ({
  type: SEND_RESET_MAIL_SUCCESS,
});

export interface ISendResetMailFail
  extends Action<"auth/SEND_RESET_MAIL_FAILURE"> {
  error: string;
}

export const sendResetMailFail = (error: string): ISendResetMailFail => ({
  type: SEND_RESET_MAIL_FAILURE,
  error,
});

export type ILoginActions =
  | ILoginUser
  | ILoginUserSuccess
  | ILoginUserFail
  | ILogoutUser
  | ILogoutUserSuccess
  | ILogoutUserFail
  | IResetPassword
  | IResetPasswordSuccess
  | IResetPasswordFail
  | IRegisterUser
  | IRegisterUserSuccess
  | IRegisterUserFail
  | IUpdatePassword
  | IUpdatePasswordSuccess
  | IUpdatePasswordFail
  | ISendResetMail
  | ISendResetMailSuccess
  | ISendResetMailFail;
