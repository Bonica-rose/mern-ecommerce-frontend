import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboardStats } from "./dashboardThunks";

const initialState = {
    stats: {
        totalProducts: 0,
        totalUsers: 0,
        totalOrders: 0,
        pendingOrders: 0,
        deliveredOrders: 0,
        paidOrders: 0,
    },
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchDashboardStats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchDashboardStats.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload.data;
            })

            .addCase(fetchDashboardStats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default dashboardSlice.reducer;