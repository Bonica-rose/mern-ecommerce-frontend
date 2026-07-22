const OrderSummary = ({ cart }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {cart.items.map((item) => (
                <div key={item.product._id} className="flex justify-between py-2">
                <div>
                    {item.product.name}

                    <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>

                <div>₹{item.product.price * item.quantity}</div>
                </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>

                <span>₹{cart.totalAmount}</span>
            </div>
        </div>
    );
}

export default OrderSummary;
