import { queryMethods, mutateMethods } from "../../../config/apollo";
import { IUser } from "./action";
import { v4 as uuidv4 } from "uuid";

export const updateUserRequest = (data: IUser) => {
  let req = `mutation{
          updateUser(input:{
              id:"${data.id}", 
              ${data.first_name ? `first_name:"${data.first_name}"` : ""}
              ${data.last_name ? `last_name:"${data.last_name}"` : ""}
              ${data.avatar ? `avatar:"${data.avatar}"` : ""}
              ${data.street ? `street:"${data.street}"` : ""}
              ${data.mobile ? `mobile:"${data.mobile}"` : ""}
              ${data.certificate ? `certificate:"${data.certificate}"` : ""}
              ${data.bio ? `bio:"${data.bio}"` : ""}
              ${data.zip_code ? `zip_code:"${data.zip_code}"` : ""}
              ${data.url ? `url:"${data.url}"` : ""}
              ${data.city?.id ? `city:{connect:"${data.city?.id}"}` : ""}
              ${data.role?.id ? `role:{connect:"${data.role?.id}"}` : ""}
              ${
                data.condition?.id
                  ? `condition:{connect:"${data.condition?.id}"}`
                  : ""
              }
              
          }){
            id
            first_name
            last_name
            email
            avatar
            street
            mobile
            certificate
            bio
            zip_code
            url
            role{
                id
                name
                value
            }
            condition{
                id
                name
                value
            }
            city{
                id
                name
                country{
                    id
                    name
                }
            }
            created_at
            updated_at
          }
      }`;
console.log('req', req);
  return mutateMethods(req);
};

export const deleteUserRequest = (data: IUser) => {
  let req = `mutation{
            deleteUser(id:"${data.id}"){
                id
        }`;

  return mutateMethods(req);
};
