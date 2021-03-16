import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./AppNavigation/MainNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
