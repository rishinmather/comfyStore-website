import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Cart,
  Checkout,
  Error,
  Homelayout,
  Landing,
  Login,
  About,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./Pages/Index";

// Actions
import { action as registerAction } from "./Pages/Register";
import { action as loginpageaction } from "./Pages/Login";
import { store } from "./Store/store.js";
import { action as checkoutAction } from "./Components/CheckoutForm.jsx";
// Loaders
import { loader as ordersLoader } from "./Pages/Orders.jsx";
import { loader as landingloader } from "./Pages/Landing";
import { loader as singlepageLoader } from "./Pages/SingleProduct";
import { loader as productsLoader } from "./Pages/Products";
import { loader as checkoutLoader } from "./Pages/Checkout.jsx";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          loader: landingloader(queryCLient),
          element: <Landing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
        {
          path: "Checkout",
          loader: checkoutLoader(store),
          action: checkoutAction(store, queryCLient),
          element: <Checkout />,
        },
        {
          path: "orders",
          loader: ordersLoader(store, queryCLient),
          element: <Orders />,
        },
        {
          path: "products",
          loader: productsLoader(queryCLient),
          element: <Products />,
        },
        {
          path: "products/:id",
          loader: singlepageLoader(queryCLient),
          element: <SingleProduct />,
        },
      ],
    },

    {
      path: "/login",
      action: loginpageaction(store),
      element: <Login />,
    },
    {
      path: "register",
      action: registerAction,
      element: <Register />,
    },
  ]);

  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
