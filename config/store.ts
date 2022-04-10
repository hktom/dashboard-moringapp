// store.ts
import { createStore, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { reducer } from "./reducer";

export interface State {
  tick: string;
}

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });

/*
const persistedReducer = persistReducer(persistConfig, appReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  // appReducer,
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);


export const persister = persistStore(store);
sagaMiddleware.run(rootSaga);
*/