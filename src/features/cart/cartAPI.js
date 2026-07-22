import api from "../../app/axios";

export const getCartAPI = async () => {
    const response = await api.get("/cart");
    return response.data;
};

export const addToCartAPI = async (cartItem) => {
    const response = await api.post("/cart", cartItem);
    return response.data;
};

export const updateCartQtyAPI = async ({ productId, quantity }) => {
    const response = await api.patch(`/cart/${productId}`, {
        quantity,
    });

    return response.data;
};

export const removeCartItemAPI = async (productId) => {
    const response = await api.delete(`/cart/${productId}`);
    return response.data;
};

export const clearCartAPI = async () => {
    const response = await api.delete("/cart");
    return response.data;
};