import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        if (!mounted) return;
        setData(res.data);
      } catch (e) {
        if (!mounted) return;
        setError(e);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps.length ? deps : [url]);

  return { data, loading, error };
}
