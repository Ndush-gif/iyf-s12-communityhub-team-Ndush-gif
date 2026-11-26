// Task 17.1 Ex. 2, Pattern 1 — Fetch data on mount, re-fetch when userId changes.
// Changed from the class code: our own /api/users doesn't exist until the backend
// (Week 10), so this uses JSONPlaceholder. Added res.ok + error handling so a
// failed request shows a message instead of a blank screen.
import { useState, useEffect } from 'react';

function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('Could not load user');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  return <div>{user.name}</div>;
}

export default UserProfile;
