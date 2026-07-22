import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between items-center mb-3">
            <div>
            <h3 className="font-semibold">Order #{order._id.slice(-6)}</h3>

            <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
            </p>
            </div>

            <div className="text-right">
            <p className="font-semibold">₹{order.totalAmount}</p>

            <span className="text-sm text-blue-600">{order.orderStatus}</span>
            </div>
        </div>

        <div className="space-y-2 mb-4">
            {order.items.map((item) => (
            <div key={item._id} className="flex justify-between text-sm">
                <span>
                {item.product?.name} × {item.quantity}
                </span>

                <span>₹{item.price}</span>
            </div>
            ))}
        </div>

        <Link
            to={`/orders/${order._id}`}
            className="text-blue-600 hover:underline"
        >
            View Details
        </Link>
        </div>
    );
}

export default OrderCard;
