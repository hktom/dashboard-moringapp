import { IJob, IJobActions } from "./action";
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
  GET_JOB_SUCCESS,
} from "./constants";

export interface IJobState {
  list: IJob[];
  job: IJob | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IJobState = {
  list: [],
  job: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const jobReducer = (
  state: IJobState = initialState,
  action: IJobActions
): IJobState => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        job: action.data,
      };

    case ADD_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_JOB_SUCCESS:
      return {
        ...state,
        job: action.data,
      };

    case GET_JOB_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_JOB_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        list: action.data,
      };

    case GET_JOB_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_JOB:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        job: action.data,
      };

    case UPDATE_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_JOB:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        job: undefined,
      };

    case DELETE_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};