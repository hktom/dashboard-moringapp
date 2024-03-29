import { queryMethods, mutateMethods } from "../../../config/apollo";
import { ICategory } from "./action";
import { v4 as uuidv4 } from "uuid";
// parent:{sync:[${data.parent?.map((value: ICategory) => value.id)}]}

export const addCategoryRequest = (data: ICategory) => {
  let req = `mutation{
        createCategory(input:{
            id: "${uuidv4()}",
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:"${data.slug}"
            slug_fr:"${data.slug_fr}"
            condition:{connect:"${data.condition?.id}"}
            service:{connect:"${data.service?.id}"}
        }){
            id
            name
            name_fr
            image
            condition{
                id
                name
                value
            }
            service{
                id
                name
            }
        }
    }`;

  return mutateMethods(req);
};

export const updateCategoryRequest = (data: ICategory) => {
  let req = `mutation{
          updateCategory(input:{
            id:"${data.id}", 
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:"${data.slug}"
            slug_fr:"${data.slug_fr}"
            condition:{connect:"${data.condition?.id}"}
            service:{connect:"${data.service?.id}"}
          }){
            id
            name
            name_fr
            image
            condition{
                id
                name
                value
            }
            service{
                id
                name
            }        
          }
      }`;


  return mutateMethods(req);
};

// export const getCategoryListRequest = () => {
//   let req = `
//     {
//         categories{
//             id
//             name
//             description
//             image
//             name_fr
//             slug
//             slug_fr
//             service{
//                 id
//                 name
//             }
//             tasks{
//                 id
//                 name
//                 image
//             }
//             parent{
//                 id
//                 name
//             }
//             condition{
//                 id
//                 name
//             }
//             created_at
//             updated_at
//         }

//     }`;

//   return queryMethods(req);
// };

// export const getCategoryRequest = (id: string) => {
//   let req = `
//       {
//           category(id:"${id}"){
//               id
//               name
//               description
//               image
//               name_fr
//               slug
//               slug_fr
//               service{
//                   id
//                   name
//               }
//               tasks{
//                   id
//                   name
//                   image
//               }
//               parent{
//                   id
//                   name
//               }
//               condition{
//                   id
//                   name
//                   value
//               }
//               created_at
//               updated_at
//           }
  
//       }`;

//   return queryMethods(req);
// };

export const deleteCategoryRequest = (data: ICategory) => {
  let req = `mutation{
            deleteCategory(id:"${data.id}"){
                id
                name
                slug
            }
        }`;

  return mutateMethods(req);
};
