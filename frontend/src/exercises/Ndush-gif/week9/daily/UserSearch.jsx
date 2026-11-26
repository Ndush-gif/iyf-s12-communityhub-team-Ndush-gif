// Day 2 — API search: fetch users, filter as you type, debounced, with loading/error states.
import { useState, useEffect } from 'react';

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  // Fetch once on mount. `ignore` stops a late response updating an unmounted component.
  useEffect(() => {
    let ignore = false;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load users');
        return res.json();
      })
      .then((data) => { if (!ignore) setUsers(data); })
      .catch((err) => { if (!ignore) setError(err.message); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, []);

  // Debounce: only update `debounced` 400ms after the user STOPS typing.
  // Each keystroke clears the previous timer in the cleanup.
  useEffect(() => {
    const id = setTimeout(() => setDebounced(query), 400);
    return () => clearTimeout(id);
  }, [query]);

  const term = debounced.trim().toLowerCase();
  const results = users.filter((u) => u.name.toLowerCase().includes(term));

  return (
    <section>
      <h2>User search</h2>
      <label htmlFor="user-search">Search users</label>
      <input id="user-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />

      {loading && <p role="status">Loading users…</p>}
      {error && <p role="alert">Error: {error}</p>}
      {!loading && !error && (
        results.length === 0
          ? <p>No users match “{debounced}”.</p>
          : <ul>{results.map((u) => <li key={u.id}>{u.name} — {u.email}</li>)}</ul>
      )}
    </section>
  );
}

export default UserSearch;
