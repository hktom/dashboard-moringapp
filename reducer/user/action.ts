import { Action } from "redux";
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./constants";

export interface IUser {
  id: string;
  title: string;
  description: string;
  image: string;
  can_be_booked: number;
  can_be_urgent: number;
  accept_offer: number;
  min_price: number;
  category: any;
  condition: any;
  user: any;
  jobs?: any;
  created_at?: any;
  update_at?: any;
}

export interface IAddUser extends Action<"user/ADD_USER"> {
  data: IUser;
}

export const addUser = (data: IUser): IAddUser => ({
  type: ADD_USER,
  data,
});

export interface IAddUserSuccess extends Action<"user/ADD_USER_SUCCESS"> {
  data: IUser;
}

export const addUserSuccess = (data: IUser): IAddUserSuccess => ({
  type: ADD_USER_SUCCESS,
  data,
});

export interface IAddUserFailure extends Action<"user/ADD_USER_FAILURE"> {
  error: string;
}

export const addUserFailure = (error: string): IAddUserFailure => ({
  type: ADD_USER_FAILURE,
  error,
});

export interface IGetUserList extends Action<"user/GET_USER_LIST"> {}
export const getUserList = (): IGetUserList => ({
  type: GET_USER_LIST,
});

export interface IGetUserListSuccess
  extends Action<"user/GET_USER_LIST_SUCCESS"> {
  data: IUser[];
}

export const getUserListSuccess = (
  data: IUser[]
): IGetUserListSuccess => ({
  type: GET_USER_LIST_SUCCESS,
  data,
});

export interface IGetUserListFailure
  extends Action<"user/GET_USER_LIST_FAILURE"> {
  error: string;
}

export const getUserListFailure = (error: string): IGetUserListFailure => ({
  type: GET_USER_LIST_FAILURE,
  error,
});

export interface IUpdateUsers extends Action<"user/UPDATE_USER"> {
  data: IUser;
}
export const updateUser = (data: IUser): IUpdateUsers => ({
  type: UPDATE_USER,
  data,
});

export interface IUpdateUserSuccess
  extends Action<"user/UPDATE_USER_SUCCESS"> {
  data: IUser;
}

export const updateUserSuccess = (data: IUser): IUpdateUserSuccess => ({
  type: UPDATE_USER_SUCCESS,
  data,
});

export interface IUpdateUserFailure
  extends Action<"user/UPDATE_USER_FAILURE"> {
  error: string;
}

export const updateUserFailure = (error: string): IUpdateUserFailure => ({
  type: UPDATE_USER_FAILURE,
  error,
});

export interface IDeleteUser extends Action<"user/DELETE_USER"> {
  id: string;
}
export const deleteUser = (id: string): IDeleteUser => ({
  type: DELETE_USER,
  id,
});

export interface IDeleteUserSuccess extends Action<"user/DELETE_USER_SUCCESS"> {
  id: string;
}

export const deleteUserSuccess = (id: string): IDeleteUserSuccess => ({
  type: DELETE_USER_SUCCESS,
  id,
});

export interface IDeleteUserFailure extends Action<"user/DELETE_USER_FAILURE"> {
  error: string;
}

export const deleteUserFailure = (error: string): IDeleteUserFailure => ({
  type: DELETE_USER_FAILURE,
  error,
});

export type IUserActions =
  | IAddUser
  | IAddUserSuccess
  | IAddUserFailure
  | IGetUserList
  | IGetUserListSuccess
  | IGetUserListFailure
  | IUpdateUsers
  | IUpdateUserSuccess
  | IUpdateUserFailure
  | IDeleteUser
  | IDeleteUserSuccess
  | IDeleteUserFailure;
