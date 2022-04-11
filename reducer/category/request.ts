import { queryMethods, mutateMethods } from "../../config/apollo";
import { ICategory } from "./action";
import { v4 as uuidv4 } from "uuid";

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
            parent:{sync:[${data.parent?.map((value: ICategory) => value.id)}]}
            condition:{connect:${data.condition?.id}}
            service:"{connect:${data.service?.id}}"
        }){
            id
            name
            description
            image
            name_fr
            slug
            slug_fr
            service{
                id
                name
            }
            tasks{
                id
                title
                image
            }
            parent{
                id
                name
            }
            condition{
                id
                name
            }
            created_at
            updated_at
        }
    }`;

  return mutateMethods(req);
};

export const updateCategoryRequest = (data: ICategory) => {
  let req = `mutation{
          updateCategory(id:"${data.id}", input:{
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            description:"${data.description}"
            image:"${data.image}"
            slug:"${data.slug}"
            slug_fr:"${data.slug_fr}"
            parent:{sync:[${data.parent?.map((value: ICategory) => value.id)}]}
            condition:{connect:${data.condition?.id}}
            service:"{connect:${data.service?.id}}"
          }){
            id
            name
            description
            image
            name_fr
            slug
            slug_fr
            service{
                id
                name
            }
            tasks{
                id
                title
                image
            }
            parent{
                id
                name
            }
            condition{
                id
                name
            }
            created_at
            updated_at
          }
      }`;

  return mutateMethods(req);
};

export const getCategoryListRequest = () => {
  let req = `
    {
        categories{
            id
            name
            description
            image
            name_fr
            slug
            slug_fr
            service{
                id
                name
            }
            tasks{
                id
                title
                image
            }
            parent{
                id
                name
            }
            condition{
                id
                name
            }
            created_at
            updated_at
        }

    }`;

  return queryMethods(req);
};

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