import { IRole, IRoleActions } from "./action";
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
  GET_ROLE_SUCCESS,
} from "./constants";

export interface IRoleState {
  list: IRole[];
  role: IRole | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IRoleState = {
  list: [],
  role: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const roleReducer = (
  state: IRoleState = initialState,
  action: IRoleActions
): IRoleState => {
  switch (action.type) {
    case ADD_ROLE:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        role: action.data,
      };

    case ADD_ROLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_ROLE_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ROLE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        list: action.data,
      };

    case GET_ROLE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_ROLE_SUCCESS:
      return {
        ...state,
        role: action.data,
      };

    case UPDATE_ROLE:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        role: action.data,
      };

    case UPDATE_ROLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_ROLE:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        role: undefined,
      };

    case DELETE_ROLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
