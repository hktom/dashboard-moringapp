import { Action } from "redux";
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from "./constants";

export interface IUploadImage extends Action<"image/UPLOAD_IMAGE"> {
  data: File | any;
}

export const uploadImage = (data: File | any): IUploadImage => ({
  type: UPLOAD_IMAGE,
  data,
});

export interface IUploadImageSuccess
  extends Action<"image/UPLOAD_IMAGE_SUCCESS"> {
  data: string;
}

export const uploadImageSuccess = (data: string): IUploadImageSuccess => ({
  type: UPLOAD_IMAGE_SUCCESS,
  data,
});

export interface IUploadImageFailure
  extends Action<"image/UPLOAD_IMAGE_FAILURE"> {
  error: string | undefined;
}

export const uploadImageFailure = (
  error: string | undefined
): IUploadImageFailure => ({
  type: UPLOAD_IMAGE_FAILURE,
  error,
});

export type ImageActions =
  | IUploadImage
  | IUploadImageSuccess
  | IUploadImageFailure;
