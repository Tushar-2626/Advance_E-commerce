import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link to="/products" className="mt-4 inline-block text-indigo-600">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
            <div className="flex-1">
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">₹ {item.price.toFixed(0)}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQty(item.id, Math.max(1, (item.qty || 1) - 1))} className="px-2 py-1 border rounded">-</button>
              <div>{item.qty || 1}</div>
              <button onClick={() => updateQty(item.id, (item.qty || 1) + 1)} className="px-2 py-1 border rounded">+</button>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
          </div>
        ))}
      </div>

      <aside className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <div className="mt-2 flex justify-between">
          <span>Items:</span>
          <span>{cart.length}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Total:</span>
          <span className="font-bold">₹ {cartTotal.toFixed(0)}</span>
        </div>

        <div className="mt-4 space-y-2">
          <button onClick={() => navigate("/order")} className="w-full bg-indigo-600 text-white py-2 rounded">Proceed to Checkout</button>
          <button onClick={() => clearCart()} className="w-full border py-2 rounded">Clear Cart</button>
        </div>
      </aside>
    </div>
  );
}
