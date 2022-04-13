import { Action } from "redux";
import {
  ADD_CONDITION,
  ADD_CONDITION_SUCCESS,
  ADD_CONDITION_FAILURE,
  GET_CONDITION_LIST,
  GET_CONDITION_LIST_SUCCESS,
  GET_CONDITION_LIST_FAILURE,
  UPDATE_CONDITION,
  UPDATE_CONDITION_SUCCESS,
  UPDATE_CONDITION_FAILURE,
  DELETE_CONDITION,
  DELETE_CONDITION_SUCCESS,
  DELETE_CONDITION_FAILURE,
  GET_CONDITION,
  GET_CONDITION_FAILURE,
  GET_CONDITION_SUCCESS,
} from "./constants";

export interface ICondition {
  id: string;
  name: string;
  name_fr: string;
  created_at?: any;
  update_at?: any;
}

export interface IAddCondition extends Action<"condition/ADD_CONDITION"> {
  data: ICondition;
}

export const addCondition = (data: ICondition): IAddCondition => ({
  type: ADD_CONDITION,
  data,
});

export interface IAddConditionSuccess
  extends Action<"condition/ADD_CONDITION_SUCCESS"> {
  data: ICondition;
}

export const addConditionSuccess = (
  data: ICondition
): IAddConditionSuccess => ({
  type: ADD_CONDITION_SUCCESS,
  data,
});

export interface IAddConditionFailure
  extends Action<"condition/ADD_CONDITION_FAILURE"> {
  error: string;
}

export const addConditionFailure = (error: string): IAddConditionFailure => ({
  type: ADD_CONDITION_FAILURE,
  error,
});

export interface IGetConditionList
  extends Action<"condition/GET_CONDITION_LIST"> {}
  
export const getConditionList = (): IGetConditionList => ({
  type: GET_CONDITION_LIST,
});

export interface IGetConditionListSuccess
  extends Action<"condition/GET_CONDITION_LIST_SUCCESS"> {
  data: ICondition[];
}

export const getConditionListSuccess = (
  data: ICondition[]
): IGetConditionListSuccess => ({
  type: GET_CONDITION_LIST_SUCCESS,
  data,
});

export interface IGetConditionListFailure
  extends Action<"condition/GET_CONDITION_LIST_FAILURE"> {
  error: string;
}

export const getConditionListFailure = (
  error: string
): IGetConditionListFailure => ({
  type: GET_CONDITION_LIST_FAILURE,
  error,
});

export interface IUpdateConditions
  extends Action<"condition/UPDATE_CONDITION"> {
  data: ICondition;
}
export const updateCondition = (data: ICondition): IUpdateConditions => ({
  type: UPDATE_CONDITION,
  data,
});

export interface IUpdateConditionSuccess
  extends Action<"condition/UPDATE_CONDITION_SUCCESS"> {
  data: ICondition;
}

export const updateConditionSuccess = (
  data: ICondition
): IUpdateConditionSuccess => ({
  type: UPDATE_CONDITION_SUCCESS,
  data,
});

export interface IUpdateConditionFailure
  extends Action<"condition/UPDATE_CONDITION_FAILURE"> {
  error: string;
}

export const updateConditionFailure = (
  error: string
): IUpdateConditionFailure => ({
  type: UPDATE_CONDITION_FAILURE,
  error,
});

export interface IDeleteCondition extends Action<"condition/DELETE_CONDITION"> {
  id: string;
}
export const deleteCondition = (id: string): IDeleteCondition => ({
  type: DELETE_CONDITION,
  id,
});

export interface IDeleteConditionSuccess
  extends Action<"condition/DELETE_CONDITION_SUCCESS"> {
  id: string;
}

export const deleteConditionSuccess = (
  id: string
): IDeleteConditionSuccess => ({
  type: DELETE_CONDITION_SUCCESS,
  id,
});

export interface IDeleteConditionFailure
  extends Action<"condition/DELETE_CONDITION_FAILURE"> {
  error: string;
}

export const deleteConditionFailure = (
  error: string
): IDeleteConditionFailure => ({
  type: DELETE_CONDITION_FAILURE,
  error,
});

export interface IGetCondition extends Action<"condition/GET_CONDITION"> {
  data: string;
}

export const getCondition = (data: string): IGetCondition => ({
  type: GET_CONDITION,
  data,
});

export interface IGetConditionSuccess
  extends Action<"condition/GET_CONDITION_SUCCESS"> {
  data: ICondition;
}

export const getConditionSuccess = (
  data: ICondition
): IGetConditionSuccess => ({
  type: GET_CONDITION_SUCCESS,
  data,
});

export interface IGetConditionFailure
  extends Action<"condition/GET_CONDITION_FAILURE"> {
  error: string;
}

export const getConditionFailure = (error: string): IGetConditionFailure => ({
  type: GET_CONDITION_FAILURE,
  error,
});

export type IConditionActions =
  | IAddCondition
  | IAddConditionSuccess
  | IAddConditionFailure
  | IGetConditionList
  | IGetConditionListSuccess
  | IGetConditionListFailure
  | IUpdateConditions
  | IUpdateConditionSuccess
  | IUpdateConditionFailure
  | IDeleteCondition
  | IDeleteConditionSuccess
  | IDeleteConditionFailure
  | IGetCondition
  | IGetConditionSuccess
  | IGetConditionFailure;
