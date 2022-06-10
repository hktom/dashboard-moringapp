import { queryMethods, mutateMethods } from "../../../config/apollo";
// import { ICondition } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addRoomRequest = (data: any) => {
  let req = `mutation{
        createRoom(input:{
            id: "${uuidv4()}",
            from: {connect: {id: "${data.from}"}},
            to: {connect: {id: "${data.to}"}},
        }){
            id
            created_at
            delete_from
            delete_to
            chats{
                id
                content
                image
                user{
                    id
                    name
                    first_name
                    last_name
                }
            }
            user_from{
                id
                avatar
                first_name
                last_name
            }
            user_to{
                id
                avatar
                first_name
                last_name
            }
        }
    }`;

  return mutateMethods(req);
};

export const addChatRequest = (data: any) => {
  let req = `mutation{
          createChat(input:{
              id: "${uuidv4()}",
              content:"${data.content}",
                image:"${data.image}",
                room: {connect: {id: "${data.room}"}},
              user: {connect: {id: "${data.to}"}},
          }){
              id
              content
              image
              user{
                  id
                  first_name
                  last_name
                  avatar
              }
              room{
                  id
              }
          }
      }`;

  return mutateMethods(req);
};

export const deleteRoomRequest = (data: any) => {
  let req = `mutation{
              deleteRoom(id:"${data.id}"){
                  id
              }
          }`;

  return mutateMethods(req);
};

export const deleteChatRequest = (data: any) => {
  let req = `mutation{
              deleteChat(id:"${data.id}"){
                  id
              }
          }`;

  return mutateMethods(req);
};
