import { createSlice } from "@reduxjs/toolkit";
import { IActionSaga } from "../../../config/hooks";
import { ICondition } from "./action";

export interface IConditionState {
  list: ICondition[] | undefined;
  condition: ICondition | undefined;
  error: string | undefined;
  isLoading: boolean;
  success: boolean;
}

export const initialState: IConditionState = {
  list: [],
  condition: undefined,
  error: undefined,
  isLoading: false,
  success: false,
};

export const conditionReducer = createSlice({
  name: "condition",
  initialState,
  reducers: {
    resetConditionAction: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = undefined;
    },
    activeConditionAction: (state, action: any) => {
      state.isLoading = true;
      state.error = undefined;
    },
    addConditionSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.list!.push(action.payload);
    },
    updateConditionSuccess: (state, action: any) => {
      state.success = true;
      state.isLoading = false;
      state.condition = action.payload;
      state.list = [...state.list!]
        .filter((item) => item.id !== action.payload.id)
        .concat(action.payload);
    },
    actionConditionFailed: (state, action: any) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    getConditionItemsSuccess: (state, action: any) => {
      state.list = action.payload;
    },
  },
});

export const conditionActionSaga: IActionSaga = {
  ADD_ITEM: "ADD_CONDITION_ITEM",
  UPDATE_ITEM: "UPDATE_CONDITION_ITEM",
  DELETE_ITEM: "DELETE_CONDITION_ITEM",
};

export const conditionAction: any = conditionReducer.actions;

export default conditionReducer.reducer;
