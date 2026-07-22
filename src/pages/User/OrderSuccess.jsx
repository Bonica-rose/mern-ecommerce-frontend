import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const OrderSuccess = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow">
            <FiCheckCircle className="mx-auto mb-4 text-6xl text-green-600" />

            <h1 className="mb-2 text-3xl font-bold">Order Placed!</h1>

            <p className="mb-8 text-gray-600">
                Thank you for your purchase. Your order has been placed
                successfully.
            </p>

            <div className="flex flex-col gap-3">
                <Link
                to="/my-orders"
                className="rounded bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
                >
                View My Orders
                </Link>

                <Link
                to="/products"
                className="rounded border border-gray-300 px-4 py-3 hover:bg-gray-100"
                >
                Continue Shopping
                </Link>
            </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
