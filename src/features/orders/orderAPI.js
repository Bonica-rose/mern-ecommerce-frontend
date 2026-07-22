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
    const response = await api.get(`/orders/${id}`);
    return response.data;
};

export const allOrdersAPI = async () => {
    const response = await api.get("/orders");
    return response.data;
};

export const updateOrderStatusAPI = async ({ id, orderStatus }) => {
    const response = await api.patch(`/orders/${id}`, {
        orderStatus,
    });

    return response.data;
};