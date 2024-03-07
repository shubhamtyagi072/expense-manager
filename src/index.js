import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
