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
    activeHomeAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },

    actionHomeFailed: (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getHomeItemsSuccess: (state, action: any) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = undefined;
    },
  },
});

export const homeActionSaga: IActionSaga = {
  GET_ITEM: "GET_HOME_ITEM",
};

export const homeAction: any = homeReducer.actions;

export default homeReducer.reducer;
