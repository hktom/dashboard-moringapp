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
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from "./constants";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  gender?: string;
  avatar?:string;
  street?:string;
  auth?: string;
  mobile?: string;
  certificate?: string;
  bio?: string;
  zip_code?: string;
  url?: string;
  role?: any;
  condition: any;
  city?: any;
  jobs?: any;
  tasks: any;
  feedbacks?: any;
  comments?: any;
  created_at?: string;
  updated_at?: string;
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

export const getUserListSuccess = (data: IUser[]): IGetUserListSuccess => ({
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

export interface IUpdateUserSuccess extends Action<"user/UPDATE_USER_SUCCESS"> {
  data: IUser;
}

export const updateUserSuccess = (data: IUser): IUpdateUserSuccess => ({
  type: UPDATE_USER_SUCCESS,
  data,
});

export interface IUpdateUserFailure extends Action<"user/UPDATE_USER_FAILURE"> {
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

export interface IGetUser extends Action<"user/GET_USER"> {
  data: string;
}

export const getUser = (data: string): IGetUser => ({
  type: GET_USER,
  data,
});

export interface IGetUserSuccess extends Action<"user/GET_USER_SUCCESS"> {
  data: IUser;
}

export const getUserSuccess = (data: IUser): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  data,
});

export interface IGetUserFailure extends Action<"user/GET_USER_FAILURE"> {
  error: string;
}

export const getUserFailure = (error: string): IGetUserFailure => ({
  type: GET_USER_FAILURE,
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
  | IDeleteUserFailure
  | IGetUser
  | IGetUserSuccess
  | IGetUserFailure;
