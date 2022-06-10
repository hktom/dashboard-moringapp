import { queryMethods, mutateMethods } from "../../../config/apollo";
// import { ICondition } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addForumRequest = (data: any) => {
  let req = `mutation{
        createQuestion(input:{
            id: "${uuidv4()}",
            image:"${data.image}",
            content:"${data.content}",
            user:{connect:{id:"${data.userId}"}}
        }){
            id
            image
            content
            replies{
                id
                content
                image
                user{
                    id
                    first_name
                    last_name
                }
            }
            like{
                id
                user{
                    id
                    first_name
                    last_name
                }
            }
            user{
                id
                first_name
                last_name
                avatar
            }
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const addReplyRequest = (data: any) => {
  let req = `mutation{
          createReply(input:{
              id: "${uuidv4()}",
              image:"${data.image}",
              content:"${data.content}",
              user:{connect:{id:"${data.userId}"}}
              question:{connect:{id:"${data.questionId}"}}
          }){
              id
              image
              content
              like{
                  id
                  user{
                      id
                      first_name
                      last_name
                  }
              }
              user{
                  id
                  first_name
                  last_name
                  avatar
              }
              created_at
          }
      }`;

  return mutateMethods(req);
};

export const deleteForumRequest = (data: any) => {
  let req = `mutation{
          deleteQuestion(id:"${data.id}"){
              id
          }
      }`;

  return mutateMethods(req);
};

export const deleteReplyRequest = (data: any) => {
  let req = `mutation{
            deleteReply(id:"${data.id}"){
                id
            }
        }`;

  return mutateMethods(req);
};
