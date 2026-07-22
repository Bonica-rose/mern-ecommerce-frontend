import { Link } from "react-router-dom";

const CartSummary = ({ totalQty, totalAmount }) => {
    return (
        <div className="rounded-lg border border-gray-300 p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

        <div className="mb-2 flex justify-between">
            <span>Items</span>
            <span>{totalQty}</span>
        </div>

        <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
        </div>

        <div className="mb-2 flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
        </div>

        <hr className="my-4" />

        <div className="mb-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{totalAmount}</span>
        </div>

        <Link
            to="/checkout"
            className="block rounded bg-blue-600 py-3 text-center text-white hover:bg-blue-700"
        >
            Proceed to Checkout
        </Link>
        </div>
    );
}

export default CartSummary;
