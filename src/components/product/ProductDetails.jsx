import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartThunks";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.cart);

    const handleAddToCart = async () => {
        try {
            await dispatch(
            addToCart({
                productId: product._id,
                quantity: 1,
            }),
            ).unwrap();

            toast.success("Product added to cart");
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div className="p-9 grid gap-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="rounded" />

        <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="mt-3">{product.description}</p>

            <p className="mt-4">Category: {product.category}</p>

            <p className="my-4 text-2xl font-bold text-green-600">
            ₹{product.price}
            </p>

            <Link
                to={`/products/${product._id}`}
                onClick={handleAddToCart}
                disabled={loading}
                className="mt-6 rounded bg-blue-600 px-6 py-2 text-white"
            >
                Add to Cart
            </Link>
        </div>
        </div>
    );
};

export default ProductDetails;
