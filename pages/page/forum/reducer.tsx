import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";

export interface IForumState {
  list: any[] | undefined;
  forum: any | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
  screen: number;
}

export const initialState: IForumState = {
  list: [],
  screen: 0,
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
    setScreen: (state, action) => {
      state.screen = action.payload;
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
    setForum: (state, action: any) => {
      state.forum = action.payload;
    },
    addReplySuccess: (state, action: any) => {
      state.forum = {
        ...state.forum,
        replies: [...state.forum.replies].concat(action.payload),
      };
    },

    deleteReplySuccess: (state, action: any) => {
      state.forum = {
        ...state.forum,
        replies: state.forum.replies!.filter(
          (i: any) => i.id !== action.payload?.id
        ),
      };
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

export const replyActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_REPLY_ITEM",
  DELETE_ITEM: "DELETE_REPLY_ITEM",
};

export const forumAction: any = forumReducer.actions;

export default forumReducer.reducer;
