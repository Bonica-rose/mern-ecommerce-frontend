import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "./ProtectedRoute";;
import AdminRoute from "./AdminRoute";
import GuestRoute from "./GuestRoute";

//public
const HomePage = lazy(() => import("../pages/Public/Home"));
import LoginPage from "../pages/Public/Login";
import RegisterPage from "../pages/Public/Register";
const ProductsPage = lazy(() => import("../pages/Public/Products"));
import ProductDetailsPage from "../pages/Public/ProductDetail";
const CartPage = lazy(() => import("../pages/Public/Cart"));

import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

//user
import CheckoutPage from "../pages/User/Checkout";
import OrderSuccessPage from "../pages/User/OrderSuccess";
import MyOrdersPage from "../pages/User/MyOrders";
import OrderDetailsPage from "../pages/User/OrderDetails";
import ProfilePage from "../pages/User/Profile";

//admin
const DashboardPage = lazy(() => import("../pages/Admin/Dashboard"));
import ProductListPage from "../pages/Admin/products/ProductList";
import AddProduct from "../pages/Admin/products/AddProduct";
import EditProduct from "../pages/Admin/products/EditProduct";
import UserListPage from "../pages/Admin/UserList";
import OrderListPage from "../pages/Admin/OrderList";
import OrderEditPage from "../pages/Admin/OrderEdit";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/login",
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        ),
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      // Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/checkout",
            element: <CheckoutPage />,
          },
          {
            path: "/order-success",
            element: <OrderSuccessPage />,
          },
          {
            path: "/my-orders",
            element: <MyOrdersPage />,
          },
          {
            path: "/orders/:id",
            element: <OrderDetailsPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "products",
            children: [
              {
                index: true,
                element: <ProductListPage />,
              },
              {
                path: "add",
                element: <AddProduct />,
              },
              {
                path: ":id/edit",
                element: <EditProduct />,
              },
            ],
          },
          {
            path: "users",
            element: <UserListPage />,
          },
          {
            path: "orders",
            element: <OrderListPage />,
          },
          {
            path: "orders/:id/edit",
            element: <OrderEditPage />,
          },
        ],
      },
    ],
  },
]);
