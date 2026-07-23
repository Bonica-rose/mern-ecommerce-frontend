import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { logout } from "../features/auth/authThunks";

const Navbar = () =>{
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { totalQty } = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    closeMenu();
  };

  const navClass = ({ isActive }) =>
    isActive ? "text-sky-300 font-semibold" : "hover:text-sky-300";

  return (
    <nav className="bg-slate-800 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-sky-300">
          ShopEase
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>

          <Link to="/cart" className="relative">
            <FiShoppingCart size={20} />

            {totalQty > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs">
                {totalQty}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className={navClass}>
                Sign In
              </NavLink>

              <NavLink to="/register" className={navClass}>
                Create Account
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/my-orders" className={navClass}>
                My Orders
              </NavLink>

              {user?.role === "Admin" && (
                <NavLink to="/admin/dashboard" className={navClass}>
                  Admin
                </NavLink>
              )}

              <span className="font-medium text-sky-300">{user?.name}</span>

              <button onClick={handleLogout} className="hover:text-red-400">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 border-t border-slate-700 bg-slate-800 px-4 py-4 md:hidden">
          <NavLink to="/" onClick={closeMenu} className="block">
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu} className="block">
            Products
          </NavLink>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative flex items-center gap-1"
          >
            <FiShoppingCart size={20} />

            {totalQty > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs">
                {totalQty}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login" onClick={closeMenu} className="block">
                Sign In
              </NavLink>

              <NavLink to="/register" onClick={closeMenu} className={navClass}>
                Create Account
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/my-orders" onClick={closeMenu} className="block">
                My Orders
              </NavLink>

              {user?.role === "Admin" && (
                <NavLink to="/admin" onClick={closeMenu} className={navClass}>
                  Admin
                </NavLink>
              )}

              <p className="text-sky-300">{user?.name}</p>

              <button onClick={handleLogout} className="hover:text-red-400">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
