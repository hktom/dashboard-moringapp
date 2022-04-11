import { Action } from "redux";
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASK_LIST,
  GET_TASK_LIST_SUCCESS,
  GET_TASK_LIST_FAILURE,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "./constants";

export interface ITask {
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

export interface IAddTask extends Action<"task/ADD_TASK"> {
  data: ITask;
}

export const addTask = (data: ITask): IAddTask => ({
  type: ADD_TASK,
  data,
});

export interface IAddTaskSuccess extends Action<"task/ADD_TASK_SUCCESS"> {
  data: ITask;
}

export const addTaskSuccess = (data: ITask): IAddTaskSuccess => ({
  type: ADD_TASK_SUCCESS,
  data,
});

export interface IAddTaskFailure extends Action<"task/ADD_TASK_FAILURE"> {
  error: string;
}

export const addTaskFailure = (error: string): IAddTaskFailure => ({
  type: ADD_TASK_FAILURE,
  error,
});

export interface IGetTaskList extends Action<"task/GET_TASK_LIST"> {}
export const getTaskList = (): IGetTaskList => ({
  type: GET_TASK_LIST,
});

export interface IGetTaskListSuccess
  extends Action<"task/GET_TASK_LIST_SUCCESS"> {
  data: ITask[];
}

export const getTaskListSuccess = (
  data: ITask[]
): IGetTaskListSuccess => ({
  type: GET_TASK_LIST_SUCCESS,
  data,
});

export interface IGetTaskListFailure
  extends Action<"task/GET_TASK_LIST_FAILURE"> {
  error: string;
}

export const getTaskListFailure = (error: string): IGetTaskListFailure => ({
  type: GET_TASK_LIST_FAILURE,
  error,
});

export interface IUpdateTasks extends Action<"task/UPDATE_TASK"> {
  data: ITask;
}
export const updateTask = (data: ITask): IUpdateTasks => ({
  type: UPDATE_TASK,
  data,
});

export interface IUpdateTaskSuccess
  extends Action<"task/UPDATE_TASK_SUCCESS"> {
  data: ITask;
}

export const updateTaskSuccess = (data: ITask): IUpdateTaskSuccess => ({
  type: UPDATE_TASK_SUCCESS,
  data,
});

export interface IUpdateTaskFailure
  extends Action<"task/UPDATE_TASK_FAILURE"> {
  error: string;
}

export const updateTaskFailure = (error: string): IUpdateTaskFailure => ({
  type: UPDATE_TASK_FAILURE,
  error,
});

export interface IDeleteTask extends Action<"task/DELETE_TASK"> {
  id: string;
}
export const deleteTask = (id: string): IDeleteTask => ({
  type: DELETE_TASK,
  id,
});

export interface IDeleteTaskSuccess extends Action<"task/DELETE_TASK_SUCCESS"> {
  id: string;
}

export const deleteTaskSuccess = (id: string): IDeleteTaskSuccess => ({
  type: DELETE_TASK_SUCCESS,
  id,
});

export interface IDeleteTaskFailure extends Action<"task/DELETE_TASK_FAILURE"> {
  error: string;
}

export const deleteTaskFailure = (error: string): IDeleteTaskFailure => ({
  type: DELETE_TASK_FAILURE,
  error,
});

export type ITaskActions =
  | IAddTask
  | IAddTaskSuccess
  | IAddTaskFailure
  | IGetTaskList
  | IGetTaskListSuccess
  | IGetTaskListFailure
  | IUpdateTasks
  | IUpdateTaskSuccess
  | IUpdateTaskFailure
  | IDeleteTask
  | IDeleteTaskSuccess
  | IDeleteTaskFailure;
