import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Welcome to SmartShop</h1>
        <p className="text-gray-600">A demo e-commerce frontend built with React + Tailwind</p>
      </header>

      <Products />
    </div>
  );
}
