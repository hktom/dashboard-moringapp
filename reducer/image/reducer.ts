import { ImageActions } from "./actions";
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from "./constants";

export interface IImageState {
  image: string;
  error: string;
  loading: boolean;
}

export const initialState: IImageState = {
  image: "",
  error: "",
  loading: false,
};

export const imageReducer = (
  state = initialState,
  action: ImageActions
): IImageState => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.data,
        loading: false,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        image: "",
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
