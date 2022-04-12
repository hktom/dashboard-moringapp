import { ICity, ICityActions } from "./action";
import {
  ADD_CITY,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAILURE,
  GET_CITY_LIST,
  GET_CITY_LIST_SUCCESS,
  GET_CITY_LIST_FAILURE,
  UPDATE_CITY,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAILURE,
  DELETE_CITY,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
} from "./constants";

export interface ICityState {
  cityList: ICity[];
  cityEdit: ICity | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICityState = {
  cityList: [],
  cityEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const cityReducer = (
  state: ICityState = initialState,
  action: ICityActions
): ICityState => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_CITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cityEdit: action.data,
      };

    case ADD_CITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_CITY_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cityList: action.data,
      };

    case GET_CITY_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_CITY:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_CITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cityEdit: action.data,
      };

    case UPDATE_CITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_CITY:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_CITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cityEdit: undefined,
      };

    case DELETE_CITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
