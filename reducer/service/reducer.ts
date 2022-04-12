import { IService, IServiceActions } from "./action";
import {
  ADD_SERVICE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE,
  GET_SERVICE_LIST,
  GET_SERVICE_LIST_SUCCESS,
  GET_SERVICE_LIST_FAILURE,
  UPDATE_SERVICE,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
  GET_SERVICE_SUCCESS,
  GET_SERVICE,
  GET_SERVICE_FAILURE,
} from "./constants";

export interface IServiceState {
  list: IService[];
  service: IService | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IServiceState = {
  list: [],
  service: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const serviceReducer = (
  state: IServiceState = initialState,
  action: IServiceActions
): IServiceState => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        success: false,
      };

    case ADD_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        service: action.data,
      };

    case ADD_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_SERVICE_LIST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };

    case GET_SERVICE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // success: true,
        list: action.data,
      };

    case GET_SERVICE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_SERVICE:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };

    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        service: action.data,
      };

    case GET_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_SERVICE:
      return {
        ...state,
        error: undefined,
        isLoading: true,
        success: false,
      };

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        service: action.data,
        error: undefined,
      };

    case UPDATE_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_SERVICE:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        service: undefined,
      };

    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
