import axios from "axios";
import toast from "react-hot-toast";
import { logout } from "../features/auth/authThunks";

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

    async (error) => {

        if (!error.response) {
            toast.error("Network error. Please check your connection.");
            return Promise.reject(error);
        }

        switch (error.response.status) {

            case 400:
                toast.error(error.response.data.message);
                break;

            case 401:
                // Refresh token or (logout + redirect)
                toast.error("Session expired. Please log in again.");
                
                // logout user
                store.dispatch(logout());

                // redirect
                window.location.href = "/login";
                break;

            case 403:
                toast.error("You don't have permission.");
                break;

            case 404:
                toast.error("Resource not found.");
                break;

            case 409:
                toast.error(error.response.data.message);
                break;

            case 422:
                // Handle validation errors in the form instead of a toast
                break;

            case 429:
                toast.error("Too many requests. Please try again later.");
                break;

            case 500:
                toast.error("Something went wrong. Please try again.");
                break;

            default:
                toast.error(error.response.data?.message || "Unexpected error.");
        }

        return Promise.reject(error);
    }
);

export default api;