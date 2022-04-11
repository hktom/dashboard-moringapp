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
} from "./constants";

interface IJobState {
  jobList: IJob[];
  jobEdit: IJob | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IJobState = {
  jobList: [],
  jobEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const jobReducer = (
  state: IJobState = initialState,
  action: IJobActions
) => {
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
        jobEdit: action.data,
      };

    case ADD_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
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
        jobList: action.data,
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
        jobEdit: action.data,
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
        jobEdit: undefined,
      };

    case DELETE_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      break;
  }
};
