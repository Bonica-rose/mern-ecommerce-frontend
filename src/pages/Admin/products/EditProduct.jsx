import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";

import Loading from "../../../components/common/Loading";
import EmptyState from "../../../components/common/EmptyState";
import ErrorMessage from "../../../components/common/ErrorMessage";

import PageHeader from "../../../components/admin/PageHeader";
import ProductForm from "../../../components/admin/products/ProductForm";

import {
  getProduct,
  updateProduct,
} from "../../../features/products/productThunks";

import { clearProduct } from "../../../features/products/productSlice";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { product, loading , error } = useSelector((state) => state.products);

  console.log(product);
  

  useEffect(() => {
    dispatch(getProduct(id));

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const handleUpdate = async (formData) => {
    try {
      await dispatch(
        updateProduct({
          id,
          productData: formData,
        }),
      ).unwrap();

      toast.success("Product updated successfully");

      navigate("/admin/products");
    } catch (error) {
      toast.error(error?.message || error || "Failed to update product");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    return <EmptyState description="Product not found." />;
  }

  return (
    <>
      <PageHeader
        title="Edit Product"
        subtitle="Update product details."
        action={
          <Link to="/admin/products" className="flex items-center gap-2">
            <IoArrowBack />
            Back
          </Link>
        }
      />

      {product && (
        <ProductForm
          initialValues={product}
          onSubmit={handleUpdate}
          loading={loading}
          buttonText="Update Product"
        />
      )}
    </>
  );
};

export default EditProduct;
