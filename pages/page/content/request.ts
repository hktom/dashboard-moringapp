import { queryMethods, mutateMethods } from "../../../config/apollo";
// import { ICondition } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addContentRequest = (data: any) => {
  let req = `mutation{
        createPage(input:{
            id: "${uuidv4()}",
            title:"${data.title}",
            image:"${data.image}",
            content:"${data.content}",
            label:"${data.label}",
            value:${data.value},
            link:"${data.link}",
        }){
            id
            value
            image
            content
            label
            link
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateContentRequest = (data: any) => {
  let req = `mutation{
          createPage(input:{
              id: "${data.id}",
              title:"${data.title}",
              image:"${data.image}",
              content:"${data.content}",
              label:"${data.label}",
              value:${data.value},
              link:"${data.link}",
          }){
              id
              value
              image
              content
              label
              link
              created_at
          }
      }`;

  return mutateMethods(req);
};


export const deleteContentRequest = (data: any) => {
    let req = `mutation{
              deletePage(id:"${data.id}"){
                  id
              }
          }`;
  
    return mutateMethods(req);
  };