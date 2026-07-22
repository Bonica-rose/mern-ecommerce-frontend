import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const EmptyCart = () => {
    return (
        <div className="py-20 text-center">
            <FiShoppingCart size={70} className="mx-auto mb-4 text-slate-400" />

            <h2 className="mb-2 text-2xl font-semibold">Your cart is empty</h2>

            <p className="mb-6 text-slate-500">
                Looks like you haven't added any products yet.
            </p>

            <Link
                to="/products"
                className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
                Continue Shopping
            </Link>
        </div>
    );
}

export default EmptyCart;
