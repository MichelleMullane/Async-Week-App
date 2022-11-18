import { legacy_createStore as createStore, applyMiddleware } from "redux";
import auth from "./redux/users";
import reducer from "./redux";
import usersReducer from "./redux/users";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  items: reducer,
  users: usersReducer,
  auth,
});

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
