import { Action } from "redux";
import { GET_LIST_VIDEO } from "./constants";

export interface ISubscriptionInsightOrderActionFail
  extends Action<"feelin/Home/SUBSCRIPTION_INSIGHT_ORDER_UPDATE_FAIL"> {
  error: any;
}
export const subscriptionInsightOrderActionFail = (
  error: any
): ISubscriptionInsightOrderActionFail => ({
  type: SUBSCRIPTION_INSIGHT_ORDER_UPDATE_FAIL,
  error,
});

export type IHomeActions = ISubscriptionInsightOrderActionFail;
// | IUpdateCreditsAction
