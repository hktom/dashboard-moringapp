import { queryMethods, mutateMethods } from "../../config/apollo";
import { ICondition } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addConditionRequest = (data: ICondition) => {
  let req = `mutation{
        createCondition(input:{
            id: "${uuidv4()}",
            name:"${data.name}"
        }){
            id
            name
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateConditionRequest = (data: ICondition) => {
  let req = `mutation{
          updateCondition(id:"${data.id}", input:{
            name:"${data.name}"
          }){
            id
            name
            created_at
          }
      }`;

  return mutateMethods(req);
};

export const getConditionListRequest = () => {
  let req = `
    {
        Conditions{
            id
            name
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteConditionRequest = (data: ICondition) => {
  let req = `mutation{
            deleteCondition(id:"${data.id}"){
                id
                name
                created_at
            }
        }`;

  return mutateMethods(req);
};
