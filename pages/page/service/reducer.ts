import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IService } from "./action";

export interface IServiceState {
  list: IService[] | undefined;
  service: IService | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IServiceState = {
  list: [],
  service: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const serviceReducer = createSlice({
  name: "service",
  initialState,
  reducers: {
    resetServiceAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeServiceAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addServiceSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateServiceSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.service = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionServiceFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getServiceItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const serviceActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_SERVICE_ITEM",
  UPDATE_ITEM: "UPDATE_SERVICE_ITEM",
  DELETE_ITEM: "DELETE_SERVICE_ITEM",
};

export const serviceAction: any = serviceReducer.actions;

export default serviceReducer.reducer;
