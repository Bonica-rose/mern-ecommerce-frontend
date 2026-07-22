import { useParams } from "react-router-dom";
useEffect
import ProductDetails from "../../components/product/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../features/products/productThunks";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return <ProductDetails product={product} />;
};

export default ProductDetail;
