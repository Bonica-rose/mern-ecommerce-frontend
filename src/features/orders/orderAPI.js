import api from "../../app/axios";

export const placeOrderAPI = async (orderData) => {
    const response = await api.post("/orders", orderData);
    return response.data;
};

export const myOrdersAPI = async () => {
    const response = await api.get("/orders/my-orders");
    return response.data;
};

export const getOrderAPI = async (id) => {
    const response = await api.get(`/admin/orders/${id}`);
    return response.data;
};

export const getOrderByIdAPI = async (id) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
};

export const allOrdersAPI = async () => {
    const response = await api.get("/admin/orders");
    return response.data;
};

export const updateOrderStatusAPI = async ({ id, data }) => {
    const response = await api.put(`/admin/orders/${id}`, {
        status: data.status,
        paymentStatus: data.paymentStatus,
    });

    return response.data;
};