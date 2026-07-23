import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import PageHeader from "../../components/admin/PageHeader";

import { allOrders } from "../../features/orders/orderThunks";

const OrderList = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(allOrders());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <PageHeader title="Orders" subtitle="Manage user orders." />

      <div className="mt-6 rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-min w-full border-collapse">
            <thead className="bg-stone-300 border-b border-stone-300">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                  Customer
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                  Product
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap">
                  Qty
                </th>

                <th className="px-4 py-3 text-right text-sm font-semibold whitespace-nowrap">
                  Price
                </th>

                <th className="px-4 py-3 text-right text-sm font-semibold whitespace-nowrap">
                  Total
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap">
                  Payment
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap">
                  Payment Status
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap">
                  Order Status
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-gray-500">
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b even:bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.user?.name || "-"}
                    </td>

                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        {order.items?.map((item) => (
                          <div key={item._id} className="whitespace-nowrap">
                            {item.product?.name || "Some product(hard deleted)"}
                          </div>
                        ))}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <div className="space-y-1">
                        {order.items?.map((item) => (
                          <div key={item._id}>{item.quantity}</div>
                        ))}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <div className="space-y-1">
                        {order.items?.map((item) => (
                          <div key={item._id} className="whitespace-nowrap">
                            ₹{item.price.toLocaleString()}
                          </div>
                        ))}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-right font-semibold whitespace-nowrap">
                      ₹{order.totalAmount.toLocaleString()}
                    </td>

                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {order.paymentMethod}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium
                          ${
                            order.paymentStatus === "Paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium
                          ${
                            order.orderStatus === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.orderStatus === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <Link
                        to={`/admin/orders/${order._id}/edit`}
                        className="inline-flex items-center justify-center rounded-md bg-yellow-100 p-2 text-yellow-700 transition hover:bg-yellow-200"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderList;
