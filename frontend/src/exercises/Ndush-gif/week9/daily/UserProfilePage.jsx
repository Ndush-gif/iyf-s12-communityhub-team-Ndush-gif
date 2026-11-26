// Day 5 — full User Profile page: fetches user, posts and todos; tabs; loading and error states.
import { useState, useEffect } from 'react';
import Tabs from './Tabs';

const API = 'https://jsonplaceholder.typicode.com';

function UserProfilePage({ userId = 1 }) {
  const [data, setData] = useState({ user: null, posts: [], todos: [] });
  const [status, setStatus] = useState('loading'); // 'loading' | 'error' | 'ready'
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);     // bump to retry

  useEffect(() => {
    let ignore = false;
    const getJson = (path) =>
      fetch(`${API}${path}`).then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      });

    // Three requests in parallel; the page shows when all three are back.
    Promise.all([
      getJson(`/users/${userId}`),
      getJson(`/users/${userId}/posts`),
      getJson(`/users/${userId}/todos`),
    ])
      .then(([user, posts, todos]) => {
        if (!ignore) { setData({ user, posts, todos }); setStatus('ready'); }
      })
      .catch((err) => {
        if (!ignore) { setError(err.message); setStatus('error'); }
      });

    return () => { ignore = true; };
  }, [userId, attempt]);

  const retry = () => { setStatus('loading'); setError(null); setAttempt((a) => a + 1); };

  if (status === 'loading') return <p role="status">Loading profile…</p>;
  if (status === 'error') {
    return (
      <div role="alert">
        <p>Could not load this profile: {error}</p>
        <button onClick={retry}>Try again</button>
      </div>
    );
  }

  const { user, posts, todos } = data;
  const done = todos.filter((t) => t.completed).length;

  return (
    <section>
      <h2>{user.name}</h2>
      <p>@{user.username} · {user.email} · {user.address.city}</p>

      <Tabs
        label="profile"
        tabs={[
          {
            label: 'Info',
            content: (
              <ul>
                <li>Phone: {user.phone}</li>
                <li>Website: {user.website}</li>
                <li>Company: {user.company.name}</li>
              </ul>
            ),
          },
          {
            label: `Posts (${posts.length})`,
            content: <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>,
          },
          {
            label: `Todos (${done}/${todos.length})`,
            content: (
              <ul>
                {todos.map((t) => (
                  <li key={t.id}>{t.completed ? '✅' : '⬜'} {t.title}</li>
                ))}
              </ul>
            ),
          },
        ]}
      />
    </section>
  );
}

export default UserProfilePage;
