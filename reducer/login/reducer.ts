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
  token: string;
}

export const initialState: ILoginState = {
  isLoading: false,
  error: "",
  email: "",
  password: "",
  token: "",
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
        error: "",
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        token: action.data,
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
