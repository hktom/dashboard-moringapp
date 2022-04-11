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
} from "./constants";

interface ICategoryState {
  categoryList: ICategory[];
  categoryEdit: ICategory | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICategoryState = {
  categoryList: [],
  categoryEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const categoryReducer = (
  state: ICategoryState = initialState,
  action: ICategoryActions
) => {
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
        categoryEdit: action.data,
      };

    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_CATEGORY_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        categoryList: action.data,
      };

    case GET_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

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
        categoryEdit: action.data,
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
        categoryEdit: undefined,
      };

    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      break;
  }
};
