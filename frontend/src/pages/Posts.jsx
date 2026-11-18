import { useState } from 'react';
import CreatePost from '../components/Post/CreatePost';
import PostList from '../components/Post/PostList';
import { sortNewestFirst, searchPosts } from '../utils/posts';

function Posts({ posts, onCreate, onLike, onDelete }) {
  const [search, setSearch] = useState('');

  // Derived on every render — not stored in state, so it can never go stale.
  const visible = sortNewestFirst(searchPosts(posts, search));

  return (
    <>
      <h2>Latest Posts</h2>
      <CreatePost onCreate={onCreate} />

      <input
        className="search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or author…"
        aria-label="Search posts by title or author"
      />

      {search && visible.length === 0 ? (
        <p className="empty">No posts match “{search}”.</p>
      ) : (
        <PostList posts={visible} onLike={onLike} onDelete={onDelete} />
      )}
    </>
  );
}

export default Posts;
