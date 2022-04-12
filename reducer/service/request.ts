import { queryMethods, mutateMethods } from "../../config/apollo";
import { IService } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addServiceRequest = (data: IService) => {
  let req = `mutation{
        createService(input:{
            id: "${uuidv4()}",
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:${data.slug}
            slug_fr:${data.slug_fr}
        }){
            id
            name
            name_fr
            slug
            slug_fr
            description
            image
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateServiceRequest = (data: IService) => {
  let req = `mutation{
          createService(id:"${data.id}", input:{
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:${data.slug}
            slug_fr:${data.slug_fr}
          }){
            id
            name
            name_fr
            slug
            slug_fr
            description
            image
            created_at
          }
      }`;

  return mutateMethods(req);
};

export const getServiceListRequest = () => {
  let req = `
    {
        services{
            id
            name
            name_fr
            slug
            slug_fr
            description
            image
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteServiceRequest = (data: IService) => {
  let req = `mutation{
            deleteService(id:"${data.id}"){
                id
                name
                name_fr
                slug
                slug_fr
                description
                image
            }
        }`;

  return mutateMethods(req);
};
