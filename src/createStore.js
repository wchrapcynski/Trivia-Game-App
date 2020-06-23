import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/index";

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(reducer);