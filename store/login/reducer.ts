import { ILoginActions } from "./actions";
import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
} from "./constants";

interface IProcess {
  loading: boolean | undefined;
  error: string | undefined;
  success: boolean | undefined;
  token: string | undefined;
}

export interface ILoginState {
  // isLoading: boolean | undefined;
  // error: string | undefined;
  login: IProcess;
  logout: IProcess;
  resetPassword: IProcess;
  updatePassword: IProcess;
  register: IProcess;
}

export const initialState: ILoginState = {
  login: {
    loading: undefined,
    error: undefined,
    success: undefined,
    token: undefined,
  },
  updatePassword: {
    loading: undefined,
    error: undefined,
    success: undefined,
    token: undefined,
  },
  resetPassword: {
    loading: undefined,
    error: undefined,
    success: undefined,
    token: undefined,
  },
  register: {
    loading: undefined,
    error: undefined,
    success: undefined,
    token: undefined,
  },
  logout: {
    loading: undefined,
    error: undefined,
    success: undefined,
    token: undefined,
  },
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
        login: { ...state.login, loading: true, error: undefined },
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          token: action.data,
          success: true,
        },
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        login: { ...state.login, loading: false, error: action.error },
      };
    // logout
    case LOGOUT_USER:
      return {
        ...state,
        logout: { ...state.logout, loading: true, error: undefined },
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        login: { ...state.logout, loading: false, success: true },
      };

    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        login: { ...state.logout, loading: false, error: action.error },
      };

    // reset password
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: true,
          error: undefined,
        },
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          success: true,
        },
      };

    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: action.error,
        },
      };

    // update password
    case UPDATE_PASSWORD:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: true,
          error: undefined,
        },
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          success: true,
        },
      };

    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: action.error,
        },
      };

    // register
    case REGISTER_USER:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
          error: undefined,
        },
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          success: true,
        },
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};
