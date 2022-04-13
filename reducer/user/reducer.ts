import { IUser, IUserActions } from "./action";
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_USER_SUCCESS,
} from "./constants";

export interface IUserState {
  list: IUser[];
  user: IUser | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IUserState = {
  list: [],
  user: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const userReducer = (
  state: IUserState = initialState,
  action: IUserActions
): IUserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        user: action.data,
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
      };

    case GET_USER_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        list: action.data,
      };

    case GET_USER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        user: action.data,
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        user: undefined,
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
