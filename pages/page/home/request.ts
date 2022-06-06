import { queryMethods } from "../../../config/apollo";
import {
  REQ_CATEGORY,
  REQ_CITY,
  REQ_CONDITION,
  REQ_COUNTRY,
  REQ_ROLE,
  REQ_SERVICE,
  REQ_TASK,
  REQ_USER,
} from "./constant";

export const getUserProfileRequest = () => {
  const request = `{
    me:me{${REQ_USER}}
    roles:${REQ_ROLE}
    users:users{${REQ_USER}}
    tasks:${REQ_TASK}
    services:${REQ_SERVICE}
    categories:${REQ_CATEGORY}
    cities:${REQ_CITY}
    conditions:${REQ_CONDITION}
    countries:${REQ_COUNTRY}
  }`;

  //   console.log(request);
  return queryMethods(request);
};
