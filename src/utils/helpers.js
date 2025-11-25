export const formatPrice = (v) => {
  if (typeof v !== "number") return v;
  return Math.round(v); // uses ₹ as integer in this demo
};

export const truncate = (s = "", n = 100) => {
  if (!s) return "";
  return s.length > n ? s.slice(0, n) + "..." : s;
};
