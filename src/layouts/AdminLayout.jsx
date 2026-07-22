import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminLayout = () => {
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
