import { queryMethods } from "../../../config/apollo";
import {
  REQ_CATEGORY,
  REQ_CITY,
  REQ_CONDITION,
  REQ_CONTENT,
  REQ_COUNTRY,
  REQ_QUESTION,
  REQ_ROLE,
  REQ_ROOM,
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
    pages:${REQ_CONTENT}
    questions:${REQ_QUESTION}
  }`;
  
  // rooms:${REQ_ROOM}
  //   console.log(request);
  return queryMethods(request);
};
