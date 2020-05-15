import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//set up store and provider and middleware

import { Provider } from "react-redux";
import { createStore, applymidleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

//create store and middleware

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
