import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { ICountry } from "./action";

export interface ICountryState {
  list: ICountry[] | undefined;
  country: ICountry | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICountryState = {
  list: [],
  country: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const countryReducer = createSlice({
  name: "country",
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
      state.country = action.payload;
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

export const countryActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

export const countryAction: any = countryReducer.actions;

export default countryReducer.reducer;
