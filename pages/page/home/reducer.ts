import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IUser } from "../user/action";

export interface IHomeState {
  user: IUser | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const initialState: IHomeState = {
  user: undefined,
  error: undefined,
  isLoading: false,
};

export const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    activeAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },

    actionFailed: (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getItemsSuccess: (state, action: any) => {
      state.user = action.payload;
    },
  },
});

export const homeActionSaga: IActionSaga = {
  GET_ITEM: "GET_ITEM",
};

export const homeAction: any = homeReducer.actions;

export default homeReducer.reducer;
