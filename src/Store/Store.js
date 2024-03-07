import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import User from "../Reducers/user";
import getExpense from "../Reducers/getExpense";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ user: User, itemList: getExpense })
);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

// export const store = configureStore({
//   reducer: persistedReducer,
//   // devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

export const persistor = persistStore(store);
