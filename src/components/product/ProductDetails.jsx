const ProductDetails = ({ product }) => {
    return (
        <div className="p-9 grid gap-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="rounded" />

        <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="mt-3">{product.description}</p>

            <p className="mt-4">Category: {product.category}</p>

            <p className="mt-4 text-2xl font-bold text-green-600">
            ₹{product.price}
            </p>

            <button className="mt-6 rounded bg-blue-600 px-6 py-2 text-white">
            Add To Cart
            </button>
        </div>
        </div>
    );
};

export default ProductDetails;
