import { userInfo } from "os";
import { IHomeActions } from "./actions";
import { IListVideo } from "./constants";

export interface IHomeState {
  listVideo?: IListVideo[];
  loadingVideo: boolean;
  loadingClientProfile: boolean;
  clientProfile?: any;
  clientProfileError: string;
  clientSelectedOrder: number;
  loadingInsightOrderUpdate: boolean;
  insightOrder: any;
  benchmark: any;
  search: string | undefined;
}

export const initialState = {
  loadingVideo: false,
  listVideo: [],
  loadingClientProfile: false,
  clientProfile: {
    orders: undefined,
    user: undefined,
    admin: undefined,
    company: {},
    phoneNumber: "",
  },
  clientProfileError: "",
  clientSelectedOrder: 0,
  loadingInsightOrderUpdate: false,
  insightOrder: [],
  benchmark: null,
  search: undefined,
};

const filterOrder = (orders: any) => {
  const tab: Array<any> = [];
  return orders.filter((order: any) => {
    if (!tab.includes(order.id)) {
      tab.push(order.id);
      return order;
    }
  });
};

export const homeReducer = (
  state: IHomeState = initialState,
  action: IHomeActions
): IHomeState => {
  switch (action.type) {
    case SET_CLIENT_SELECTED_ORDER:
      return {
        ...state,
        clientSelectedOrder: action.data.clientSelectedOrder,
      };

    default:
      return state;
  }
};
