import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-200 via-rose-400 to-red-600 py-6 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          <strong>SmartShop</strong> — Demo frontend built with React + Tailwind
        </div>
        <div className="text-sm">
          Built for learning • <span>Privacy</span> • <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
