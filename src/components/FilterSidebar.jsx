import React from "react";

export default function FilterSidebar({
  categories = [],
  selected,
  onSelect,
  minPrice,
  maxPrice,
  onPriceChange,
}) {
  return (
    <aside className="bg-white p-4 rounded shadow space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Categories</h4>
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Price (optional)</h4>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(e) => onPriceChange("min", e.target.value)}
            className="w-1/2 border px-2 py-1 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(e) => onPriceChange("max", e.target.value)}
            className="w-1/2 border px-2 py-1 rounded"
          />
        </div>
      </div>
    </aside>
  );
}
