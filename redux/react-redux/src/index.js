import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
// redux
import { Provider } from "react-redux";

// index에 store를 연결
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
