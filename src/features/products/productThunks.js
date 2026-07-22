import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getProductsAPI,
    getProductAPI,
    createProductAPI,
    updateProductAPI,
    deleteProductAPI,
} from "./productAPI";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (params, thunkAPI) => {
        try {
            return await getProductsAPI(params);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch products"
            );
        }
    }
);

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (id, thunkAPI) => {
        try {
            return await getProductAPI(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch product"
            );
        }
    }
);

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (productData, thunkAPI) => {
        try {
            return await createProductAPI(productData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to create product"
            );
        }
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ id, productData }, thunkAPI) => {
        try {
            return await updateProductAPI({ id, productData });
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to update product"
            );
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id, thunkAPI) => {
        try {
            await deleteProductAPI(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to delete product"
            );
        }
    }
);