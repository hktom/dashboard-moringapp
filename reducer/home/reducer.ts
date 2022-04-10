import { IHomeActions } from "./actions";
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS } from "./constants";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  birth_year: string;
  street: string;
  mobile: string;
  certificate: string;
  bio: string;
  zip_code: string;
  url: string;
}

export interface IHomeState {
  profile?: IUser;
  role: any;
  condition: any;
  city: any;
  jobs: any;
  tasks: any;
}

export const initialState: IHomeState = {
  profile: undefined,
  role: undefined,
  condition: undefined,
  city: undefined,
  jobs: undefined,
  tasks: undefined,
};

export const homeReducer = (
  state: IHomeState = initialState,
  action: IHomeActions
): IHomeState => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.data?.profile,
      };

    default:
      return state;
  }
};
