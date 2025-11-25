import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    // Mock place order
    clearCart();
    alert("Order placed! (mock)");
    navigate("/");
  };

  if (cart.length === 0) return <div className="text-center py-20">No items to checkout</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      <div className="space-y-3">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between">
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">Qty: {item.qty || 1}</div>
            </div>
            <div>₹ {(item.price * (item.qty || 1)).toFixed(0)}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <div className="text-lg font-bold">Total:</div>
        <div className="text-lg font-bold">₹ {cartTotal.toFixed(0)}</div>
      </div>

      <div className="mt-4">
        <button onClick={placeOrder} className="w-full bg-indigo-600 text-white py-2 rounded">Place Order</button>
      </div>
    </div>
  );
}
