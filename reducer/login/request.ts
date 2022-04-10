import { mutateMethods } from "../../config/apollo";
import { ILoginState } from "./reducer";

export const loginUserRequest = (data: ILoginState) => {
  const request = `mutation{
        login(email:"${data.email}",password:"${data.password}"){
            token
        }
    }`;

  return mutateMethods(request);
};
