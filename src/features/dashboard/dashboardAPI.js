import api from "../../app/axios";

export const getDashboardStatsAPI = async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
};