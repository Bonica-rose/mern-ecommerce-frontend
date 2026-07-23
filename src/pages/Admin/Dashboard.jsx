import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStats } from "../../features/dashboard/dashboardThunks";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";
import ErrorMessage from "../../components/common/ErrorMessage";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { stats, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading) return <Loading />;

  const cards = [
    { title: "Total Products", value: stats?.totalProducts },
    { title: "Total Users", value: stats?.totalUsers },
    { title: "Total Orders", value: stats?.totalOrders },
    { title: "Pending Orders", value: stats?.pendingOrders },
    { title: "Delivered Orders", value: stats?.deliveredOrders },
    { title: "Paid Orders", value: stats?.paidOrders },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
      {stats &&
        cards.map((item) => (
          <div
            key={item.title}
            className="rounded-lg bg-lime-200 shadow border border-lime-200 p-6"
          >
            <h3 className="text-stone-900">{item.title}</h3>

            <p className="mt-2 text-3xl font-bold text-gray-600">
              {item.value}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
