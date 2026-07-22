import { NavLink } from "react-router-dom";

const menuItems = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
    },
    {
        name: "Products",
        path: "/admin/products",
    },
    {
        name: "Users",
        path: "/admin/users",
    },
    {
        name: "Orders",
        path: "/admin/orders",
    },
];

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white border-r">
        <div className="p-5 text-xl font-bold">Admin Panel</div>

        <nav className="flex flex-col">
            {menuItems.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                `px-5 py-3 hover:bg-gray-100 ${
                    isActive ? "bg-blue-100 text-blue-600 font-semibold" : ""
                }`
                }
            >
                {item.name}
            </NavLink>
            ))}
        </nav>
        </aside>
    );
}

export default Sidebar;
