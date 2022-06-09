import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { ICity } from "./action";

export interface ICityState {
  list: ICity[] | undefined;
  city: ICity | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICityState = {
  list: [],
  city: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const cityReducer = createSlice({
  name: "city",
  initialState,
  reducers: {
    resetCityAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeCityAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addCitySuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateCitySuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.city = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionCityFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getCityItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const cityActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_CITY_ITEM",
  UPDATE_ITEM: "UPDATE_CITY_ITEM",
  DELETE_ITEM: "DELETE_CITY_ITEM",
};

export const cityAction: any = cityReducer.actions;

export default cityReducer.reducer;
