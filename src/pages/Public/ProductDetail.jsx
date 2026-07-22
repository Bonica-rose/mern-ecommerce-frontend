import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../features/products/productThunks";

import ProductDetails from "../../components/product/ProductDetails";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import EmptyState from "../../components/common/EmptyState";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto py-8">
      <Link
        to="/products"
        className="mb-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : !product ? (
        <EmptyState
          title="Product Not Found"
          message="The product you're looking for doesn't exist or has been removed."
        />
      ) : (
        <ProductDetails product={product} />
      )}
    </div>
  );
};

export default ProductDetail;
