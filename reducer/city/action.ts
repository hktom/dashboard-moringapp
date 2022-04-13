import { Action } from "redux";
import {
  ADD_CITY,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAILURE,
  GET_CITY_LIST,
  GET_CITY_LIST_SUCCESS,
  GET_CITY_LIST_FAILURE,
  UPDATE_CITY,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAILURE,
  DELETE_CITY,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAILURE,
  GET_CITY,
  GET_CITY_FAILURE,
  GET_CITY_SUCCESS,
} from "./constants";

export interface ICity {
  id: string;
  name: string;
  name_fr: string;
  country: any;
  created_at?: any;
  update_at?: any;
}

export interface IAddCity extends Action<"city/ADD_CITY"> {
  data: ICity;
}

export const addCity = (data: ICity): IAddCity => ({
  type: ADD_CITY,
  data,
});

export interface IAddCitySuccess extends Action<"city/ADD_CITY_SUCCESS"> {
  data: ICity;
}

export const addCitySuccess = (data: ICity): IAddCitySuccess => ({
  type: ADD_CITY_SUCCESS,
  data,
});

export interface IAddCityFailure extends Action<"city/ADD_CITY_FAILURE"> {
  error: string;
}

export const addCityFailure = (error: string): IAddCityFailure => ({
  type: ADD_CITY_FAILURE,
  error,
});

export interface IGetCityList extends Action<"city/GET_CITY_LIST"> {}
export const getCityList = (): IGetCityList => ({
  type: GET_CITY_LIST,
});

export interface IGetCityListSuccess
  extends Action<"city/GET_CITY_LIST_SUCCESS"> {
  data: ICity[];
}

export const getCityListSuccess = (data: ICity[]): IGetCityListSuccess => ({
  type: GET_CITY_LIST_SUCCESS,
  data,
});

export interface IGetCityListFailure
  extends Action<"city/GET_CITY_LIST_FAILURE"> {
  error: string;
}

export const getCityListFailure = (error: string): IGetCityListFailure => ({
  type: GET_CITY_LIST_FAILURE,
  error,
});

export interface IUpdateCity extends Action<"city/UPDATE_CITY"> {
  data: ICity;
}
export const updateCity = (data: ICity): IUpdateCity => ({
  type: UPDATE_CITY,
  data,
});

export interface IUpdateCitySuccess extends Action<"city/UPDATE_CITY_SUCCESS"> {
  data: ICity;
}

export const updateCitySuccess = (data: ICity): IUpdateCitySuccess => ({
  type: UPDATE_CITY_SUCCESS,
  data,
});

export interface IUpdateCityFailure extends Action<"city/UPDATE_CITY_FAILURE"> {
  error: string;
}

export const updateCityFailure = (error: string): IUpdateCityFailure => ({
  type: UPDATE_CITY_FAILURE,
  error,
});

export interface IDeleteCity extends Action<"city/DELETE_CITY"> {
  id: string;
}
export const deleteCity = (id: string): IDeleteCity => ({
  type: DELETE_CITY,
  id,
});

export interface IDeleteCitySuccess extends Action<"city/DELETE_CITY_SUCCESS"> {
  id: string;
}

export const deleteCitySuccess = (id: string): IDeleteCitySuccess => ({
  type: DELETE_CITY_SUCCESS,
  id,
});

export interface IDeleteCityFailure extends Action<"city/DELETE_CITY_FAILURE"> {
  error: string;
}

export const deleteCityFailure = (error: string): IDeleteCityFailure => ({
  type: DELETE_CITY_FAILURE,
  error,
});

export interface IGetCity extends Action<"city/GET_CITY"> {
  data: string;
}

export const getCity = (data: string): IGetCity => ({
  type: GET_CITY,
  data,
});

export interface IGetCitySuccess extends Action<"city/GET_CITY_SUCCESS"> {
  data: ICity;
}

export const getCitySuccess = (data: ICity): IGetCitySuccess => ({
  type: GET_CITY_SUCCESS,
  data,
});

export interface IGetCityFailure extends Action<"city/GET_CITY_FAILURE"> {
  error: string;
}

export const getCityFailure = (error: string): IGetCityFailure => ({
  type: GET_CITY_FAILURE,
  error,
});

export type ICityActions =
  | IAddCity
  | IAddCitySuccess
  | IAddCityFailure
  | IGetCityList
  | IGetCityListSuccess
  | IGetCityListFailure
  | IUpdateCity
  | IUpdateCitySuccess
  | IUpdateCityFailure
  | IDeleteCity
  | IDeleteCitySuccess
  | IDeleteCityFailure
  | IGetCity
  | IGetCitySuccess
  | IGetCityFailure;
