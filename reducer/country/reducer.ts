import { ICountry, ICountryActions } from "./action";
import {
  ADD_COUNTRY,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAILURE,
  GET_COUNTRY_LIST,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_FAILURE,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_FAILURE,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAILURE,
} from "./constants";

interface ICountryState {
  countryList: ICountry[];
  countryEdit: ICountry | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICountryState = {
  countryList: [],
  countryEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const countryReducer = (
  state: ICountryState = initialState,
  action: ICountryActions
) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        countryEdit: action.data,
      };

    case ADD_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // case ADD_COUNTRY_IMAGE:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    // case ADD_COUNTRY_IMAGE_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     success: true,
    //     countryEdit: action.data,
    //   };

    // case ADD_COUNTRY_IMAGE_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

    case GET_COUNTRY_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        countryList: action.data,
      };

    case GET_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_COUNTRY:  
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        countryEdit: action.data,
      };

    case UPDATE_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_COUNTRY:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        countryEdit: undefined,
      };

    case DELETE_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      break;
  }
};
