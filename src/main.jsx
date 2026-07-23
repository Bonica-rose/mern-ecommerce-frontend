import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./App";

import PageLoader from "./router/loaders/PageLoader";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<PageLoader />}>
      <App />
    </Suspense>
  </Provider>,
);
