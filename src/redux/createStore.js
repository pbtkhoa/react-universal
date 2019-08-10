import { createStore, applyMiddleware, compose } from "redux";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import thunk from "redux-thunk";

import recuders from "./reducers";

const composeEnhancer =
  (typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (initialState = {}) => {
  const store = createStore(
    recuders,
    initialState,
    composeEnhancer(applyMiddleware(loadingBarMiddleware(), thunk))
  );
  return store;
};
