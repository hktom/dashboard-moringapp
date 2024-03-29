import { queryMethods, mutateMethods } from "../../../config/apollo";
import { ICountry } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addCountryRequest = (data: ICountry) => {
  let req = `mutation{
        createCountry(input:{
            id: "${uuidv4()}",
            name:"${data.name}"
            name_fr:"${data.name_fr}"
        }){
            id
            name
            name_fr
            cities{
                id
                name
            }
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateCountryRequest = (data: ICountry) => {
  let req = `mutation{
          updateCountry(input:{
            id:"${data.id}", 
            name:"${data.name}"
            name_fr:"${data.name_fr}"
          }){
            id
            name
            name_fr
            cities{
                id
                name
            }
            created_at
          }
      }`;

  return mutateMethods(req);
};

export const getCountryListRequest = () => {
  let req = `
    {
        countries{
            id
            name
            name_fr
            cities{
                id
                name
            }
            created_at
        }

    }`;

  return queryMethods(req);
};

export const getCountryRequest = (id:string) => {
  let req = `
    {
        country(id:"${id}"){
            id
            name
            name_fr
            cities{
                id
                name
            }
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteCountryRequest = (data: ICountry) => {
  let req = `mutation{
            deleteCountry(id:"${data.id}"){
                id
               name
            }
        }`;

  return mutateMethods(req);
};
