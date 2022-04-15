import { mutateMethods } from "../../config/apollo";
import { v4 as uuidv4 } from "uuid";
import {
  ILoginData,
  IRegisterUserProps,
  IResetPasswordProps,
  ISendResetMailProps,
  IUpdatePasswordProps,
} from "./actions";
import { ILoginState } from "./reducer";

export const loginUserRequest = (data: ILoginData) => {
  const request = `mutation{
        login(email:"${data.email}",password:"${data.password}"){
            token
        }
    }`;

  return mutateMethods(request);
};

export const logoutUserRequest = () => {
  const request = `mutation{
        logout{
            token
        }
    }`;

  return mutateMethods(request);
};

export const sendResetMailRequest = (data: ISendResetMailProps) => {
  const request = `mutation{
        sendResetMail(email:"${data.email}"){
          token
        }
      }`;

  return mutateMethods(request);
};

export const resetPasswordRequest = (data: IResetPasswordProps) => {
  const request = `mutation{
        resetPassword(
          email:"${data.email}",
          reset_token:"${data.reset_token}",
          password:"${data.password}",
          confirmPassword:"${data.confirmPassword}"
          ){
            token
        }
    }`;

  return mutateMethods(request);
};

export const updatePasswordRequest = (data: IUpdatePasswordProps) => {
  const request = `mutation{
        resetPassword(
          email:"${data.email}",
          password:"${data.password}",
          newPassword:"${data.newPassword}",
          confirmNewPassword:"${data.confirmNewPassword}"
          ){
            token
        }
    }`;

  return mutateMethods(request);
};

export const registerUserRequest = (data: IRegisterUserProps) => {
  const request = `mutation{
        register(
          id: "${uuidv4()}",
          first_name:"${data.first_name}",
          last_name:"${data.last_name}",
          email:"${data.email}",
          password:"${data.password}",
          confirmPassword:"${data.confirmPassword}"
          ){
            token
        }
    }`;

  return mutateMethods(request);
};
