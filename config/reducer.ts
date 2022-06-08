import { combineReducers } from "@reduxjs/toolkit";
import imageReducer  from "../components/imageUploader/reducer";
import authReducer from "../pages/auth/reducer";
import categoryReducer from "../pages/page/category/reducer";
import cityReducer from "../pages/page/city/reducer";
import conditionReducer from "../pages/page/condition/reducer";
import countryReducer from "../pages/page/country/reducer";
import homeReducer from "../pages/page/home/reducer";
import jobReducer from "../pages/page/job/reducer";
import paymentReducer from "../pages/page/payment/reducer";
import roleReducer from "../pages/page/role/reducer";
import serviceReducer from "../pages/page/service/reducer";
import taskReducer from "../pages/page/task/reducer";
import userReducer from "../pages/page/user/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  category: categoryReducer,
  city: cityReducer,
  country: countryReducer,
  condition: conditionReducer,
  job: jobReducer,
  payment: paymentReducer,
  role: roleReducer,
  service: serviceReducer,
  task: taskReducer,
  user: userReducer,
  image: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
