import { StrictMode, Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import PageLoader from "./components/loaders/PageLoader";
import { router } from "./router/router";
import { store } from "./app/store";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
