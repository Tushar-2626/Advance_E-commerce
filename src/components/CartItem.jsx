import React from "react";

export default function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <div className="flex gap-4 items-center bg-white p-4 rounded shadow">
      <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
      <div className="flex-1">
        <div className="font-semibold">{item.title}</div>
        <div className="text-sm text-gray-600">₹ {Math.round(item.price)}</div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => onDecrease(item)} className="px-2 py-1 border rounded">-</button>
        <div>{item.qty || 1}</div>
        <button onClick={() => onIncrease(item)} className="px-2 py-1 border rounded">+</button>
      </div>

      <button onClick={() => onRemove(item.id)} className="text-red-600">Remove</button>
    </div>
  );
}
