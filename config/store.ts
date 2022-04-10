// store.ts
import { createStore, Store, applyMiddleware } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { appReducer, IRootState, rootReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
// create a makeStore function
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  // rootreducer
  appReducer,
  applyMiddleware(sagaMiddleware)
);
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
sagaMiddleware.run(rootSaga);
