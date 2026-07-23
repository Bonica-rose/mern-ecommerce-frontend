import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMenu } from "react-icons/io5";

const Topbar = ({ setSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await dispatch(logout()).unwrap();

      toast.success("Goodbye!");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-300 bg-white px-4 md:px-6">
      <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
        <IoMenu size={28} />
      </button>

      <div className="ml-auto flex items-center gap-4">
        <span className="font-medium">{user?.name}</span>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
