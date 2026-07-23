import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

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

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40
        w-64 bg-white border-r border-gray-300
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

        lg:relative
        lg:translate-x-0
        lg:flex
        lg:flex-col
        lg:shrink-0
      `}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-300">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
          <IoClose size={24} />
        </button>
      </div>

      <nav className="flex-1 py-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `block px-5 py-3 transition-colors
              ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
