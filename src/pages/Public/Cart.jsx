import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCart, clearCart } from "../../features/cart/cartThunks";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

import CartList from "../../components/cart/CartList";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";

const Cart = () => {
    const dispatch = useDispatch();

    const { items, totalQty, totalAmount, loading, error } = useSelector(
        (state) => state.cart,
    );

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    if (loading && items.length === 0) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <section className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>

            <button
                onClick={() => dispatch(clearCart())}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
            Clear Cart
            </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
            <CartList items={items} />
            </div>

            <div>
            <CartSummary totalQty={totalQty} totalAmount={totalAmount} />
            </div>
        </div>
        </section>
    );
}

export default Cart;
