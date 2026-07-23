import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import toast from "react-hot-toast";

import PageHeader from "../../../components/admin/PageHeader";
import ProductForm from "../../../components/admin/products/ProductForm";

import { createProduct } from "../../../features/products/productThunks";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.products);

  const handleCreate = async (formData) => {
    try {
      await dispatch(createProduct(formData)).unwrap();

      toast.success("Product created successfully");

      navigate("/admin/products");
    } catch (error) {
      toast.error(error || "Failed to create product");
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Add Product"
        subtitle="Create a new product."
        action={
          <Link
            to="/admin/products"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100"
          >
            <IoArrowBack />
            Back
          </Link>
        }
      />

      <ProductForm
        onSubmit={handleCreate}
        loading={loading}
        buttonText="Save Product"
      />
    </div>
  );
};

export default AddProduct;
