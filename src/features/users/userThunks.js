import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getUsersAPI,
    getUserAPI,
    updateUserAPI,
    deleteUserAPI,
} from "./userAPI";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (params, thunkAPI) => {
        try {
            return await getUsersAPI(params);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch users"
            );
        }
    }
);

export const getUser = createAsyncThunk(
    "users/getUser",
    async (id, thunkAPI) => {
        try {
            return await getUserAPI(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch user"
            );
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({ id, userData }, thunkAPI) => {
        try {
            return await updateUserAPI({ id, userData });
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to update user"
            );
        }
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, thunkAPI) => {
        try {
            await deleteUserAPI(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to delete user"
            );
        }
    }
);