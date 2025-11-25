import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return <div className="text-center py-20">No items in wishlist</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
