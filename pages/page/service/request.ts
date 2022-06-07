import { queryMethods, mutateMethods } from "../../../config/apollo";
import { IService } from "./action";
import { v4 as uuidv4 } from "uuid";
var slugify = require("slugify");

export const addServiceRequest = (data: IService) => {
  let req = `mutation{
        createService(input:{
            id: "${uuidv4()}"
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:"${slugify(`${data.name}`)}"
            slug_fr:"${slugify(`${data.name_fr}`)}"
            condition:{connect:"${data.condition?.id}"}
        }){
            id
            name
            name_fr
            slug
            slug_fr
            description
            image
            categories{
              id
              name
            }
            condition{
              id
              name
              value
            }
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateServiceRequest = (data: IService) => {
  let req = `mutation{
          updateService(input:{
            id:"${data.id}", 
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:"${slugify(`${data.name}`)}"
            slug_fr:"${slugify(`${data.name_fr}`)}"
            condition:{connect:"${data.condition?.id}"}
          }){
            id
            name
            name_fr
            slug
            slug_fr
            description
            categories{
              id
              name
            }
            condition{
              id
              name
              value
            }
            image
            created_at
          }
      }`;

  return mutateMethods(req);
};

// export const getServiceListRequest = () => {
//   let req = `
//     {
//         services{
//             id
//             name
//             name_fr
//             slug
//             slug_fr
//             description
//             categories{
//               id
//               name
//             }
//             condition{
//               id
//               name
//               value
//             }
//             image
//             created_at
//         }

//     }`;

//   return queryMethods(req);
// };

// export const getServiceRequest = (id: string) => {
//   let req = `
//     {
//         service(id:"${id}"){
//             id
//             name
//             name_fr
//             slug
//             slug_fr
//             description
//             condition{
//               id
//               name
//               value
//             }
//             image
//             created_at
//         }

//     }`;

//   return queryMethods(req);
// };

export const deleteServiceRequest = (data: IService) => {
  let req = `mutation{
            deleteService(id:"${data.id}"){
                id
                name
                name_fr
                slug
                slug_fr
                description
                condition{
                  id
                  name
                  value
                }
                image
            }
        }`;

  return mutateMethods(req);
};
