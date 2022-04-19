import { queryMethods, mutateMethods } from "../../../config/apollo";
import { IRole } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addRoleRequest = (data: IRole) => {
  let req = `mutation{
        createRole(input:{
            id: "${uuidv4()}",
            name:"${data.name}",
            value:${data.value}
        }){
            id
            name
            value
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateRoleRequest = (data: IRole) => {
  let req = `mutation{
          updateRole(id:"${data.id}", input:{
            name:"${data.name}",
            value:${data.value}
          }){
            id
            name
            value
            created_at
          }
      }`;

  return mutateMethods(req);
};

export const getRoleListRequest = () => {
  let req = `
    {
        roles{
            id
            name
            value
            created_at
        }

    }`;

  return queryMethods(req);
};

export const getRoleRequest = (id: string) => {
  let req = `
    {
        role(id:"${id}"){
            id
            name
            value
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteRoleRequest = (data: IRole) => {
  let req = `mutation{
            deleteRole(id:"${data.id}"){
                id
                name
                value
                created_at
            }
        }`;

  return mutateMethods(req);
};
