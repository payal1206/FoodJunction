import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Lists from "./Component/Lists";
import Homepage from "./Component/homepage";
import AddRestaurant from "./Component/AddRestaurant";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/list",
    element: <Lists />
  },
  {
    path: "/addRestaurant",
    element: <AddRestaurant />
  }
]);
root.render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>
  </Provider>
);
