import { Action } from "redux";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from "./constants";

export interface ICategory {
  id?: string;
  name: string;
  name_fr?: string;
  slug: string;
  slug_fr?: string;
  image: string;
  description: string;
  service?: any;
  condition?: any;
  parent?: any;
  tasks: any[];
  created_at?: any;
  update_at?: any;
}

export interface IAddCategory extends Action<"category/ADD_CATEGORY"> {
  data: ICategory;
}

export const addCategory = (data: ICategory): IAddCategory => ({
  type: ADD_CATEGORY,
  data,
});

export interface IAddCategorySuccess
  extends Action<"category/ADD_CATEGORY_SUCCESS"> {
  data: ICategory;
}

export const addCategorySuccess = (data: ICategory): IAddCategorySuccess => ({
  type: ADD_CATEGORY_SUCCESS,
  data,
});

export interface IAddCategoryFailure
  extends Action<"category/ADD_CATEGORY_FAILURE"> {
  error: string;
}

export const addCategoryFailure = (error: string): IAddCategoryFailure => ({
  type: ADD_CATEGORY_FAILURE,
  error,
});

export interface IGetCategoryList
  extends Action<"category/GET_CATEGORY_LIST"> {}
export const getCategoryList = (): IGetCategoryList => ({
  type: GET_CATEGORY_LIST,
});

export interface IGetCategoryListSuccess
  extends Action<"category/GET_CATEGORY_LIST_SUCCESS"> {
  data: ICategory[];
}

export const getCategoryListSuccess = (
  data: ICategory[]
): IGetCategoryListSuccess => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  data,
});

export interface IGetCategoryListFailure
  extends Action<"category/GET_CATEGORY_LIST_FAILURE"> {
  error: string;
}

export const getCategoryListFailure = (
  error: string
): IGetCategoryListFailure => ({
  type: GET_CATEGORY_LIST_FAILURE,
  error,
});

export interface IUpdateCategorys extends Action<"category/UPDATE_CATEGORY"> {
  data: ICategory;
}
export const updateCategory = (data: ICategory): IUpdateCategorys => ({
  type: UPDATE_CATEGORY,
  data,
});

export interface IUpdateCategorySuccess
  extends Action<"category/UPDATE_CATEGORY_SUCCESS"> {
  data: ICategory;
}

export const updateCategorySuccess = (
  data: ICategory
): IUpdateCategorySuccess => ({
  type: UPDATE_CATEGORY_SUCCESS,
  data,
});

export interface IUpdateCategoryFailure
  extends Action<"category/UPDATE_CATEGORY_FAILURE"> {
  error: string;
}

export const updateCategoryFailure = (
  error: string
): IUpdateCategoryFailure => ({
  type: UPDATE_CATEGORY_FAILURE,
  error,
});

export interface IDeleteCategory extends Action<"category/DELETE_CATEGORY"> {
  id: string;
}
export const deleteCategory = (id: string): IDeleteCategory => ({
  type: DELETE_CATEGORY,
  id,
});

export interface IDeleteCategorySuccess
  extends Action<"category/DELETE_CATEGORY_SUCCESS"> {
  id: string;
}

export const deleteCategorySuccess = (id: string): IDeleteCategorySuccess => ({
  type: DELETE_CATEGORY_SUCCESS,
  id,
});

export interface IDeleteCategoryFailure
  extends Action<"category/DELETE_CATEGORY_FAILURE"> {
  error: string;
}

export const deleteCategoryFailure = (
  error: string
): IDeleteCategoryFailure => ({
  type: DELETE_CATEGORY_FAILURE,
  error,
});

export interface IGetCategory extends Action<"category/GET_CATEGORY"> {
  data: string;
}

export const getCategory = (data: string): IGetCategory => ({
  type: GET_CATEGORY,
  data,
});

export interface IGetCategorySuccess
  extends Action<"category/GET_CATEGORY_SUCCESS"> {
  data: ICategory;
}

export const getCategorySuccess = (data: ICategory): IGetCategorySuccess => ({
  type: GET_CATEGORY_SUCCESS,
  data,
});

export interface IGetCategoryFailure
  extends Action<"category/GET_CATEGORY_FAILURE"> {
  error: string;
}

export const getCategoryFailure = (error: string): IGetCategoryFailure => ({
  type: GET_CATEGORY_FAILURE,
  error,
});

export type ICategoryActions =
  | IAddCategory
  | IAddCategorySuccess
  | IAddCategoryFailure
  | IGetCategoryList
  | IGetCategoryListSuccess
  | IGetCategoryListFailure
  | IUpdateCategorys
  | IUpdateCategorySuccess
  | IUpdateCategoryFailure
  | IDeleteCategory
  | IDeleteCategorySuccess
  | IDeleteCategoryFailure
  | IGetCategory
  | IGetCategorySuccess
  | IGetCategoryFailure;
