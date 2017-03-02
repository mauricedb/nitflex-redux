import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AppContainer from "./app-container";

import reducers from "./reducers";
import { login } from "./actions";

//  npm install bootstrap --save
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

if (localStorage.user) {
  try {
    const user = JSON.parse(localStorage.user);
    store.dispatch(login(user));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
