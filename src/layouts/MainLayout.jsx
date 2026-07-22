import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchCurrentUser } from "../features/auth/authThunks";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
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
