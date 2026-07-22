import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import { fetchCurrentUser } from "../features/auth/authThunks";

const AdminLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);    
    
    return (
        <div className="min-h-screen flex bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
            <Topbar />

            <main className="flex-1 p-6 overflow-auto">
            <Outlet />
            </main>
        </div>
        </div>
    );
}

export default AdminLayout;
