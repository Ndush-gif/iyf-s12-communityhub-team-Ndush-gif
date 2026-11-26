// Task 17.3 Ex. 1 + 2 — Basic routing with a Layout + Outlet, and a dynamic route.
// The real app already has BrowserRouter in main.jsx, and you can't put a router
// inside another router. So this exercise uses NESTED <Routes>, mounted in App.jsx:
//   <Route path="routing-demo/*" element={<RoutingDemo />} />
// Paths inside are relative to /routing-demo.
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import PostDetail from './PostDetail';
import Navigation from './Navigation';

const BASE = '/routing-demo';

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to={BASE}>Home</Link> · <Link to={`${BASE}/posts`}>Posts</Link> ·{' '}
          <Link to={`${BASE}/about`}>About</Link>
        </nav>
        <Navigation base={BASE} />
      </header>

      <main>
        <Outlet /> {/* Child routes render here */}
      </main>

      <footer>
        <p>&copy; 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

function Home() {
  return <p>Home page</p>;
}

function Posts() {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <li key={id}><Link to={`${BASE}/posts/${id}`}>Post {id}</Link></li>
      ))}
    </ul>
  );
}

function About() {
  return <p>About page</p>;
}

function NotFound() {
  return <p>404 — Page not found</p>;
}

function RoutingDemo() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail base={BASE} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default RoutingDemo;
