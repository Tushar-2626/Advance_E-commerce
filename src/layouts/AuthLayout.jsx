import React from "react";

/**
 * AuthLayout
 * - Minimal centered card layout for Login / Register pages
 * - Keeps auth pages distraction-free
 */
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-xl p-6">
          {children}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © SmartShop — Demo
        </div>
      </div>
    </div>
  );
}
