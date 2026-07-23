import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute() {
    const { user, isAuthenticated, authChecked } = useSelector(
        (state) => state.auth,
    );

    const location = useLocation();

    // Wait until auth check completes
    if (!authChecked) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    // Not logged in
    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    // Logged in but not an admin
    if (user?.role !== "Admin") {
        return <Navigate to="/" replace />;
    }

    // Admin user
    return <Outlet />;
}

export default AdminRoute;
