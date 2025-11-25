import React, { useEffect, useMemo, useState } from "react";
import { getProducts, getCategories } from "../api/productApi";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const [p, c] = await Promise.all([getProducts(), getCategories()]);
        if (!mounted) return;
        setProducts(p);
        setCategories(["all", ...c]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "all") list = list.filter(p => p.category === category);
    if (q) list = list.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, q, category, sort]);

  if (loading) return <Loader />;

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex gap-2">
          <input
            className="border px-3 py-2 rounded w-64"
            placeholder="Search products..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="border px-2 py-2 rounded">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="border px-2 py-2 rounded">
            <option value="none">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="text-gray-600">{filtered.length} products</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
