import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/productThunks";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (isAuthenticated && user?.role === "Admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      {/* Full-width Hero */}
      <section className="bg-sky-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Welcome to ShopEase</h1>

          <p className="mt-4 text-gray-600 mb-6">
            Discover the latest products at the best prices.
          </p>
          <Link
            to="/products"
            className="inline-block rounded bg-amber-600 px-6 py-3 text-white hover:bg-amber-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Rest of the page */}
      <div className="container mx-auto px-4 py-10">
        {/* Categories */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Shop by Category</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
              <div
                key={category}
                className="rounded-md border bg-black text-white hover:text-sky-300 p-6 text-center shadow-sm hover:shadow-md"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="my-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Products</h2>

            <Link to="/products" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {products &&
              products
                .slice(0, 4)
                .map((item, i) => (
                  <div
                    key={i}
                    className="rounded border border-gray-200 p-4 shadow-sm"
                  >
                    {/* <div className="mb-3 h-40 rounded bg-gray-200"></div> */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-50 w-full rounded object-cover"
                    />

                    <h3 className="font-medium">{item.name}</h3>

                    <p className="mt-2 text-green-600 font-semibold">
                      ₹{item.price}
                    </p>

                    <Link
                      to="/products"
                      className="mt-4 block w-full rounded bg-slate-800 py-2 text-center text-white hover:bg-slate-900"
                    >
                      Add to Cart
                    </Link>
                  </div>
                ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded border border-lime-100 p-6 text-center bg-lime-200">
            🚚
            <h3 className="mt-3 font-semibold">Free Shipping</h3>
          </div>

          <div className="rounded border border-lime-100 p-6 text-center bg-lime-200">
            🔒
            <h3 className="mt-3 font-semibold">Secure Payments</h3>
          </div>

          <div className="rounded border border-lime-100 p-6 text-center bg-lime-200">
            ⭐<h3 className="mt-3 font-semibold">Quality Products</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
