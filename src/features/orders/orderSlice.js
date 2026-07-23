import { createSlice } from "@reduxjs/toolkit";
import {
    placeOrder,
    myOrders,
    getOrder,
    getOrderById,
    allOrders,
    updateOrderStatus,
} from "./orderThunks";

const initialState = {
    orders: [],
    order: null,

    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "orders",

    initialState,

    reducers: {
        clearOrder(state) {
            state.order = null;
        },

        clearOrderError(state) {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // Place Order
            .addCase(placeOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload.order;
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // My Orders
            .addCase(myOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(myOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.myOrders;
            })
            .addCase(myOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Single Order - Admin
            .addCase(getOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload.order;
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Single Order - User
            .addCase(getOrderById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload.order;
            })
            .addCase(getOrderById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Admin - All Orders 
            .addCase(allOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(allOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload.orders;
            })
            .addCase(allOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Admin - Update Status
            .addCase(updateOrderStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.loading = false;

                state.order = action.payload.order;

                const index = state.orders.findIndex(
                    (order) => order._id === action.payload.order._id
                );

                if (index !== -1) {
                    state.orders[index] = action.payload.order;
                }
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    clearOrder,
    clearOrderError,
} = orderSlice.actions;

export default orderSlice.reducer;