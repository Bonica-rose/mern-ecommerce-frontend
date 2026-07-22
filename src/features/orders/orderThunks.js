import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    placeOrderAPI,
    myOrdersAPI,
    getOrderAPI,
    allOrdersAPI,
    updateOrderStatusAPI,
} from "./orderAPI";

export const placeOrder = createAsyncThunk(
    "orders/placeOrder",
    async (orderData, thunkAPI) => {
        try {
            return await placeOrderAPI(orderData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to place order"
            );
        }
    }
);

export const myOrders = createAsyncThunk(
    "orders/myOrders",
    async (_, thunkAPI) => {
        try {
            return await myOrdersAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch orders"
            );
        }
    }
);

export const getOrder = createAsyncThunk(
    "orders/getOrder",
    async (id, thunkAPI) => {
        try {
            return await getOrderAPI(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch order"
            );
        }
    }
);

export const allOrders = createAsyncThunk(
    "orders/allOrders",
    async (_, thunkAPI) => {
        try {
            return await allOrdersAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch all orders"
            );
        }
    }
);

export const updateOrderStatus = createAsyncThunk(
    "orders/updateOrderStatus",
    async ({ id, orderStatus }, thunkAPI) => {
        try {
            return await updateOrderStatusAPI({ id, orderStatus });
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to update order status"
            );
        }
    }
);