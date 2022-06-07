import { ICategory, ICategoryActions } from "./action";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from "./constants";

export interface ICategoryState {
  list: ICategory[] | undefined;
  category: ICategory | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICategoryState = {
  list: [],
  category: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const categoryReducer = (
  state: ICategoryState = initialState,
  action: ICategoryActions
): ICategoryState => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        category: action.data,
      };

    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

      case GET_CATEGORY_SUCCESS:
        return {
          ...state,
          category: action.data,
        };

    // case GET_CATEGORY_LIST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // success: true,
        list: action.data,
      };

    // case GET_CATEGORY_LIST_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

    case UPDATE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        category: action.data,
      };

    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        category: undefined,
      };

    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
