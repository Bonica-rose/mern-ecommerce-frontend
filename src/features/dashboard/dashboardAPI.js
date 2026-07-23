import api from "../../app/axios";

export const getDashboardStatsAPI = async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
};

export const generateDescription = async (data) => {
    const response = await api.post(
        "/ai/generate-description",
        data
    );

    return response.data;
};