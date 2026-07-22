import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartThunks";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
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
        <div className="rounded-lg border border-gray-300 bg-white p-4 shadow hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full rounded object-cover"
            />

            <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>

            <p className="text-sm text-gray-500">{product.category}</p>

            <p className="mt-2 text-xl font-bold text-green-600">
                ₹{product.price}
            </p>

            <Link
                to={`/products/${product._id}`}
                onClick={handleAddToCart}
                disabled={loading}
                className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
            >
                View Details
            </Link>
        </div>
    );
}

export default ProductCard;
