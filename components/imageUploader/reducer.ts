import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../config/hooks";

export interface IImageState {
  image: string | undefined;
  error: string | undefined;
  loading: boolean | undefined;
}

export const initialState: IImageState = {
  image: undefined,
  error: undefined,
  loading: undefined,
};

export const imageReducer = createSlice({
  name: "image",
  initialState,
  reducers: {
    uploadImage: (state, action: any) => {
      state.loading = true;
    },
    uploadSuccess: (state, action: any) => {
      state.loading = false;
      state.image = action.payload;
    },
    uploadFailure: (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const imageActionSaga: IActionSaga = {
  ADD_ITEM: "IMAGE_ADD_ITEM",
};

export const imageAction: any = imageReducer.actions;

export default imageReducer.reducer;