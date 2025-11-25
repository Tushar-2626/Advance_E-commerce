import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="border px-3 py-2 rounded w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="px-3 py-2 bg-indigo-600 text-white rounded">Search</button>
    </div>
  );
}
