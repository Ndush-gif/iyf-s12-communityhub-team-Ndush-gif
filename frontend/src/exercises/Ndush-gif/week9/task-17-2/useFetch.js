// Task 17.2 Ex. 2 — Custom fetch hook.
// Added to the class version: error is reset before each fetch, and an `ignore`
// flag in the cleanup so a slow, out-of-date response can't overwrite a newer one.
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Fetch failed');
        }

        const json = await response.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();
    return () => { ignore = true; };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
