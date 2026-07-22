import { createSlice } from "@reduxjs/toolkit";
import {
    getCart,
    addToCart,
    updateCartQty,
    removeCartItem,
    clearCart,
} from "./cartThunks";

const initialState = {
    items: [],
    totalQty: 0,
    totalAmount: 0,

    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        clearCartError(state) {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // Get Cart
            .addCase(getCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.totalQty = action.payload.totalQty;
                state.totalAmount = action.payload.totalAmount;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add To Cart
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.totalQty = action.payload.totalQty;
                state.totalAmount = action.payload.totalAmount;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Quantity
            .addCase(updateCartQty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartQty.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.totalQty = action.payload.totalQty;
                state.totalAmount = action.payload.totalAmount;
            })
            .addCase(updateCartQty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Remove Item
            .addCase(removeCartItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.loading = false;

                state.items = state.items.filter(
                    (item) => item.product._id !== action.payload
                );

                state.totalQty = state.items.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                );

                state.totalAmount = state.items.reduce(
                    (sum, item) => sum + item.quantity * item.price,
                    0
                );
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Clear Cart
            .addCase(clearCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(clearCart.fulfilled, (state) => {
                state.loading = false;
                state.items = [];
                state.totalQty = 0;
                state.totalAmount = 0;
            })
            .addCase(clearCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearCartError } = cartSlice.actions;

export default cartSlice.reducer;