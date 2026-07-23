import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardStatsAPI } from "./dashboardAPI";

export const fetchDashboardStats = createAsyncThunk(
    "dashboard/fetchDashboardStats",
    async (_, thunkAPI) => {
        try {
            return await getDashboardStatsAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load dashboard."
            );
        }
    }
);