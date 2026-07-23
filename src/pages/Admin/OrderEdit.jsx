import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import toast from "react-hot-toast";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import EmptyState from "../../components/common/EmptyState";
import PageHeader from "../../components/admin/PageHeader";

import { getOrder, updateOrderStatus } from "../../features/orders/orderThunks";

const ORDER_STATUS = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
];

const PAYMENT_STATUS = ["Pending", "Paid", "Failed"];

const OrderEdit = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { order, loading, error } = useSelector((state) => state.orders);
    console.log(order);
    

    const [orderStatus, setOrderStatus] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");

    useEffect(() => {
        dispatch(getOrder(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (order) {
            setOrderStatus(order.orderStatus);
            setPaymentStatus(order.paymentStatus);
        }
    }, [order]);

    const handleSubmit = async (e) => {
        e.preventDefault();        

        try {
            await dispatch(
                updateOrderStatus({
                    id,
                    data: {
                        status: orderStatus,
                        paymentStatus,
                    },
                }),
            ).unwrap();

            toast.success("Order updated successfully");

            navigate("/admin/orders");
        } catch (err) {
            console.log(err);
            
            toast.error(err);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!order) {
        return <EmptyState message="Order not found." />;
    }

    return (
        <>
            <PageHeader
            title="Edit Order"
            subtitle="Update order and payment status."
            action={
                <Link
                to="/admin/orders"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100"
                >
                <IoArrowBack />
                Back to Orders
                </Link>
            }
            />

            <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-white p-6 shadow"
            >
            {/* Customer */}

            <div>
                <h2 className="mb-2 text-lg font-semibold">Customer</h2>

                <p>
                <strong>Name:</strong> {order.user?.name}
                </p>

                <p>
                <strong>Email:</strong> {order.user?.email}
                </p>
            </div>

            {/* Products */}

            <div>
                <h2 className="mb-3 text-lg font-semibold">Products</h2>

                <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-stone-200">
                    <tr>
                        <th className="border border-gray-300 px-3 py-2 text-left">
                        Product
                        </th>

                        <th className="border border-gray-300 px-3 py-2 text-center">
                        Qty
                        </th>

                        <th className="border border-gray-300 px-3 py-2 text-right">
                        Price
                        </th>

                        <th className="border border-gray-300 px-3 py-2 text-right">
                        Subtotal
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {order.items.map((item) => (
                        <tr key={item._id}>
                        <td className="border border-gray-300 px-3 py-2">
                            {item.product?.name}
                        </td>

                        <td className="border border-gray-300 px-3 py-2 text-center">
                            {item.quantity}
                        </td>

                        <td className="border border-gray-300 px-3 py-2 text-right">
                            ₹{item.price.toLocaleString()}
                        </td>

                        <td className="border border-gray-300 px-3 py-2 text-right">
                            ₹{(item.quantity * item.price).toLocaleString()}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Order Summary */}

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                <label className="font-semibold">Shipping Address</label>

                <p className="mt-1 rounded border border-gray-300 bg-gray-50 p-3">
                    {order.shippingAddress}
                </p>
                </div>

                <div>
                <label className="font-semibold">Payment Method</label>

                <p className="mt-1 rounded border border-gray-300 bg-gray-50 p-3">
                    {order.paymentMethod}
                </p>
                </div>

                <div>
                <label className="font-semibold">Total Amount</label>

                <p className="mt-1 rounded border border-gray-300 bg-gray-50 p-3">
                    ₹{order.totalAmount.toLocaleString()}
                </p>
                </div>
            </div>

            {/* Editable Fields */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                <label className="mb-2 block font-semibold">Order Status</label>

                <select
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                    className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                >
                    {ORDER_STATUS.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <label className="mb-2 block font-semibold">Payment Status</label>

                <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                >
                    {PAYMENT_STATUS.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                    ))}
                </select>
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <Link to="/admin/orders" className="rounded bg-gray-200 px-5 py-2">
                Cancel
                </Link>

                <button
                type="submit"
                className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                Update Order
                </button>
            </div>
            </form>
        </>
    );
};

export default OrderEdit;
