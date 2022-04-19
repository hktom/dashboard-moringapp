import { Action } from "redux";
import {
  ADD_SERVICE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE,
  GET_SERVICE_LIST,
  GET_SERVICE_LIST_SUCCESS,
  GET_SERVICE_LIST_FAILURE,
  UPDATE_SERVICE,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
  GET_SERVICE,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_FAILURE,
} from "./constants";

export interface IService {
  id: string;
  name: string;
  name_fr: string;
  description: string;
  slug: string;
  slug_fr: string;
  image: string;
  created_at?: any;
  update_at?: any;
  condition?: any;
}

export interface IAddService extends Action<"service/ADD_SERVICE"> {
  data: IService;
}

export const addService = (data: IService): IAddService => ({
  type: ADD_SERVICE,
  data,
});

export interface IAddServiceSuccess
  extends Action<"service/ADD_SERVICE_SUCCESS"> {
  data: IService;
}

export const addServiceSuccess = (data: IService): IAddServiceSuccess => ({
  type: ADD_SERVICE_SUCCESS,
  data,
});

export interface IAddServiceFailure
  extends Action<"service/ADD_SERVICE_FAILURE"> {
  error: string;
}

export const addServiceFailure = (error: string): IAddServiceFailure => ({
  type: ADD_SERVICE_FAILURE,
  error,
});

export interface IGetServiceList extends Action<"service/GET_SERVICE_LIST"> {}
export const getServiceList = (): IGetServiceList => ({
  type: GET_SERVICE_LIST,
});

export interface IGetServiceListSuccess
  extends Action<"service/GET_SERVICE_LIST_SUCCESS"> {
  data: IService[];
}

export const getServiceListSuccess = (
  data: IService[]
): IGetServiceListSuccess => ({
  type: GET_SERVICE_LIST_SUCCESS,
  data,
});

export interface IGetServiceListFailure
  extends Action<"service/GET_SERVICE_LIST_FAILURE"> {
  error: string;
}

export const getServiceListFailure = (
  error: string
): IGetServiceListFailure => ({
  type: GET_SERVICE_LIST_FAILURE,
  error,
});

export interface IUpdateServices extends Action<"service/UPDATE_SERVICE"> {
  data: IService;
}
export const updateService = (data: IService): IUpdateServices => ({
  type: UPDATE_SERVICE,
  data,
});

export interface IUpdateServiceSuccess
  extends Action<"service/UPDATE_SERVICE_SUCCESS"> {
  data: IService;
}

export const updateServiceSuccess = (
  data: IService
): IUpdateServiceSuccess => ({
  type: UPDATE_SERVICE_SUCCESS,
  data,
});

export interface IUpdateServiceFailure
  extends Action<"service/UPDATE_SERVICE_FAILURE"> {
  error: string;
}

export const updateServiceFailure = (error: string): IUpdateServiceFailure => ({
  type: UPDATE_SERVICE_FAILURE,
  error,
});

export interface IDeleteService extends Action<"service/DELETE_SERVICE"> {
  id: string;
}
export const deleteService = (id: string): IDeleteService => ({
  type: DELETE_SERVICE,
  id,
});

export interface IDeleteServiceSuccess
  extends Action<"service/DELETE_SERVICE_SUCCESS"> {
  id: string;
}

export const deleteServiceSuccess = (id: string): IDeleteServiceSuccess => ({
  type: DELETE_SERVICE_SUCCESS,
  id,
});

export interface IDeleteServiceFailure
  extends Action<"service/DELETE_SERVICE_FAILURE"> {
  error: string;
}

export const deleteServiceFailure = (error: string): IDeleteServiceFailure => ({
  type: DELETE_SERVICE_FAILURE,
  error,
});

export interface IGetService extends Action<"service/GET_SERVICE"> {
  data: string;
}

export const getService = (data: string): IGetService => ({
  type: GET_SERVICE,
  data,
});

export interface IGetServiceSuccess
  extends Action<"service/GET_SERVICE_SUCCESS"> {
  data: IService;
}

export const getServiceSuccess = (data: IService): IGetServiceSuccess => ({
  type: GET_SERVICE_SUCCESS,
  data,
});

export interface IGetServiceFailure
  extends Action<"service/GET_SERVICE_FAILURE"> {
  error: string;
}

export const getServiceFailure = (error: string): IGetServiceFailure => ({
  type: GET_SERVICE_FAILURE,
  error,
});

export type IServiceActions =
  | IAddService
  | IAddServiceSuccess
  | IAddServiceFailure
  | IGetServiceList
  | IGetServiceListSuccess
  | IGetServiceListFailure
  | IUpdateServices
  | IUpdateServiceSuccess
  | IUpdateServiceFailure
  | IDeleteService
  | IDeleteServiceSuccess
  | IDeleteServiceFailure
  | IGetService
  | IGetServiceSuccess
  | IGetServiceFailure;
