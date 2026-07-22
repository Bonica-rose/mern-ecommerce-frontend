import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { logout } from "../features/auth/authThunks";
import { getCart } from "../features/cart/cartThunks";

function Navbar() {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { totalQty } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCart());
    }
  }, [dispatch, isAuthenticated]);

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-slate-800 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-sky-300">
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/products">Products</NavLink>

          <Link to="/cart" className="relative">
            <FiShoppingCart size={20} />

            {totalQty > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {totalQty}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login">Sign In</NavLink>

              <NavLink to="/register">Create Account</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">Profile</NavLink>

              {user?.role === "Admin" && <NavLink to="/admin">Admin</NavLink>}
              {user?.role === "User" && (
                <NavLink to="/products">{user?.name}</NavLink>
              )}
              {(user?.role !== "User" || user?.role !== "Admin") && (
                <NavLink to="/products">Guest</NavLink>
              )}

              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>

        {/* Mobile Button */}
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
            className="relative flex items-center gap-2"
          >
            <FiShoppingCart size={20} />

            {totalQty > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {totalQty}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login" onClick={closeMenu} className="block">
                Sign In
              </NavLink>

              <NavLink to="/register" onClick={closeMenu} className="block">
                Create Account
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" onClick={closeMenu} className="block">
                Profile
              </NavLink>

              {user?.role === "Admin" && (
                <NavLink to="/admin" onClick={closeMenu} className="block">
                  Admin
                </NavLink>
              )}

              <button onClick={handleLogout} className="block">
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
