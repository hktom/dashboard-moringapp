import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";

export interface IContentState {
  list: any[] | undefined;
  content: any | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IContentState = {
  list: [],
  content: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const contentReducer = createSlice({
  name: "content",
  initialState,
  reducers: {
    resetContentAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeContentAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addContentSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateContentSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.content = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionContentFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getContentItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const contentActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_CONTENT_ITEM",
  UPDATE_ITEM: "UPDATE_CONTENT_ITEM",
  DELETE_ITEM: "DELETE_CONTENT_ITEM",
};

export const contentAction: any = contentReducer.actions;

export default contentReducer.reducer;
