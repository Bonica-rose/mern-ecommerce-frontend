import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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

          <NavLink to="/cart" className="text-xl hover:text-sky-300">
            <FiShoppingCart />
          </NavLink>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login">Sign In</NavLink>

              <NavLink to="/register">Create Account</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">Profile</NavLink>

              {user?.role === "Admin" && <NavLink to="/admin">Admin</NavLink>}

              <button>Logout</button>
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

          <NavLink
            to="/cart"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <FiShoppingCart />
            Cart
          </NavLink>

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

              <button className="block">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
