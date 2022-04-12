import { Action } from "redux";
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

export interface IPayment {
  id: string;
  user: any;
  job: any;
  token: string;
  is_completed: number;
  gateway: string;
}

export interface IAddPayment extends Action<"payment/ADD_PAYMENT"> {
  data: IPayment;
}

export const addPayment = (data: IPayment): IAddPayment => ({
  type: ADD_PAYMENT,
  data,
});

export interface IAddPaymentSuccess extends Action<"payment/ADD_PAYMENT_SUCCESS"> {
  data: IPayment;
}

export const addPaymentSuccess = (data: IPayment): IAddPaymentSuccess => ({
  type: ADD_PAYMENT_SUCCESS,
  data,
});

export interface IAddPaymentFailure extends Action<"payment/ADD_PAYMENT_FAILURE"> {
  error: string;
}

export const addPaymentFailure = (error: string): IAddPaymentFailure => ({
  type: ADD_PAYMENT_FAILURE,
  error,
});

export interface IGetPaymentList extends Action<"payment/GET_PAYMENT_LIST"> {}
export const getPaymentList = (): IGetPaymentList => ({
  type: GET_PAYMENT_LIST,
});

export interface IGetPaymentListSuccess
  extends Action<"payment/GET_PAYMENT_LIST_SUCCESS"> {
  data: IPayment[];
}

export const getPaymentListSuccess = (
  data: IPayment[]
): IGetPaymentListSuccess => ({
  type: GET_PAYMENT_LIST_SUCCESS,
  data,
});

export interface IGetPaymentListFailure
  extends Action<"payment/GET_PAYMENT_LIST_FAILURE"> {
  error: string;
}

export const getPaymentListFailure = (error: string): IGetPaymentListFailure => ({
  type: GET_PAYMENT_LIST_FAILURE,
  error,
});

export interface IUpdatePayments extends Action<"payment/UPDATE_PAYMENT"> {
  data: IPayment;
}
export const updatePayment = (data: IPayment): IUpdatePayments => ({
  type: UPDATE_PAYMENT,
  data,
});

export interface IUpdatePaymentSuccess
  extends Action<"payment/UPDATE_PAYMENT_SUCCESS"> {
  data: IPayment;
}

export const updatePaymentSuccess = (data: IPayment): IUpdatePaymentSuccess => ({
  type: UPDATE_PAYMENT_SUCCESS,
  data,
});

export interface IUpdatePaymentFailure
  extends Action<"payment/UPDATE_PAYMENT_FAILURE"> {
  error: string;
}

export const updatePaymentFailure = (error: string): IUpdatePaymentFailure => ({
  type: UPDATE_PAYMENT_FAILURE,
  error,
});

export interface IDeletePayment extends Action<"payment/DELETE_PAYMENT"> {
  id: string;
}
export const deletePayment = (id: string): IDeletePayment => ({
  type: DELETE_PAYMENT,
  id,
});

export interface IDeletePaymentSuccess extends Action<"payment/DELETE_PAYMENT_SUCCESS"> {
  id: string;
}

export const deletePaymentSuccess = (id: string): IDeletePaymentSuccess => ({
  type: DELETE_PAYMENT_SUCCESS,
  id,
});

export interface IDeletePaymentFailure extends Action<"payment/DELETE_PAYMENT_FAILURE"> {
  error: string;
}

export const deletePaymentFailure = (error: string): IDeletePaymentFailure => ({
  type: DELETE_PAYMENT_FAILURE,
  error,
});

export type IPaymentActions =
  | IAddPayment
  | IAddPaymentSuccess
  | IAddPaymentFailure
  | IGetPaymentList
  | IGetPaymentListSuccess
  | IGetPaymentListFailure
  | IUpdatePayments
  | IUpdatePaymentSuccess
  | IUpdatePaymentFailure
  | IDeletePayment
  | IDeletePaymentSuccess
  | IDeletePaymentFailure;
