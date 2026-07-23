import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import PageHeader from "../../../components/admin/PageHeader";

import {
  getProducts,
  deleteProduct,
} from "../../../features/products/productThunks";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading, error, filters } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(getProducts(filters));
  }, [dispatch, filters]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) return;

    try {
      await dispatch(deleteProduct(id)).unwrap();

      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error(error || "Failed to delete product");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Manage all products."
        action={
          <Link
            to="/admin/products/add"
            className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            <FaPlus />
            Add Product
          </Link>
        }
      />

      <div className="mt-6 overflow-x-auto rounded bg-white shadow">
        <table className="min-w-full">
          <thead className="bg-stone-300">
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Price</th>
              <th className="px-4 py-3 text-center">Stock</th>
              <th className="px-4 py-3 text-center">Rating</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id} className="border-t border-stone-400">
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium">{product.name}</td>

                  <td className="px-4 py-3">{product.category}</td>

                  <td className="px-4 py-3 text-right">₹{product.price}</td>

                  <td className="px-4 py-3 text-center">{product.stock}</td>

                  <td className="px-4 py-3 text-center">{product.ratings}</td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/admin/products/${product._id}/edit`}
                        className="rounded bg-yellow-200 p-2 text-yellow-600"
                      >
                        <FaEdit />
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="rounded bg-red-200 p-2 text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
