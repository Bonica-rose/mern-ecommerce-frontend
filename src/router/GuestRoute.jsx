import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = ({ children }) => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if (isAuthenticated) {
        return (
        <Navigate
            to={user?.role === "Admin" ? "/admin/dashboard" : "/"}
            replace
        />
        );
    }

    return children;
}

export default GuestRoute;
