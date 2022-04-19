import { IPayment, IPaymentActions } from "./action";
import {
  ADD_PAYMENT,
  ADD_PAYMENT_SUCCESS,
  ADD_PAYMENT_FAILURE,
  GET_PAYMENT_LIST,
  GET_PAYMENT_LIST_SUCCESS,
  GET_PAYMENT_LIST_FAILURE,
  UPDATE_PAYMENT,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  DELETE_PAYMENT,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAILURE,
  GET_PAYMENT_SUCCESS,
} from "./constants";

export interface IPaymentState {
  list: IPayment[];
  payment: IPayment | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IPaymentState = {
  list: [],
  payment: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const paymentReducer = (
  state: IPaymentState = initialState,
  action: IPaymentActions
): IPaymentState => {
  switch (action.type) {
    case ADD_PAYMENT:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        payment: action.data,
      };

    case ADD_PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.data,
      };

    case GET_PAYMENT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PAYMENT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        list: action.data,
      };

    case GET_PAYMENT_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case UPDATE_PAYMENT:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        payment: action.data,
      };

    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_PAYMENT:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        payment: undefined,
      };

    case DELETE_PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};
