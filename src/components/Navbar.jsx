import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-linear-to-r from-pink-200 via-rose-400 to-red-600">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-indigo-600">SmartShop</Link>
          <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
          <Link to="/wishlist" className="text-gray-700 hover:text-indigo-600">Wishlist</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/cart")} className="relative">
            Cart
            <span className="ml-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Hi, {user.name}</span>
              <button className="bg-gray-200 px-3 py-1 rounded" onClick={logout}>
                Logout
              </button>
              <Link to="/profile" className="text-sm text-indigo-600">Profile</Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="text-indigo-600">Login</Link>
              <Link to="/register" className="bg-indigo-600 text-white px-3 py-1 rounded">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
