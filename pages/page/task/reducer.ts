import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { ITask } from "./action";

export interface ITaskState {
  list: ITask[] | undefined;
  task: ITask | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ITaskState = {
  list: [],
  task: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    actionSuccessAdd: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    actionSuccessUpdate: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.task = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const taskActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

export const taskAction: any = taskReducer.actions;

export default taskReducer.reducer;
