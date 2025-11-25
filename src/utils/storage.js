export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const load = (key, fallback = null) => {
  try {
    const v = localStorage.getItem(key);
    if (!v) return fallback;
    return JSON.parse(v);
  } catch {
    return fallback;
  }
};

export const remove = (key) => localStorage.removeItem(key);
