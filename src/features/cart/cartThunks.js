import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCartAPI,
    addToCartAPI,
    updateCartQtyAPI,
    removeCartItemAPI,
    clearCartAPI,
} from "./cartAPI";

export const getCart = createAsyncThunk(
    "cart/getCart",
    async (_, thunkAPI) => {
        try {
            return await getCartAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch cart"
            );
        }
    }
);

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (cartItem, thunkAPI) => {
        try {
            return await addToCartAPI(cartItem);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to add item"
            );
        }
    }
);

export const updateCartQty = createAsyncThunk(
    "cart/updateCartQty",
    async ({ productId, quantity }, thunkAPI) => {
        try {
            return await updateCartQtyAPI({ productId, quantity });
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to update quantity"
            );
        }
    }
);

export const removeCartItem = createAsyncThunk(
    "cart/removeCartItem",
    async (productId, thunkAPI) => {
        try {
            await removeCartItemAPI(productId);
            return productId;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to remove item"
            );
        }
    }
);

export const clearCart = createAsyncThunk(
    "cart/clearCart",
    async (_, thunkAPI) => {
        try {
            await clearCartAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to clear cart"
            );
        }
    }
);