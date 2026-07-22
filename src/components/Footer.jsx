import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-800 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>

        <div className="flex gap-6">
          <Link to="/about" className="hover:text-sky-300">
            About
          </Link>

          <Link to="/contact" className="hover:text-sky-300">
            Contact
          </Link>

          <Link to="/privacy" className="hover:text-sky-300">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
