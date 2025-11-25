import React, { createContext, useContext, useEffect, useState } from "react";
import { save, load } from "../utils/storage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => load("smartshop_cart", []));
  const [wishlist, setWishlist] = useState(() => load("smartshop_wishlist", []));

  useEffect(() => save("smartshop_cart", cart), [cart]);
  useEffect(() => save("smartshop_wishlist", wishlist), [wishlist]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (productId) =>
    setCart((prev) => prev.filter((p) => p.id !== productId));

  const updateQty = (productId, qty) =>
    setCart((prev) => prev.map(p => p.id === productId ? { ...p, qty } : p));

  const clearCart = () => setCart([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const cartCount = cart.reduce((s, p) => s + (p.qty || 1), 0);
  const cartTotal = cart.reduce((s, p) => s + (p.price * (p.qty || 1)), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
        cartTotal,
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
