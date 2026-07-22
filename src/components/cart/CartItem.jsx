import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartQty } from "../../features/cart/cartThunks";
import QuantitySelector from "./QuantitySelector";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.cart);

    const increaseQty = () => {
        dispatch(
        updateCartQty({
            productId: item.product._id,
            quantity: item.quantity + 1,
        }),
        );
    };

    const decreaseQty = () => {
        if (item.quantity > 1) {
        dispatch(
            updateCartQty({
            productId: item.product._id,
            quantity: item.quantity - 1,
            }),
        );
        }
    };

    const removeItem = () => {
        dispatch(removeCartItem(item.product._id));
    };

    return (
        <div className="flex items-center justify-between rounded-lg border border-gray-300 p-4 shadow-sm">
        <div className="flex items-center gap-4">
            <img
            src={item.product.image}
            alt={item.product.name}
            className="h-24 w-24 rounded object-cover"
            />

            <div>
            <h3 className="font-semibold">{item.product.name}</h3>

            <p className="text-sm text-slate-600">₹{item.product.price}</p>
            </div>
        </div>

        <QuantitySelector
            quantity={item.quantity}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
            loading={loading}
        />

        <div className="w-24 text-right font-semibold">
            ₹{item.product.price * item.quantity}
        </div>

        <button onClick={removeItem} className="text-red-600 hover:text-red-700">
            <FiTrash2 size={20} />
        </button>
        </div>
    );
}

export default CartItem;
