import { queryMethods, mutateMethods } from "../../config/apollo";
import { IUser } from "./action";
import { v4 as uuidv4 } from "uuid";

export const updateUserRequest = (data: IUser) => {
  let req = `mutation{
          updateUser(id:"${data.id}", input:{
              first_name:"${data.first_name}",
              last_name:"${data.last_name}",
              avatar: "${data.avatar}",
              street: "${data.street}",
              mobile: "${data.mobile}",
              certificate: "${data.certificate}",
              bio: "${data.bio}",
              zip_code: "${data.zip_code}",
              url: "${data.url}",
              city:"{connect:${data.city?.id}}"
              role:"{connect:${data.role?.id}}"
              condition:"{connect:${data.condition?.id}}"
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

  return mutateMethods(req);
};

export const getUserListRequest = () => {
  let req = `
    {
        users{
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

  return queryMethods(req);
};

export const getUserRequest = (id: string) => {
  let req = `
      {
          user(id:"${id}"){
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

  return queryMethods(req);
};

export const deleteUserRequest = (data: IUser) => {
  let req = `mutation{
            deleteUser(id:"${data.id}"){
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

  return mutateMethods(req);
};
