import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/reducers";

// const store = configureStore()

const redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("ImIn", () => redux);
