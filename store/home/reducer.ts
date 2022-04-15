import { ICity } from "../city/action";
import { ICondition } from "../condition/action";
import { IJob } from "../jobs/action";
import { IRole } from "../role/action";
import { ITask } from "../task/action";
import { IUser } from "../user/action";
import { IHomeActions } from "./actions";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_SUCCESS,
} from "./constants";

// export interface IUser {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   gender: string;
//   avatar: string;
//   birth_year: string;
//   street: string;
//   mobile: string;
//   certificate: string;
//   bio: string;
//   zip_code: string;
//   url: string;

// }

export interface IHomeState {
  user: IUser | undefined;
  role: IRole | undefined;
  condition: ICondition | undefined;
  city: ICity | undefined;
  jobs: IJob[] | undefined;
  tasks: ITask[] | undefined;
  error: string | undefined;
  loading: boolean;
}

export const initialState: IHomeState = {
  user: undefined,
  role: undefined,
  condition: undefined,
  city: undefined,
  jobs: undefined,
  tasks: undefined,
  error: undefined,
  loading: false,
};

export const homeReducer = (
  state: IHomeState = initialState,
  action: IHomeActions
): IHomeState => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        role: action.data.role,
        condition: action.data.condition,
        city: action.data.city,
        jobs: action.data.jobs,
        tasks: action.data.tasks,
        user: {
          id: action.data.id,
          first_name: action.data.first_name,
          last_name: action.data.last_name,
          email: action.data.email,
          gender: action.data.gender,
          avatar: action.data.avatar,
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
