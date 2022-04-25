import { ICondition, IConditionActions } from "./action";
import {
  ADD_CONDITION,
  ADD_CONDITION_SUCCESS,
  ADD_CONDITION_FAILURE,
  GET_CONDITION_LIST,
  GET_CONDITION_LIST_SUCCESS,
  GET_CONDITION_LIST_FAILURE,
  UPDATE_CONDITION,
  UPDATE_CONDITION_SUCCESS,
  UPDATE_CONDITION_FAILURE,
  DELETE_CONDITION,
  DELETE_CONDITION_SUCCESS,
  DELETE_CONDITION_FAILURE,
  GET_CONDITION_SUCCESS,
} from "./constants";

export interface IConditionState {
  list: ICondition[] | undefined;
  condition: ICondition | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IConditionState = {
  list: undefined,
  condition: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const conditionReducer = (
  state: IConditionState = initialState,
  action: IConditionActions
) :IConditionState=> {
  switch (action.type) {
    case ADD_CONDITION:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_CONDITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        condition: action.data,
      };

    case ADD_CONDITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

      case GET_CONDITION_SUCCESS:
        return {
          ...state,
          condition: action.data,
        };

    // case GET_CONDITION_LIST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    case GET_CONDITION_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // success: true,
        list: action.data,
      };

    // case GET_CONDITION_LIST_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

    case UPDATE_CONDITION:  
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_CONDITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        condition: action.data,
      };

    case UPDATE_CONDITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_CONDITION:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_CONDITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        condition: undefined,
      };

    case DELETE_CONDITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default: return {...state};
  }
};
