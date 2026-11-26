// Task 17.3 Ex. 3 — NavLink (active class) and programmatic navigation with useNavigate.
import { useNavigate, NavLink } from 'react-router-dom';

function Navigation({ base = '' }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data (nothing to clear yet), then redirect to home.
    navigate(base || '/');
  };

  return (
    <nav aria-label="Demo navigation">
      {/* NavLink adds the active class automatically; `end` stops Home matching every path */}
      <NavLink to={base || '/'} end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>{' '}
      <NavLink to={`${base}/posts`} className={({ isActive }) => (isActive ? 'active' : '')}>
        Posts
      </NavLink>{' '}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navigation;
