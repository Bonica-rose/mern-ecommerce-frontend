import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../features/auth/authSlice';
import userReducer from '../features/users/userSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/orders/orderSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        products: productReducer,
        cart: cartReducer,
        orders: orderReducer

    },
})