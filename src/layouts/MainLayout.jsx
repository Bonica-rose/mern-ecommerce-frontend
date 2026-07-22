import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchCurrentUser } from "../features/auth/authThunks";
import { getCart } from "../features/cart/cartThunks";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Get current user once
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // Get cart whenever user changes
  useEffect(() => {
    if (user?.role !== "Admin") {
      dispatch(getCart());
    }
  }, [dispatch, user]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
