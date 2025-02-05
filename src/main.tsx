import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import QueryClientProviderWrapper from "./lib/query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProviderWrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProviderWrapper>
  </React.StrictMode>
);
