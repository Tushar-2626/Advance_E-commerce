import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* All Products Page */}
      <Route path="/products" element={<Products />} />

      {/* Single Product Page */}
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Cart Page */}
      <Route path="/cart" element={<Cart />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Profile Page */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 Page (Optional) */}
      <Route path="*" element={<div className="p-10 text-center text-xl">404 Not Found</div>} />

    </Routes>
  );
}
