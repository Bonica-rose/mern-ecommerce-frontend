import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () =>{
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    const location = useLocation();

    // Wait until authentication status is known
    if (loading) {
        return (
        <div className="flex min-h-screen items-center justify-center">
            Loading...
        </div>
        );
    }

    // Not logged in → Redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    // Logged in
    return <Outlet />;
}

export default ProtectedRoute;
