import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const inWishlist = wishlist.find((p) => p.id === product.id);

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-1">
        <img src={product.image} alt={product.title} className="h-44 w-full object-contain" />
        <h3 className="mt-3 font-semibold text-sm line-clamp-2">{product.title}</h3>
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">₹ {product.price.toFixed(0)}</div>
          <div className="text-xs text-gray-500">{product.category}</div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-3 py-1 rounded text-sm"
          >
            Add
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`px-2 py-1 rounded ${inWishlist ? "text-red-600" : "text-gray-500"}`}
            title="Toggle wishlist"
          >
            {inWishlist ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
