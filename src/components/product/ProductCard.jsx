import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="rounded-lg border border-gray-300 bg-white p-4 shadow hover:shadow-lg transition">
        <img
            src={product.image}
            alt={product.name}
            className="h-52 w-full rounded object-cover"
        />

        <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>

        <p className="text-sm text-gray-500">{product.category}</p>

        <p className="mt-2 text-xl font-bold text-green-600">₹{product.price}</p>

        <Link
            to={`/products/${product._id}`}
            className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
            View Details
        </Link>
        </div>
    );
}

export default ProductCard;
