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
} from "./constants";

interface ITaskState {
  taskList: ITask[];
  taskEdit: ITask | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ITaskState = {
  taskList: [],
  taskEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const taskReducer = (
  state: ITaskState = initialState,
  action: ITaskActions
) => {
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
        taskEdit: action.data,
      };

    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // case ADD_TASK_IMAGE:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    // case ADD_TASK_IMAGE_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     success: true,
    //     taskEdit: action.data,
    //   };

    // case ADD_TASK_IMAGE_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

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
        taskList: action.data,
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
        taskEdit: action.data,
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
        taskEdit: undefined,
      };

    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      break;
  }
};
