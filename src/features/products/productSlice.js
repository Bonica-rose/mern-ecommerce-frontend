import { createSlice } from "@reduxjs/toolkit";
import {
    getProducts,
    getProductCategories,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} from "./productThunks";

const initialState = {
    products: [],
    product: null,
    categories: [],

    total: 0,
    page: 1,
    pages: 1,
    limit: 12,

    filters: {
        search: "",
        category: "",
        sort: "newest",
        page: 1,
        limit: 12,
    },

    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        setSearch(state, action) {
            state.filters.search = action.payload;
            state.filters.page = 1;
        },

        setCategory(state, action) {
            state.filters.category = action.payload;
            state.filters.page = 1;
        },

        setSort(state, action) {
            state.filters.sort = action.payload;
        },

        setPage(state, action) {
            state.filters.page = action.payload;
        },

        clearFilters(state) {
            state.filters = {
                search: "",
                category: "",
                sort: "newest",
                page: 1,
                limit: 12,
            };
        },

        clearProduct(state) {
            state.product = null;
        },

        clearProductError(state) {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // Get Products
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
                // state.page = action.payload.page;
                // state.pages = action.payload.pages;
                // state.limit = action.payload.limit;
                state.page = action.payload.currentPage;
                state.pages = action.payload.totalPages;
                state.total = action.payload.totalProducts;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Product Categories
            .addCase(getProductCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.categories;
            })
            .addCase(getProductCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Product
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.product;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Create Product
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.unshift(action.payload.product);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Product
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;

                const index = state.products.findIndex(
                    (product) => product._id === action.payload.product._id
                );

                if (index !== -1) {
                    state.products[index] = action.payload.product;
                }

                state.product = action.payload.product;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Product
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;

                state.products = state.products.filter(
                    (product) => product._id !== action.payload
                );
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    setSearch,
    setCategory,
    setSort,
    setPage,
    clearFilters,
    clearProduct,
    clearProductError,
} = productSlice.actions;

export default productSlice.reducer;