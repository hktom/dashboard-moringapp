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
        role: action.data.role,
        condition: action.data.condition,
        city: action.data.city,
        jobs: action.data.jobs,
        tasks: action.data.tasks,
        profile: {
          id: action.data.id,
          first_name: action.data.first_name,
          last_name: action.data.last_name,
          email: action.data.email,
          gender: action.data.gender,
          avatar: action.data.avatar,
          birth_year: action.data.birth_year,
          street: action.data.street,
          mobile: action.data.mobile,
          certificate: action.data.certificate,
          bio: action.data.bio,
          zip_code: action.data.zip_code,
          url: action.data.url,
        },
      };

    default:
      return state;
  }
};
