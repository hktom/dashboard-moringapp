import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { ICategory } from "./action";

export interface ICategoryState {
  list: ICategory[] | undefined;
  category: ICategory | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: ICategoryState = {
  list: [],
  category: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategoryAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeCategoryAction: (state) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addCategorySuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateCategorySuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.category = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    categoryActionFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getCategoryItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const categoryActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_CATEGORY_ITEM",
  UPDATE_ITEM: "UPDATE_CATEGORY_ITEM",
  DELETE_ITEM: "DELETE_CATEGORY_ITEM",
};

export const categoryAction: any = categoryReducer.actions;

export default categoryReducer.reducer;
