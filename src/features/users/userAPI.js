import api from "../../app/axios";

export const getUsersAPI = async (params) => {
    const response = await api.get("admin/users", { params });
    return response.data;
};

export const getUserAPI = async (id) => {
    const response = await api.get(`admin/users/${id}`);
    return response.data;
};

export const updateUserAPI = async ({ id, userData }) => {
    const response = await api.patch(`admin/users/${id}`, userData);
    return response.data;
};

export const deleteUserAPI = async (id) => {
    const response = await api.delete(`admin/users/${id}`);
    return response.data;
};