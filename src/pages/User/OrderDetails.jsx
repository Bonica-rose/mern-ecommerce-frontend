import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import EmptyState from "../../components/common/EmptyState";

import { getOrderById } from "../../features/orders/orderThunks";

const OrderDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { order, loading, error } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getOrderById(id));
    }, [dispatch, id]);

    if (loading) return <Loading />;

    if (error) return <ErrorMessage message={error} />;

    if (!order) return <EmptyState message="Order not found." />;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Order Details</h1>

            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow">
                <div className="space-y-2 mb-6">
                <p>
                    <strong>Order ID:</strong> {order._id}
                </p>

                <p>
                    <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
                </p>

                <p>
                    <strong>Status:</strong> {order.orderStatus}
                </p>

                <p>
                    <strong>Payment:</strong> {order.paymentStatus}
                </p>

                <p>
                    <strong>Total:</strong> ₹{order.totalAmount}
                </p>
                </div>

                <h2 className="text-lg font-semibold mb-3">Items</h2>

                <div className="space-y-3">
                {order.items.map((item) => (
                    <div key={item._id} className="flex justify-between border-b border-gray-400 pb-2">
                        <div>
                            <p className="font-medium">{item.product?.name || "Some product(hard deleted)"}</p>

                            <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                            </p>
                        </div>

                        <p>₹{item.price}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
