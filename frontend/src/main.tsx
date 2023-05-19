import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import Router from "routes/Router";
import store from "store/store";
import { ThemeProvider } from "theme/ThemeProvider";

import "./i18n/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
