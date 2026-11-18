import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { makeExcerpt, formatDate } from '../../utils/posts';

function PostCard({ post, onLike, onDelete }) {
  const { id, title, content, author, date, likes, liked } = post;

  return (
    <article className="post-card">
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>{makeExcerpt(content)}</p>

      <div className="post-meta">
        <span>By {author}</span>
        <span>{formatDate(date)}</span>
      </div>

      <div className="post-actions">
        <Button
          variant={liked ? 'primary' : 'secondary'}
          size="small"
          onClick={() => onLike(id)}
          aria-pressed={liked}
        >
          {liked ? '♥' : '♡'} {likes}
        </Button>
        <Button variant="danger" size="small" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </article>
  );
}

export default PostCard;
