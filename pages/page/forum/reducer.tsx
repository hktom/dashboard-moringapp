import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";

export interface IForumState {
  list: any[] | undefined;
  forum: any | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IForumState = {
  list: [],
  forum: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const forumReducer = createSlice({
  name: "forum",
  initialState,
  reducers: {
    resetForumAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeForumAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addForumSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateForumSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.forum = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionForumFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getForumItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const forumActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_FORUM_ITEM",
  UPDATE_ITEM: "UPDATE_FORUM_ITEM",
  DELETE_ITEM: "DELETE_FORUM_ITEM",
};

export const forumAction: any = forumReducer.actions;

export default forumReducer.reducer;
