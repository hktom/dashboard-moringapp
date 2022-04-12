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
} from "./constants";

interface IPaymentState {
  paymentList: IPayment[];
  paymentEdit: IPayment | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IPaymentState = {
  paymentList: [],
  paymentEdit: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const paymentReducer = (
  state: IPaymentState = initialState,
  action: IPaymentActions
) => {
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
        paymentEdit: action.data,
      };

    case ADD_PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // case ADD_PAYMENT_IMAGE:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    // case ADD_PAYMENT_IMAGE_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     success: true,
    //     paymentEdit: action.data,
    //   };

    // case ADD_PAYMENT_IMAGE_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.error,
    //   };

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
        paymentList: action.data,
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
        paymentEdit: action.data,
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
        paymentEdit: undefined,
      };

    case DELETE_PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      break;
  }
};
