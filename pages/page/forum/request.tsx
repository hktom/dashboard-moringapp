import { queryMethods, mutateMethods } from "../../../config/apollo";
// import { ICondition } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addForumRequest = (data: any) => {
  let req = `mutation{
        createQuestion(input:{
            id: "${uuidv4()}",
            image:"${data.image}",
            content:"${data.content}",
            condition: {connect:"${data.condition.id}"}
            user:{connect:"${data.user.id}"}
            ${data.category ? `category:{connect:"${data.category.id}"}` : ""}
            ${data.service ? `service:{connect:"${data.service.id}"}` : ""}
        }){
            id
            image
            content
            condition{
                id
                name
                value
            }
            category{
                id
                name
            }
            service{
                id
                name
            }
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
            likes{
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

export const updateForumRequest = (data: any) => {
  let req = `mutation{
          updateQuestion(input:{
              id: "${data.id}",
              condition: {connect:"${data.condition.id}"}
          }){
              id
              image
              content
              condition{
                  id
                  name
                  value
              }
              category{
                  id
                  name
              }
              service{
                  id
                  name
              }
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
              user:{connect:"${data.user?.id}"}
              question:{connect:"${data.question?.id}"}
          }){
              id
              image
              content
              likes{
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
//   console.log(req);
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

export const deleteQuestionRequest = (data: any) => {
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
