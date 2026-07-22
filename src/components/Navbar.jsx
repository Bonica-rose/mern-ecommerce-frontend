import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-slate-800 text-gray-100">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
