import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IRole } from "./action";

export interface IRoleState {
  list: IRole[] | undefined;
  role: IRole | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IRoleState = {
  list: [],
  role: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const roleReducer = createSlice({
  name: "role",
  initialState,
  reducers: {
    resetRoleAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeRoleAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addRoleSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateRoleSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.role = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionRoleFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getRoleItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const roleActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_ROLE_ITEM",
  UPDATE_ITEM: "UPDATE_ROLE_ITEM",
  DELETE_ITEM: "DELETE_ROLE_ITEM",
};

export const roleAction: any = roleReducer.actions;

export default roleReducer.reducer;
