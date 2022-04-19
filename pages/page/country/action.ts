import { Action } from "redux";
import {
  ADD_COUNTRY,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAILURE,
  GET_COUNTRY_LIST,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_FAILURE,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_FAILURE,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAILURE,
  GET_COUNTRY,
  GET_COUNTRY_FAILURE,
  GET_COUNTRY_SUCCESS,
} from "./constants";

export interface ICountry {
  id: string;
  name: string;
  name_fr: string;
  cities: any[];
  created_at?: any;
  update_at?: any;
}

export interface IAddCountry extends Action<"country/ADD_COUNTRY"> {
  data: ICountry;
}

export const addCountry = (data: ICountry): IAddCountry => ({
  type: ADD_COUNTRY,
  data,
});

export interface IAddCountrySuccess
  extends Action<"country/ADD_COUNTRY_SUCCESS"> {
  data: ICountry;
}

export const addCountrySuccess = (data: ICountry): IAddCountrySuccess => ({
  type: ADD_COUNTRY_SUCCESS,
  data,
});

export interface IAddCountryFailure
  extends Action<"country/ADD_COUNTRY_FAILURE"> {
  error: string;
}

export const addCountryFailure = (error: string): IAddCountryFailure => ({
  type: ADD_COUNTRY_FAILURE,
  error,
});

export interface IGetCountryList extends Action<"country/GET_COUNTRY_LIST"> {}
export const getCountryList = (): IGetCountryList => ({
  type: GET_COUNTRY_LIST,
});

export interface IGetCountryListSuccess
  extends Action<"country/GET_COUNTRY_LIST_SUCCESS"> {
  data: ICountry[];
}

export const getCountryListSuccess = (
  data: ICountry[]
): IGetCountryListSuccess => ({
  type: GET_COUNTRY_LIST_SUCCESS,
  data,
});

export interface IGetCountryListFailure
  extends Action<"country/GET_COUNTRY_LIST_FAILURE"> {
  error: string;
}

export const getCountryListFailure = (
  error: string
): IGetCountryListFailure => ({
  type: GET_COUNTRY_LIST_FAILURE,
  error,
});

export interface IUpdateCountry extends Action<"country/UPDATE_COUNTRY"> {
  data: ICountry;
}
export const updateCountry = (data: ICountry): IUpdateCountry => ({
  type: UPDATE_COUNTRY,
  data,
});

export interface IUpdateCountrySuccess
  extends Action<"country/UPDATE_COUNTRY_SUCCESS"> {
  data: ICountry;
}

export const updateCountrySuccess = (
  data: ICountry
): IUpdateCountrySuccess => ({
  type: UPDATE_COUNTRY_SUCCESS,
  data,
});

export interface IUpdateCountryFailure
  extends Action<"country/UPDATE_COUNTRY_FAILURE"> {
  error: string;
}

export const updateCountryFailure = (error: string): IUpdateCountryFailure => ({
  type: UPDATE_COUNTRY_FAILURE,
  error,
});

export interface IDeleteCountry extends Action<"country/DELETE_COUNTRY"> {
  id: string;
}
export const deleteCountry = (id: string): IDeleteCountry => ({
  type: DELETE_COUNTRY,
  id,
});

export interface IDeleteCountrySuccess
  extends Action<"country/DELETE_COUNTRY_SUCCESS"> {
  id: string;
}

export const deleteCountrySuccess = (id: string): IDeleteCountrySuccess => ({
  type: DELETE_COUNTRY_SUCCESS,
  id,
});

export interface IDeleteCountryFailure
  extends Action<"country/DELETE_COUNTRY_FAILURE"> {
  error: string;
}

export const deleteCountryFailure = (error: string): IDeleteCountryFailure => ({
  type: DELETE_COUNTRY_FAILURE,
  error,
});

export interface IGetCountry extends Action<"country/GET_COUNTRY"> {
  data: string;
}

export const getCountry = (data: string): IGetCountry => ({
  type: GET_COUNTRY,
  data,
});

export interface IGetCountrySuccess
  extends Action<"country/GET_COUNTRY_SUCCESS"> {
  data: ICountry;
}

export const getCountrySuccess = (data: ICountry): IGetCountrySuccess => ({
  type: GET_COUNTRY_SUCCESS,
  data,
});

export interface IGetCountryFailure
  extends Action<"country/GET_COUNTRY_FAILURE"> {
  error: string;
}

export const getCountryFailure = (error: string): IGetCountryFailure => ({
  type: GET_COUNTRY_FAILURE,
  error,
});

export type ICountryActions =
  | IAddCountry
  | IAddCountrySuccess
  | IAddCountryFailure
  | IGetCountryList
  | IGetCountryListSuccess
  | IGetCountryListFailure
  | IUpdateCountry
  | IUpdateCountrySuccess
  | IUpdateCountryFailure
  | IDeleteCountry
  | IDeleteCountrySuccess
  | IDeleteCountryFailure
  | IGetCountry
  | IGetCountrySuccess
  | IGetCountryFailure;
