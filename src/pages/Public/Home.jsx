import { Link } from "react-router-dom";

const Home = () => {
      return (
        <>
          {/* Full-width Hero */}
          <section className="bg-gray-100 py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold">Welcome to ShopEase</h1>

              <p className="mt-4 text-gray-600 mb-6">
                Discover the latest products at the best prices.
              </p>
              <Link
                to="/products"
                className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
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
                {["Electronics", "Fashion", "Home", "Sports"].map(
                  (category) => (
                    <div
                      key={category}
                      className="rounded border p-6 text-center shadow-sm hover:shadow-md"
                    >
                      {category}
                    </div>
                  ),
                )}
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

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="rounded border p-4 shadow-sm">
                    <div className="mb-3 h-40 rounded bg-gray-200"></div>

                    <h3 className="font-medium">Product {item}</h3>

                    <p className="mt-2 text-green-600 font-semibold">₹999</p>

                    <button className="mt-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="grid gap-6 md:grid-cols-3">
              <div className="rounded border p-6 text-center">
                🚚
                <h3 className="mt-3 font-semibold">Free Shipping</h3>
              </div>

              <div className="rounded border p-6 text-center">
                🔒
                <h3 className="mt-3 font-semibold">Secure Payments</h3>
              </div>

              <div className="rounded border p-6 text-center">
                ⭐<h3 className="mt-3 font-semibold">Quality Products</h3>
              </div>
            </section>
          </div>
        </>
      );



  // return (
  //   <div className="space-y-16">
  //     {/* Hero Section */}
  //     <section className="bg-gray-100 p-10 text-center">
  //       <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>

  //       <p className="text-gray-600 mb-6">
  //         Discover the latest products at the best prices.
  //       </p>

  //       <Link
  //         to="/products"
  //         className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
  //       >
  //         Shop Now
  //       </Link>
  //     </section>

        // {/* Categories */}
        // <section>
        //   <h2 className="mb-6 text-2xl font-semibold">Shop by Category</h2>

        //   <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        //     {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
        //       <div
        //         key={category}
        //         className="rounded border p-6 text-center shadow-sm hover:shadow-md"
        //       >
        //         {category}
        //       </div>
        //     ))}
        //   </div>
        // </section>

        // {/* Featured Products */}
        // <section>
        //   <div className="mb-6 flex items-center justify-between">
        //     <h2 className="text-2xl font-semibold">Featured Products</h2>

        //     <Link to="/products" className="text-blue-600 hover:underline">
        //       View All
        //     </Link>
        //   </div>

        //   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        //     {[1, 2, 3, 4].map((item) => (
        //       <div key={item} className="rounded border p-4 shadow-sm">
        //         <div className="mb-3 h-40 rounded bg-gray-200"></div>

        //         <h3 className="font-medium">Product {item}</h3>

        //         <p className="mt-2 text-green-600 font-semibold">₹999</p>

        //         <button className="mt-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
        //           Add to Cart
        //         </button>
        //       </div>
        //     ))}
        //   </div>
        // </section>

        // {/* Why Choose Us */}
        // <section className="grid gap-6 md:grid-cols-3">
        //   <div className="rounded border p-6 text-center">
        //     🚚
        //     <h3 className="mt-3 font-semibold">Free Shipping</h3>
        //   </div>

        //   <div className="rounded border p-6 text-center">
        //     🔒
        //     <h3 className="mt-3 font-semibold">Secure Payments</h3>
        //   </div>

        //   <div className="rounded border p-6 text-center">
        //     ⭐<h3 className="mt-3 font-semibold">Quality Products</h3>
        //   </div>
        // </section>
      
  //   </div>
  // );
}

export default Home;
