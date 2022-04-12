import { queryMethods, mutateMethods } from "../../config/apollo";
import { IPayment } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addPaymentRequest = (data: IPayment) => {
  let req = `mutation{
        createPayment(input:{
            id: "${uuidv4()}",
            is_completed:${data.is_completed}
            token:"${data.token}"
            gateway:"${data.gateway}"
            job:{connect:${data.job?.id}}
            user:"{connect:${data.user?.id}}"
        }){
            id
            user{
                id
                email
            }
            job{
                id
            }
            token
            is_completed
            gateway
        }
    }`;

  return mutateMethods(req);
};

export const updatePaymentRequest = (data: IPayment) => {
  let req = `mutation{
          createPayment(id:"${data.id}", input:{
            id: "${uuidv4()}",
            is_completed:${data.is_completed}
            token:"${data.token}"
            gateway:"${data.gateway}"
            job:{connect:${data.job?.id}}
            user:"{connect:${data.user?.id}}"
          }){
            id
            user{
                id
                email
            }
            job{
                id
            }
            token
            is_completed
            gateway
          }
      }`;

  return mutateMethods(req);
};

export const getPaymentListRequest = () => {
  let req = `
    {
        Payments{
            id
            user{
                id
                email
            }
            job{
                id
            }
            token
            is_completed
            gateway
        }

    }`;

  return queryMethods(req);
};

export const deletePaymentRequest = (data: IPayment) => {
  let req = `mutation{
            deletePayment(id:"${data.id}"){
                id
                user{
                    id
                    email
                }
                job{
                    id
                }
                token
                is_completed
                gateway
            }
        }`;

  return mutateMethods(req);
};
