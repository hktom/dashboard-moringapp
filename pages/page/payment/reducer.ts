import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IPayment } from "./action";

export interface IPaymentState {
  list: IPayment[] | undefined;
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

export const paymentReducer = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetPaymentAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activePaymentAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addPaymentSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updatePaymentSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.payment = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionPaymentFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getPaymentItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const paymentActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_PAYMENT_ITEM",
  UPDATE_ITEM: "UPDATE_PAYMENT_ITEM",
  DELETE_ITEM: "DELETE_PAYMENT_ITEM",
};

export const paymentAction: any = paymentReducer.actions;

export default paymentReducer.reducer;
