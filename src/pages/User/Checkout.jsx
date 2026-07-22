import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ShippingForm from "../../components/checkout/ShippingForm";
import OrderSummary from "../../components/checkout/OrderSummary";

import { getCart } from "../../features/cart/cartThunks";
import { placeOrder } from "../../features/orders/orderThunks";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";
import ErrorMessage from "../../components/common/ErrorMessage";

const Checkout = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState("");

  const {
    items,
    totalAmount,
    loading: cartLoading,
    error: cartError,
  } = useSelector((state) => state.cart);

  const { loading: orderLoading, error: orderError } = useSelector(
    (state) => state.orders,
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCart());

    if (user?.address) {
      setShippingAddress(user.address);
    }
  }, [dispatch, user]);

  const handlePlaceOrder = async () => {
    if (!shippingAddress.trim()) {
      return alert("Please enter a shipping address.");
    }

    const result = await dispatch(placeOrder({ shippingAddress }));

    if (placeOrder.fulfilled.match(result)) {
      dispatch(getCart());
      navigate("/order-success");
    }
  };

  if (cartLoading) return <Loading />;

  if (cartError) return <ErrorMessage message={cartError} />;

  if (!items.length) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Add products before checking out."
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {orderError && (
        <div className="mb-4">
          <ErrorMessage message={orderError} />
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <ShippingForm
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
        />

        <OrderSummary
          cart={{
            items,
            totalAmount,
          }}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handlePlaceOrder}
          disabled={orderLoading}
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {orderLoading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
