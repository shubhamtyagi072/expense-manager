import { createStore, combineReducers, applyMiddleware } from "redux";
import User from "../Reducers/user";
import setExpense from "../Reducers/setExpense";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ user: User, itemList: setExpense }),
  applyMiddleware(thunk)
);

export default store;
