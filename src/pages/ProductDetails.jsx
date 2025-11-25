import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, toggleWishlist, wishlist } = useCart();

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const p = await getProduct(id);
        if (!mounted) return;
        setProduct(p);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div>Product not found</div>;

  const inWishlist = wishlist.find(p => p.id === product.id);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow col-span-1">
        <img src={product.image} alt={product.title} className="w-full h-72 object-contain" />
      </div>

      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="text-gray-600 mt-2">{product.category}</div>
        <div className="text-3xl font-bold mt-4">₹ {product.price.toFixed(0)}</div>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className={`px-4 py-2 rounded border ${inWishlist ? "text-red-600 border-red-600" : "border-gray-300"}`}
          >
            {inWishlist ? "In Wishlist ♥" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
