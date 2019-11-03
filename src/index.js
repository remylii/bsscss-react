import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "reset.css";
import Bss from "./Bss";

ReactDOM.render(
  <Provider store={store}>
    <Bss />
  </Provider>,
  document.getElementById("root")
);

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
