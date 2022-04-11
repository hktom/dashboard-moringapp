import { Action } from "redux";
import { ICity } from "../city/action";
import { ITask } from "../task/action";
import {
  ADD_JOB,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILURE,
  GET_JOB_LIST,
  GET_JOB_LIST_SUCCESS,
  GET_JOB_LIST_FAILURE,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE,
  DELETE_JOB,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAILURE,
} from "./constants";

export interface IJob {
  id: string;
  user: any;
  task: ITask;
  city: ICity;
  condition: any;
  payment: any;
  is_completed: number;
  price_by_hour: number;
  total_hours: number;
  street: string;
  description: string;
  the_date: string;
  the_time: string;
  payment_due_date: string;
}

export interface IAddJob extends Action<"job/ADD_JOB"> {
  data: IJob;
}

export const addJob = (data: IJob): IAddJob => ({
  type: ADD_JOB,
  data,
});

export interface IAddJobSuccess extends Action<"job/ADD_JOB_SUCCESS"> {
  data: IJob;
}

export const addJobSuccess = (data: IJob): IAddJobSuccess => ({
  type: ADD_JOB_SUCCESS,
  data,
});

export interface IAddJobFailure extends Action<"job/ADD_JOB_FAILURE"> {
  error: string;
}

export const addJobFailure = (error: string): IAddJobFailure => ({
  type: ADD_JOB_FAILURE,
  error,
});

export interface IGetJobList extends Action<"job/GET_JOB_LIST"> {}
export const getJobList = (): IGetJobList => ({
  type: GET_JOB_LIST,
});

export interface IGetJobListSuccess
  extends Action<"job/GET_JOB_LIST_SUCCESS"> {
  data: IJob[];
}

export const getJobListSuccess = (data: IJob[]): IGetJobListSuccess => ({
  type: GET_JOB_LIST_SUCCESS,
  data,
});

export interface IGetJobListFailure
  extends Action<"job/GET_JOB_LIST_FAILURE"> {
  error: string;
}

export const getJobListFailure = (error: string): IGetJobListFailure => ({
  type: GET_JOB_LIST_FAILURE,
  error,
});

export interface IUpdateJobs extends Action<"job/UPDATE_JOB"> {
  data: IJob;
}
export const updateJob = (data: IJob): IUpdateJobs => ({
  type: UPDATE_JOB,
  data,
});

export interface IUpdateJobSuccess extends Action<"job/UPDATE_JOB_SUCCESS"> {
  data: IJob;
}

export const updateJobSuccess = (data: IJob): IUpdateJobSuccess => ({
  type: UPDATE_JOB_SUCCESS,
  data,
});

export interface IUpdateJobFailure extends Action<"job/UPDATE_JOB_FAILURE"> {
  error: string;
}

export const updateJobFailure = (error: string): IUpdateJobFailure => ({
  type: UPDATE_JOB_FAILURE,
  error,
});

export interface IDeleteJob extends Action<"job/DELETE_JOB"> {
  id: string;
}
export const deleteJob = (id: string): IDeleteJob => ({
  type: DELETE_JOB,
  id,
});

export interface IDeleteJobSuccess extends Action<"job/DELETE_JOB_SUCCESS"> {
  id: string;
}

export const deleteJobSuccess = (id: string): IDeleteJobSuccess => ({
  type: DELETE_JOB_SUCCESS,
  id,
});

export interface IDeleteJobFailure extends Action<"job/DELETE_JOB_FAILURE"> {
  error: string;
}

export const deleteJobFailure = (error: string): IDeleteJobFailure => ({
  type: DELETE_JOB_FAILURE,
  error,
});

export type IJobActions =
  | IAddJob
  | IAddJobSuccess
  | IAddJobFailure
  | IGetJobList
  | IGetJobListSuccess
  | IGetJobListFailure
  | IUpdateJobs
  | IUpdateJobSuccess
  | IUpdateJobFailure
  | IDeleteJob
  | IDeleteJobSuccess
  | IDeleteJobFailure;
