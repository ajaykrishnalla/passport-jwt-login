import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
const intialState = {};
const middlware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  compose(applyMiddleware(...middlware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;
