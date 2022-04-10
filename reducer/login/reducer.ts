import { ILoginActions } from "./actions";
import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from "./constants";

export interface ILoginState {
  isLoading?: boolean;
  error?: string;
  email: string;
  password: string;
}

export const initialState: ILoginState = {
  isLoading: false,
  error: "",
  email: "",
  password: "",
};

export const loginReducer = (
  state: ILoginState = initialState,
  action: ILoginActions
): ILoginState => {
  console.log("loginReducer", action);
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
