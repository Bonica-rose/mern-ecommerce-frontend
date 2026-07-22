import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { myOrders } from "../../features/orders/orderThunks";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import EmptyState from "../../components/common/EmptyState";
import OrderCard from "../../components/order/OrderCard";

const MyOrders = () =>{
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  if (!orders.length) {
    return <EmptyState message="No orders found." />;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
