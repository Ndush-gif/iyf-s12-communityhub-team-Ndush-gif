import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import initialPosts from './data/initialPosts';

function App() {
  // State lives here (lifted up) so every page sees the same posts.
  const [posts, setPosts] = useState(initialPosts);

  const handleCreate = ({ title, content }) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      liked: false,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  // Like / unlike — always build a new object, never mutate.
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) }
          : post
      )
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home postCount={posts.length} />} />
        <Route
          path="posts"
          element={
            <Posts
              posts={posts}
              onCreate={handleCreate}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="posts/:postId" element={<PostDetail posts={posts} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
