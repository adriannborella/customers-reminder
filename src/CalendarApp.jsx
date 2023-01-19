import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/";

export default function CalendarApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
  );
}
