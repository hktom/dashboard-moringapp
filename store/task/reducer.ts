import { ITask, ITaskActions } from "./action";
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
  GET_TASK_SUCCESS,
} from "./constants";

export interface ITaskState {
  list: ITask[];
  task: ITask | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ITaskState = {
  list: [],
  task: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const taskReducer = (
  state: ITaskState = initialState,
  action: ITaskActions
): ITaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        task: action.data,
      };

    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: action.data,
      };

    case GET_TASK_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TASK_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        list: action.data,
      };

    case GET_TASK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_TASK:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        task: action.data,
      };

    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_TASK:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        task: undefined,
      };

    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
