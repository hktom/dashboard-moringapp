import { ImageActions } from "./actions";
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from "./constants";

export interface IImageState {
  image: string | undefined;
  error: string | undefined;
  loading: boolean | undefined;
}

export const initialState: IImageState = {
  image: undefined,
  error: undefined,
  loading: undefined,
};

export const imageReducer = (
  state = initialState,
  action: ImageActions
): IImageState => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        image: undefined,
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
        image: undefined,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
