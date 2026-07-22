import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

//public
const HomePage = lazy(() => import("../pages/Public/Home"));
import LoginPage from "../pages/Public/Login";
import RegisterPage from "../pages/Public/Register";
const ProductsPage = lazy(() => import("../pages/Public/Products"));
import ProductDetailsPage from "../pages/Public/ProductDetails";
const CartPage = lazy(() => import("../pages/Public/Cart"));

//user
import CheckoutPage from "../pages/User/Checkout";
import MyOrdersPage from "../pages/User/MyOrders";
import ProfilePage from "../pages/User/Profile";

//admin 
const DashboardPage = lazy(() => import("../pages/Admin/Dashboard"));
import AdminProductsPage from "../pages/Admin/Products";
import UsersPage from "../pages/Admin/Users";
import OrdersPage from "../pages/Admin/Orders";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
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
        {
            path: "/checkout",
            element: <CheckoutPage />,
        },
        {
            path: "/my-orders",
            element: <MyOrdersPage />,
        },
        {
            path: "/profile",
            element: <ProfilePage />,
        },
        ],
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
        {
            path: "dashboard",
            element: <DashboardPage />,
        },
        {
            path: "products",
            element: <AdminProductsPage />,
        },
        {
            path: "users",
            element: <UsersPage />,
        },
        {
            path: "orders",
            element: <OrdersPage />,
        },
        ],
    },
]);
