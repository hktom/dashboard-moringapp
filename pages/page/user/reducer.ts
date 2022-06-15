import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IUser } from "./action";

export interface IUserState {
  list: IUser[] | undefined;
  user: IUser | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
  passwordActivity: any;
}

export const initialState: IUserState = {
  list: [],
  user: undefined,
  error: undefined,
  isLoading: false,
  success: false,
  passwordActivity: {},
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeUserAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    activePasswordAction: (state) => {
      state.passwordActivity = { loading: true };
    },
    passwordSuccess: (state) => {
      state.passwordActivity = { success: true };
    },
    passwordFailed: (state, action) => {
      state.passwordActivity = { error: action.payload };
    },
    addUserSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateUserSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.user = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionUserFailure: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getUserItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const userActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_USER_ITEM",
  UPDATE_PASSWORD: "UPDATE_USER_PASSWORD",
  UPDATE_ITEM: "UPDATE_USER_ITEM",
  DELETE_ITEM: "DELETE_USER_ITEM",
};

export const userAction: any = userReducer.actions;

export default userReducer.reducer;
