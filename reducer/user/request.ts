import { queryMethods, mutateMethods } from "../../config/apollo";
import { IUser } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addUserRequest= (data: IUser) => {
  let req = `mutation{
        createUser(input:{
            id: "${uuidv4()}",
            title:"${data.title}"
            description:"${data.description}"
            image:"${data.image}"
            can_be_booked:${data.can_be_booked}
            can_be_urgent:${data.can_be_urgent}
            accept_offer:${data.accept_offer}
            min_price:${data.min_price}
            category:{connect:${data.category?.id}}
            condition:{connect:${data.condition?.id}}
            user:"{connect:${data.user?.id}}"
        }){
            id
            title
            description
            image
            can_be_booked
            can_be_urgent
            accept_offer
            min_price
            category{
                id
                name
            }
            condition{
                id
                name
            }
            user{
                id
                email
            }
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateUserRequest= (data: IUser) => {
  let req = `mutation{
          createUser(id:"${data.id}", input:{
              title:"${data.title}"
              description:"${data.description}"
              image:"${data.image}"
              can_be_booked:${data.can_be_booked}
              can_be_urgent:${data.can_be_urgent}
              accept_offer:${data.accept_offer}
              min_price:${data.min_price}
              category:{connect:${data.category?.id}}
              condition:{connect:${data.condition?.id}}
              user:"{connect:${data.user?.id}}"
          }){
              id
              title
              description
              image
              can_be_booked
              can_be_urgent
              accept_offer
              min_price
              category{
                  id
                  name
              }
              condition{
                  id
                  name
              }
              user{
                  id
                  email
              }
              created_at
          }
      }`;

  return mutateMethods(req);
};

export const getUserListRequest= () => {
  let req = `
    {
        Users{
            id
            title
            description
            image
            can_be_booked
            can_be_urgent
            accept_offer
            min_price
            category{
                id
                name
            }
            condition{
                id
                name
            }
            user{
                id
                email
            }
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteUserRequest = (data: IUser) => {
  let req = `mutation{
            deleteUser(id:"${data.id}"){
                id
                title
                description
                image
                can_be_booked
                can_be_urgent
                accept_offer
                min_price
                category{
                    id
                    name
                }
                condition{
                    id
                    name
                }
                user{
                    id
                    email
                }
                created_at
            }
        }`;

  return mutateMethods(req);
};
