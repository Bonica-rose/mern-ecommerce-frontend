import api from "../../app/axios";

export const getUsersAPI = async (params) => {
    const response = await api.get("/users", { params });
    return response.data;
};

export const getUserAPI = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const updateUserAPI = async ({ id, userData }) => {
    const response = await api.patch(`/users/${id}`, userData);
    return response.data;
};

export const deleteUserAPI = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
};