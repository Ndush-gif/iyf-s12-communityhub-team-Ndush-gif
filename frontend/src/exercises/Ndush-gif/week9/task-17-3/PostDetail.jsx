// Task 17.3 Ex. 2 — Dynamic route: read :postId from the URL with useParams.
// Added to the class version: res.ok check and an error message (instead of
// "Loading..." forever when the request fails), and an `ignore` cleanup flag.
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail({ base = '' }) {
  const { postId } = useParams(); // always a string, e.g. "3"
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then((data) => { if (!ignore) setPost(data); })
      .catch((err) => { if (!ignore) setError(err.message); });
    return () => { ignore = true; };
  }, [postId]);

  if (error) return <p role="alert">{error}</p>;
  // Guard on the id too: when the URL changes, the old post is still in state.
  if (!post || String(post.id) !== postId) return <p>Loading...</p>;

  return (
    <article>
      <Link to={`${base}/posts`}>&larr; Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostDetail;
