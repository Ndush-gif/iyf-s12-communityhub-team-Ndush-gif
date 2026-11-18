import { useParams, Link } from 'react-router-dom';
import { formatDate } from '../utils/posts';

function PostDetail({ posts }) {
  // useParams always gives a string, so convert before comparing to a number id.
  const { postId } = useParams();
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <section>
        <p className="empty">Post not found.</p>
        <Link to="/posts">&larr; Back to Posts</Link>
      </section>
    );
  }

  return (
    <article className="post-detail">
      <Link to="/posts">&larr; Back to Posts</Link>
      <h2>{post.title}</h2>
      <p className="byline">By {post.author} · {formatDate(post.date)} · ♥ {post.likes}</p>
      <p>{post.content}</p>
    </article>
  );
}

export default PostDetail;
