import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//set up store and provider and middleware

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import logger from "redux-logger";
//create store and middleware

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
