import { queryMethods, mutateMethods } from "../../config/apollo";
import { ITask } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addTaskRequest= (data: ITask) => {
  let req = `mutation{
        createTask(input:{
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

export const updateTaskRequest= (data: ITask) => {
  let req = `mutation{
          createTask(id:"${data.id}", input:{
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

export const getTaskListRequest= () => {
  let req = `
    {
        tasks{
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

export const deleteTaskRequest = (data: ITask) => {
  let req = `mutation{
            deleteTask(id:"${data.id}"){
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
