import { Action } from "redux";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from "./constants";

export interface IGetUserProfile extends Action<"home/GET_USER_PROFILE"> {
  error: string;
}

export const getUserProfile = (error: string): IGetUserProfile => ({
  type: GET_USER_PROFILE,
  error,
});

export interface IGetUserProfileSuccess
  extends Action<"home/GET_USER_PROFILE_SUCCESS"> {
  data: any;
}

export const getUserProfileSuccess = (data: any): IGetUserProfileSuccess => ({
  type: GET_USER_PROFILE_SUCCESS,
  data,
});

export interface IGetUserProfileFail
  extends Action<"home/GET_USER_PROFILE_FAIL"> {
  error: string;
}

export const getUserProfileFail = (error: string): IGetUserProfileFail => ({
  type: GET_USER_PROFILE_FAIL,
  error,
});

export type IHomeActions =
  | IGetUserProfile
  | IGetUserProfileSuccess
  | IGetUserProfileFail;
