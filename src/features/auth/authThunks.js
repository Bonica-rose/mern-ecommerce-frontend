import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    loginAPI,
    registerAPI,
    logoutAPI,
    fetchCurrentUserAPI,
} from "./authAPI";

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            return await loginAPI(credentials);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            return await registerAPI(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Registration failed"
            );
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            return await logoutAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Logout failed"
            );
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, thunkAPI) => {
        try {
            return await fetchCurrentUserAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch user"
            );
        }
    }
);