import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { IJob } from "./action";

export interface IJobState {
  list: IJob[] | undefined;
  job: IJob | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IJobState = {
  list: [],
  job: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const jobReducer = createSlice({
  name: "job",
  initialState,
  reducers: {
    resetJobAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeJobAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addJobSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateJobSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.job = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionJobFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getJobItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const jobActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_JOB_ITEM",
  UPDATE_ITEM: "UPDATE_JOB_ITEM",
  DELETE_ITEM: "DELETE_JOB_ITEM",
};

export const jobAction: any = jobReducer.actions;

export default jobReducer.reducer;
