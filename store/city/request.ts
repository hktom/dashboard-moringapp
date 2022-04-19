import { queryMethods, mutateMethods } from "../../config/apollo";
import { ICity } from "./action";
import { v4 as uuidv4 } from "uuid";

export const addCityRequest = (data: ICity) => {
  let req = `mutation{
        createCity(input:{
            id: "${uuidv4()}",
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            country:{connect:"${data.country?.id}"}
        }){
            id
            name
            name_fr
            country{
                id
                name
            }
            created_at
        }
    }`;

  return mutateMethods(req);
};

export const updateCityRequest = (data: ICity) => {
  let req = `mutation{
          updateCity(id:"${data.id}", input:{
            name:"${data.name}"
            name_fr:"${data.name_fr}"
            country:{connect:"${data.country?.id}"}
          }){
            id
            name
            name_fr
            country{
                id
                name
            }
            created_at
          }
      }`;

  return mutateMethods(req);
};

export const getCityListRequest = () => {
  let req = `
    {
        cities{
            id
            name
            name_fr
            country{
                id
                name
            }
            created_at
        }

    }`;

  return queryMethods(req);
};

export const getCityRequest = (id:string) => {
  let req = `
    {
        city(id:"${id}"){
            id
            name
            name_fr
            country{
                id
                name
            }
            created_at
        }

    }`;

  return queryMethods(req);
};

export const deleteCityRequest = (data: ICity) => {
  let req = `mutation{
            deleteCity(id:"${data.id}"){
                id
                name
                name_fr
                country{
                    id
                    name
                }
                created_at
            }
        }`;

  return mutateMethods(req);
};
