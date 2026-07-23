import { createSlice } from "@reduxjs/toolkit";
import {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from "./userThunks";

const initialState = {
    users: [],
    user: null,

    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "users",

    initialState,

    reducers: {
        clearUser(state) {
            state.user = null;
        },

        clearUserError(state) {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // Get Users
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get User
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update User
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;

                state.user = action.payload.user;

                const index = state.users.findIndex(
                    (user) => user._id === action.payload.user._id
                );

                if (index !== -1) {
                    state.users[index] = action.payload.user;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete User
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;

                state.users = state.users.filter(
                    (user) => user._id !== action.payload
                );

                if (state.user?._id === action.payload) {
                    state.user = null;
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    clearUser,
    clearUserError,
} = userSlice.actions;

export default userSlice.reducer;