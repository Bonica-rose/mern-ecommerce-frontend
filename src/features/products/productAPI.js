import api from "../../app/axios";

export const getProductsAPI = async (params) => {
    const response = await api.get("/products", { params });
    return response.data;
};

export const getProductCategoriesAPI = async (params) => {
    const response = await api.get("/products/categories");
    return response.data;
};

export const getProductAPI = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};

export const createProductAPI = async (productData) => {
    const response = await api.post("/products", productData, {
    headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const updateProductAPI = async ({ id, productData }) => {
    const response = await api.put(`/products/${id}`, productData, {
    headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const deleteProductAPI = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
};