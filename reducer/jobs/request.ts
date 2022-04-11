import { queryMethods, mutateMethods } from "../../config/apollo";
import { IJob } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addJobRequest = (data: IJob) => {
  let req = `mutation{
        createJob(input:{
            id: "${uuidv4()}",
            is_completed:"${data.is_completed}"
            price_by_hour:"${data.price_by_hour}"
            total_hours:"${data.total_hours}"
            street:"${data.street}"
            the_date:"${data.the_date}"
            the_time:"${data.the_time}"
            description:"${data.description}"
            payment_due_date:"${data.payment_due_date}"
            task:{connect:${data.task?.id}}
            city:{connect:${data.city?.id}}
            condition:{connect:${data.condition?.id}}
            user:"{connect:${data.user?.id}}"
        }){
            id
            is_completed
            price_by_hour
            total_hours
            street
            the_date
            the_time
            description
            payment_due_date
            task{
                id
                title
            }
            city{
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

        }
    }`;

  return mutateMethods(req);
};

export const updateJobRequest = (data: IJob) => {
  let req = `mutation{
          updateJob(id:"${data.id}", input:{
            is_completed:"${data.is_completed}"
            price_by_hour:"${data.price_by_hour}"
            total_hours:"${data.total_hours}"
            street:"${data.street}"
            the_date:"${data.the_date}"
            the_time:"${data.the_time}"
            description:"${data.description}"
            payment_due_date:"${data.payment_due_date}"
            task:{connect:${data.task?.id}}
            city:{connect:${data.city?.id}}
            condition:{connect:${data.condition?.id}}
            user:"{connect:${data.user?.id}}"
          }){
            id
            is_completed
            price_by_hour
            total_hours
            street
            the_date
            the_time
            description
            payment_due_date
            task{
                id
                title
            }
            city{
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
          }
      }`;

  return mutateMethods(req);
};

export const getJobListRequest = () => {
  let req = `
    {
        Jobs{
            id
            is_completed
            price_by_hour
            total_hours
            street
            the_date
            the_time
            description
            payment_due_date
            task{
                id
                title
            }
            city{
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
        }

    }`;

  return queryMethods(req);
};

export const deleteJobRequest = (data: IJob) => {
  let req = `mutation{
            deleteJob(id:"${data.id}"){
                id
                is_completed
                price_by_hour
                total_hours
                street
                the_date
                the_time
                description
                payment_due_date
                task{
                    id
                    title
                }
                city{
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
            }
        }`;

  return mutateMethods(req);
};
