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
} from "./constants";

export interface IServiceState {
  serviceList: IService[];
  serviceEdit: IService | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IServiceState = {
  serviceList: [],
  serviceEdit: undefined,
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
      };

    case ADD_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        serviceEdit: action.data,
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
      };

    case GET_SERVICE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        serviceList: action.data,
      };

    case GET_SERVICE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_SERVICE:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        serviceEdit: action.data,
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
      };

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        serviceEdit: undefined,
      };

    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default: return {...state};
  }
};
