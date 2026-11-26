// Task 17.4 — Professional loading / error / empty handling, with Try Again.
// Changed from the class code: '/api/posts' doesn't exist until Week 10, so this
// uses JSONPlaceholder, and it checks response.ok so a 404/500 becomes an error.
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
    </article>
  );
}

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0); // bump to fetch again

  // The effect only talks to the network; it never sets loading/error up front.
  // State starts as "loading", and the retry handler resets it before refetching.
  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      try {
        const response = await fetch(POSTS_URL);
        if (!response.ok) throw new Error(`Could not load posts (${response.status})`);
        const data = await response.json();
        if (!ignore) setPosts(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchPosts();
    return () => { ignore = true; }; // cleanup: ignore a response that arrives too late
  }, [attempt]);

  const retry = () => {
    setLoading(true);
    setError(null);
    setAttempt((a) => a + 1);
  };

  if (loading) return <LoadingSpinner text="Loading posts..." />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
