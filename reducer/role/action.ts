import { Action } from "redux";
import {
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  GET_ROLE_LIST,
  GET_ROLE_LIST_SUCCESS,
  GET_ROLE_LIST_FAILURE,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
  GET_ROLE,
  GET_ROLE_FAILURE,
  GET_ROLE_SUCCESS,
} from "./constants";

export interface IRole {
  id: string;
  name: string;
  created_at?: any;
  update_at?: any;
}

export interface IAddRole extends Action<"role/ADD_ROLE"> {
  data: IRole;
}

export const addRole = (data: IRole): IAddRole => ({
  type: ADD_ROLE,
  data,
});

export interface IAddRoleSuccess extends Action<"role/ADD_ROLE_SUCCESS"> {
  data: IRole;
}

export const addRoleSuccess = (data: IRole): IAddRoleSuccess => ({
  type: ADD_ROLE_SUCCESS,
  data,
});

export interface IAddRoleFailure extends Action<"role/ADD_ROLE_FAILURE"> {
  error: string;
}

export const addRoleFailure = (error: string): IAddRoleFailure => ({
  type: ADD_ROLE_FAILURE,
  error,
});

export interface IGetRoleList extends Action<"role/GET_ROLE_LIST"> {}
export const getRoleList = (): IGetRoleList => ({
  type: GET_ROLE_LIST,
});

export interface IGetRoleListSuccess
  extends Action<"role/GET_ROLE_LIST_SUCCESS"> {
  data: IRole[];
}

export const getRoleListSuccess = (data: IRole[]): IGetRoleListSuccess => ({
  type: GET_ROLE_LIST_SUCCESS,
  data,
});

export interface IGetRoleListFailure
  extends Action<"role/GET_ROLE_LIST_FAILURE"> {
  error: string;
}

export const getRoleListFailure = (error: string): IGetRoleListFailure => ({
  type: GET_ROLE_LIST_FAILURE,
  error,
});

export interface IUpdateRoles extends Action<"role/UPDATE_ROLE"> {
  data: IRole;
}
export const updateRole = (data: IRole): IUpdateRoles => ({
  type: UPDATE_ROLE,
  data,
});

export interface IUpdateRoleSuccess extends Action<"role/UPDATE_ROLE_SUCCESS"> {
  data: IRole;
}

export const updateRoleSuccess = (data: IRole): IUpdateRoleSuccess => ({
  type: UPDATE_ROLE_SUCCESS,
  data,
});

export interface IUpdateRoleFailure extends Action<"role/UPDATE_ROLE_FAILURE"> {
  error: string;
}

export const updateRoleFailure = (error: string): IUpdateRoleFailure => ({
  type: UPDATE_ROLE_FAILURE,
  error,
});

export interface IDeleteRole extends Action<"role/DELETE_ROLE"> {
  id: string;
}
export const deleteRole = (id: string): IDeleteRole => ({
  type: DELETE_ROLE,
  id,
});

export interface IDeleteRoleSuccess extends Action<"role/DELETE_ROLE_SUCCESS"> {
  id: string;
}

export const deleteRoleSuccess = (id: string): IDeleteRoleSuccess => ({
  type: DELETE_ROLE_SUCCESS,
  id,
});

export interface IDeleteRoleFailure extends Action<"role/DELETE_ROLE_FAILURE"> {
  error: string;
}

export const deleteRoleFailure = (error: string): IDeleteRoleFailure => ({
  type: DELETE_ROLE_FAILURE,
  error,
});

export interface IGetRole extends Action<"role/GET_ROLE"> {
  data: string;
}

export const getRole = (data: string): IGetRole => ({
  type: GET_ROLE,
  data,
});

export interface IGetRoleSuccess extends Action<"role/GET_ROLE_SUCCESS"> {
  data: IRole;
}

export const getRoleSuccess = (data: IRole): IGetRoleSuccess => ({
  type: GET_ROLE_SUCCESS,
  data,
});

export interface IGetRoleFailure extends Action<"role/GET_ROLE_FAILURE"> {
  error: string;
}

export const getRoleFailure = (error: string): IGetRoleFailure => ({
  type: GET_ROLE_FAILURE,
  error,
});

export type IRoleActions =
  | IAddRole
  | IAddRoleSuccess
  | IAddRoleFailure
  | IGetRoleList
  | IGetRoleListSuccess
  | IGetRoleListFailure
  | IUpdateRoles
  | IUpdateRoleSuccess
  | IUpdateRoleFailure
  | IDeleteRole
  | IDeleteRoleSuccess
  | IDeleteRoleFailure
  | IGetRole
  | IGetRoleSuccess
  | IGetRoleFailure;
