import React from "react";

const ShippingForm = ({ shippingAddress, setShippingAddress }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

            <textarea
            rows={5}
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
            className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}

export default ShippingForm;
