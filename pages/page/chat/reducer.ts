import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";

export interface IChatState {
  rooms: any[] | undefined;
  room: any | undefined;
  chats: any[] | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IChatState = {
  rooms: [],
  chats: undefined,
  room: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const chatReducer = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChatAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeChatAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addChatSuccess: (state, action: any) => {
      state.rooms = [...state.rooms!, action.payload];
    },
    updateChatSuccess: (state, action: any) => {
      state.room = {
        ...state.room,
        chats: [...state.room.chats].concat(action.payload),
      };
    },
    streamChatSuccess: (state, action: any) => {
      state.chats = action.payload;
    },
    actionChatFailed: (state, action: any) => {
      state.error = action.payload;
    },
    setRoomChats: (state, action: any) => {
      state.room = action.payload;
    },
    getRoomItemsSuccess: (state, action: any) => {
      state.rooms = action.payload;
    },
  },
});

export const chatActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_CHAT_ITEM",
  UPDATE_ITEM: "UPDATE_CHAT_ITEM",
  DELETE_ITEM: "DELETE_CHAT_ITEM",
};

export const chatAction: any = chatReducer.actions;

export default chatReducer.reducer;
