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
  GET_CITY_SUCCESS,
} from "./constants";

export interface ICityState {
  list: ICity[] | undefined;
  city: ICity | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICityState = {
  list: [],
  city: undefined,
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
        city: action.data,
      };

    case ADD_CITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_CITY_SUCCESS:
      return {
        ...state,
        city: action.data,
      };

    // case GET_CITY_LIST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    case GET_CITY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // success: true,
        list: action.data,
      };

    // case GET_CITY_LIST_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

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
        city: action.data,
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
        city: undefined,
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
