import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";

export interface IChatState {
  rooms: any[] | undefined;
  room: any | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IChatState = {
  rooms: [],
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
      // state.success = true;
      // state.isLoading = false;
      // state.list!.push(action.payload);
    },
    updateChatSuccess: (state, action: any) => {
      // state.room = {
      //   ...state.room,
      //   chats: [...state.room.chats].concat(action.payload),
      // };

      console.log(action.payload);

      // state.success = true;
      // state.isLoading = false;
      // state.chat = action.payload;
      // state.list = [...state.list!]
      //   .filter((item) => item.id !== action.payload.id)
      //   .concat(action.payload);
    },
    actionChatFailed: (state, action: any) => {
      // state.isLoading = false;
      // state.success = false;
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
