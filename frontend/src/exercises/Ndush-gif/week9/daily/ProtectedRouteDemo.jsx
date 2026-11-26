// Day 4 — simulated auth: fake login, protected route, username in header, logout.
// Mount it inside the app's router at "auth-demo/*":
//   <Route path="auth-demo/*" element={<ProtectedRouteDemo />} />
import { useState, startTransition } from 'react';
import { Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';

const BASE = '/auth-demo';

function ProtectedRoute({ user, children }) {
  const location = useLocation();
  // Not logged in -> redirect to login, remembering where they were going.
  if (!user) return <Navigate to={`${BASE}/login`} replace state={{ from: location.pathname }} />;
  return children;
}

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onLogin(name.trim());
    navigate(location.state?.from ?? `${BASE}/dashboard`, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label htmlFor="pr-username">Username</label>
      <input id="pr-username" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
  );
}

function AuthHeader({ user, onLogout }) {
  const navigate = useNavigate();

  // React Router runs navigation as a transition. Clearing the user in the SAME
  // transition means both changes land together: we arrive on the public page
  // already logged out, instead of the guard on /dashboard redirecting to login.
  const handleLogout = () => {
    startTransition(() => {
      navigate(BASE);
      onLogout();
    });
  };
  return (
    <header>
      <Link to={BASE}>Public page</Link> · <Link to={`${BASE}/dashboard`}>Dashboard</Link>
      {user ? (
        <span> · Signed in as <strong>{user}</strong>{' '}
          <button onClick={handleLogout}>Log out</button>
        </span>
      ) : (
        <span> · <Link to={`${BASE}/login`}>Log in</Link></span>
      )}
    </header>
  );
}

function ProtectedRouteDemo() {
  const [user, setUser] = useState(null);

  return (
    <section>
      <h2>Protected route demo</h2>
      <AuthHeader user={user} onLogout={() => setUser(null)} />
      {/* Paths here are relative to "auth-demo/*" */}
      <Routes>
        <Route index element={<p>Public page. Try the Dashboard.</p>} />
        <Route path="login" element={<Login onLogin={setUser} />} />
        <Route
          path="dashboard"
          element={<ProtectedRoute user={user}><p>Welcome to your dashboard, {user}!</p></ProtectedRoute>}
        />
      </Routes>
    </section>
  );
}

export default ProtectedRouteDemo;
