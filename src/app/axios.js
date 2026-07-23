import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {"Content-Type":"application/json"}   
});

// Runs before every request
api.interceptors.request.use(
    (config) => {
        console.log(
            `[${config.method?.toUpperCase()}] ${config.baseURL}${config.url}`
        );

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,

    (error) => {

        if (!error.response) {
            toast.error("Network error. Please check your connection.");
            return Promise.reject(error);
        }

        const { status, data } = error.response;
        const url = error.config?.url;

        // Don't show a toast for the initial auth check
        if (status === 401 && url === "/auth/me") {
            return Promise.reject(error);
        }

        switch (status) {
            case 400:
                toast.error(data.message);
                break;

            case 401:
                toast.error(data?.message || "Unauthorized");
                break;

            case 403:
                toast.error("You don't have permission.");
                break;

            case 409:
                toast.error(data.message);
                break;

            case 429:
                toast.error("Too many requests. Please try again later.");
                break;

            case 500:
                toast.error("Something went wrong. Please try again.");
                break;

            default:
                toast.error(data?.message || "Unexpected error.");
        }

        return Promise.reject(error);
    }
);

export default api;