import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import createSafaMiddleware from "redux-saga";

import { rootSaga } from "./root.saga";

import { rootReducers } from "./root.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSafaMiddleware();

const middleware = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
  //thunk,
].filter(Boolean);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

const PersistReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(PersistReducer, undefined, composedEnhancers);
// export const store = createStore(rootReducers, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
